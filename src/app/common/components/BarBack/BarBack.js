/* @fwrlines/generator-react-component 2.3.4 */
import * as React from 'react'
//import {} from 'react'
import PropTypes from 'prop-types'


import { CloseBackOrRedirect } from '@fwrlines/ds'

//Intl

//import { FormattedMessage} from "react-intl";
//import messages from "./messages";
// <FormattedMessage {...messages.title} />

//Config

//import C from 'ui/cssClasses'

//Relative imports
//import styles from './bar_back.scss'
import { isBackend } from 'utils/isBackend'

if(!isBackend) {
  import('./bar_back.scss')
}

const baseClassName = 'bar_back'


/**
 * Use `BarBack` to
 * Has color `x` 
 */
const BarBack = ({
  id,
  className,
  style
}) => {
  
  
  return (
  <nav
    className={
      [
        //styles[baseClassName],
        baseClassName,
        'v2 p-v s2 k-s',
        className
      ].filter(e => e).join(' ')
  }
    id={ id }
    style={ style }
  >
    <CloseBackOrRedirect icon='h'/>
  </nav>
)}

BarBack.propTypes = {
  /**
   * Provide an HTML id to this element
   */
  id: PropTypes.string,

  /**
   * The html class names to be provided to this element
   */
  className: PropTypes.string,

  /**
   * The JSX-Written, css styles to apply to the element.
   */
  style: PropTypes.object,

  /**
   *  The children JSX
   */
  children: PropTypes.node,

  /**
   * Which html tag to use
   */
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]), 
  //as: PropTypes.string,

  /**
   * The height of the element
   */
  height: PropTypes.string,

  /**
   * The width of the element
   */
  width: PropTypes.string,
  /*
  : PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  : PropTypes.func,
  : PropTypes.func,
  : PropTypes.oneOf(['', ''])
  */
}

/*
BarBack.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/
export default BarBack
