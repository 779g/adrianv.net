/* @fwrlines/generator-react-component 2.3.4 */
import { urljoin as _u, loadable } from 'utils'

import MODULE_URLS from './urls'

const moduleName = 'app.articles'

//const redeemParam = ':slug([0-9a-f]{24})'

export default [
  {
    path     :MODULE_URLS.LIST,
    component:loadable(() => import (/* webpackChunkName: `app.site` */ './pages/List.js')),
    exact    :true
  },
  {
    path     :MODULE_URLS.SINGLE,
    component:loadable(() => import (/* webpackChunkName: `app.site` */ './pages/Single.js')),
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


