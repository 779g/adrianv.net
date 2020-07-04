/* @fwrlines/generator-react-component 2.3.4 */
import * as React from 'react'
import { useContext, useMemo } from 'react'
import PropTypes from 'prop-types'

import { SVG, SiteContext } from '@fwrlines/ds'


//Intl

//import { FormattedMessage} from "react-intl";
//import messages from "./messages";
// <FormattedMessage {...messages.title} />

//Config

//import C from 'ui/cssClasses'

//Relative imports
//import styles from './theme_selector.scss'
import { isBackend } from 'utils/isBackend'

if (!isBackend) {
  import('./theme_selector.scss')
}

const baseClassName = 'theme_selector'


/**
 * Use `ThemeSelector` to
 * Has color `x`
 */
const ThemeSelector = ({
  id,
  className,
  style
}) => {

  const {
    preferredTheme,
    setPreferredTheme
  } = useContext(SiteContext)

  const themes = ['light', 'dark', 'iceberg' ]

  const loopThemes = useMemo(() => () => {
    const current = themes.indexOf(preferredTheme)
    console.log('looping')
    setPreferredTheme(themes[(current + 1) % themes.length])
  },
  [preferredTheme]
  )

  return (
    <div
      className={
        [
        //styles[baseClassName],
          baseClassName,
          'pointer',
          className
        ].filter(e => e).join(' ')
      }
      id={id}
      style={style}
    >
      <SVG
        height={`${Math.pow(1.2, 3)}em`}
        width={`${Math.pow(1.2, 3)}em`}
        target="kare-bomb"
        sprite="/dev.sprite.svg"
        className="pointer x-link xh-red c-x"
        useClassName='pointer'
        onClick={loopThemes}
      />
      {/* preferredTheme */}
    </div>
  )
}

ThemeSelector.propTypes = {

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
ThemeSelector.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/
export default ThemeSelector
