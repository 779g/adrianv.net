/* @fwrlines/generator-react-component 2.3.4 */
import * as React from 'react'
//import {} from 'react'
import PropTypes from 'prop-types'

import { Breadcrumb } from '@fwrlines/ds'


//Intl

import { FormattedMessage } from 'react-intl'
import messages from './messages'

//Config

//import C from 'ui/cssClasses'

//Relative imports
//import styles from './local_breadcrumb.scss'
import { isBackend } from 'utils/isBackend'

if (!isBackend) {
  import('./local_breadcrumb.scss')
}

const baseClassName = 'local_breadcrumb'


/**
 * Use `LocalBreadcrumb` to
 * Has color `x`
 */
const LocalBreadcrumb = ({
  id,
  className,
  style,
  children,
  ...otherProps
}) => (
  <Breadcrumb
    className={
      [
        //styles[baseClassName],
        baseClassName,
        'v0 m-v',
        className
      ].filter(e => e).join(' ')
    }
    id={id}
    style={style}
    {...otherProps}
  >
    <Breadcrumb.Item
      to="/"
      position={1}
    >
      <FormattedMessage {...messages.home} />
    </Breadcrumb.Item>
    { children }
  </Breadcrumb>
)

LocalBreadcrumb.propTypes = {

  /**
   * Provide an HTML id to this element
   */
  id:PropTypes.string,

  /**
   * The html class names to be provided to this element
   */
  className:PropTypes.string,

  /**
   * The JSX-Written, css styles to apply to the element.
   */
  style:PropTypes.object,

  /**
   *  The children JSX
   */
  children:PropTypes.node,

  /**
   * Which html tag to use
   */
  as:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  //as: PropTypes.string,

  /**
   * The height of the element
   */
  height:PropTypes.string,

  /**
   * The width of the element
   */
  width:PropTypes.string

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
LocalBreadcrumb.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/
LocalBreadcrumb.Item = Breadcrumb.Item

export default LocalBreadcrumb
