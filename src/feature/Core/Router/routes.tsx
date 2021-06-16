import { RouterComponentType } from '../App/types';
import NotFound from '../../../components/organics/404';
import React, { lazy, LazyExoticComponent, Suspense } from 'react';
import Loading from '../../../components/organics/Loading';
import { Sample } from '../../Project/_Sample';
import { Page } from '../../../pages';

const OtherComponent = lazy(() => import('../../../components/organics/404'));

const withSuspense = (Component: LazyExoticComponent<() => JSX.Element>) => (
  <Suspense fallback={Loading}>
    <Component />
  </Suspense>
);

export const Routes: RouterComponentType[] = [
  {
    path: '/',
    exact: true,
    component: withSuspense(OtherComponent),
  },
  {
    path: '/3',
    exact: true,
    component: <Page.TodoPage />,
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
