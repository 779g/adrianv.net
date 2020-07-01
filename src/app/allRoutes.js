//import { routes as authRoutes } from './auth'
//import { routes as dashboardRoutes } from './dashboard'
import { routes as siteRoutes } from './site'
import { routes as articlesRoutes } from './articles'
import { routes as commonRoutes } from './common'

export default [
//  ...dashboardRoutes,
  ...commonRoutes,
  ...siteRoutes,
  ...articlesRoutes
]
