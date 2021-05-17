import { RouterComponentType } from '../App/types';
import NotFound from '../../../components/organics/404';
import React, { lazy, LazyExoticComponent, Suspense } from 'react';
import Loading from '../../../components/organics/Loading';
import { Sample } from '../../Project/Sample';

const OtherComponent = lazy(() => import('../../../components/organics/404'));

const withSuspense = (Component: LazyExoticComponent<() => JSX.Element>) => (
  <Suspense fallback={Loading}>
    <Component />
  </Suspense>
);

export const Routes: RouterComponentType[] = [
  {
    path: '/2',
    exact: true,
    component: withSuspense(OtherComponent),
  },
  {
    path: '/3',
    exact: true,
    component: <Sample.Container />,
  },
  {
    path: '/',
    exact: true,
    component: <p>ssss</p>,
  },
  {
    path: '/NotFound',
    exact: true,
    component: <NotFound />,
  },
];
