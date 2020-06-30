/* @fwrlines/generator-react-component 2.3.4 */
import { urljoin as _u, loadable } from 'utils'

import MODULE_URLS from './urls'

const moduleName = 'app.site'

//const redeemParam = ':slug([0-9a-f]{24})'

export default [
  {
    path     :_u(MODULE_URLS.CURRICULUM),
    component:loadable(() => import (/* webpackChunkName: `app.site` */ './pages/Curriculum.js')),
    exact    :true
  },
  {
    path     :_u(MODULE_URLS.OSS),
    component:loadable(() => import (/* webpackChunkName: `app.site` */ './pages/OSS.js')),
    exact    :true
  },
  {
    path     :_u(MODULE_URLS.HOME),
    component:loadable(() => import (/* webpackChunkName: `app.site` */ './pages/Home.js')),
    exact    :true
  }

  /*
  {
    path     :MODULE_URLS.LOGOUT,
    component:Logout,
    private  :true,
    //test:(user) => user.id
  },
  */
]


