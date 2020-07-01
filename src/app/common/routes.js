/* @fwrlines/generator-react-component 2.2.4 */
import { urljoin as _u, loadable } from 'utils'

import MODULE_URLS from './urls'

const moduleName = 'app.common'

//const redeemParam = ':slug([0-9a-f]{24})'

export default [
  {
    path     :_u(MODULE_URLS.STATUS_404),
    component:loadable(() => import (/* webpackChunkName: `app.site` */ './pages/Status404.js')),
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


