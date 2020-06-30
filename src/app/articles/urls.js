/* @fwrlines/generator-react-component 2.3.4 */
import { urljoin as _u } from 'utils'

const basePath = '/articles'
const slugUrlParam = '/:slug([0-9a-z-]{8,80})'
//const redeemParam = ':slug([0-9a-f]{24})'

export default {
  //LOGIN  :'login',
  LIST  :basePath,
  SINGLE:slugUrlParam
}
