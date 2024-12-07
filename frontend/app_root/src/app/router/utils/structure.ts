import { NotFound } from '@components/templates/404'
import { RoutesEnum } from '@constants/routes'
import * as Layouts from '@layouts/index'
import { mf } from './config'
import * as Pages from './pages'
import { RouteConfigType } from './render'

const rootPath = mf.root || '/'

/**
 * Application route structure
 * @example
 * // Example of nested routes configuration:
 * const routes: RouteConfigType[] = [
 *   {
 *     path: '/users', // List of user's
 *     element: UsersList,
 *     layout: MainLayout,
 *     children: [
 *       {
 *         path: ':id', // /users/:id – User details
 *         element: UserDetails
 *       },
 *       {
 *         path: 'search', // /users/search – Search users
 *         element: UserSearch
 *       },
 *       {
 *         path: 'create', // /users/create – Create a new user
 *         element: UserCreate
 *       }
 *     ]
 *   }
 * ]
 */
export const routeStructure: RouteConfigType[] = [
  {
    path: rootPath,
    layout: Layouts.Main,
    element: Pages.Main,
  },
  {
    path: `${rootPath}${mf.auth}${RoutesEnum.auth}*`,
    element: Pages.Auth,
  },
  {
    path: '*',
    element: NotFound,
    layout: Layouts.Main,
  },
]
