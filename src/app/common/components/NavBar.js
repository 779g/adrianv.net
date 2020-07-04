/* @fwrlines/generator-react-component 2.3.4 */
import * as React from 'react'
//import {} from 'react'
import PropTypes from 'prop-types'

import { Switch, Redirect, Route, Link } from 'react-router-dom'
import { ThemeSelector, IconLink } from 'app/common/components'

import { useIsTop } from '@fwrlines/utils'

import * as URLS from 'app/urls.js'

import {
  HorizontalBar
} from '@fwrlines/ds'

const menuItems = [

  /*{
    children:'home',
    to      :URLS.SITE.HOME
  },
  */
  {
    children:'resources',
    to      :URLS.ARTICLES.LIST
  },
  {
    children:'oss',
    to      :URLS.SITE.OSS
  },
  {
    children:'cv',
    to      :URLS.SITE.CURRICULUM
  },
  {
    children:'testart',
    to      :'/heyheyihey'
  },
  {
    children:'NF',
    to      :'/ntfnd'
  }
]

//Intl

//import { FormattedMessage} from "react-intl";
//import messages from "./messages";
// <FormattedMessage {...messages.title} />

//Config

//import C from 'ui/cssClasses'

//Relative imports
//import styles from './nav_bar.scss'
import { isBackend } from 'utils/isBackend'

if (!isBackend) {
  import('./nav_bar.scss')
}

const baseClassName = 'nav_bar'


/**
 * Use `NavBar` to
 * Has color `x`
 */
const NavBar = ({
  id,
  className,
  style
}) => {

  const isTop = useIsTop()

  return (

    <HorizontalBar
      className={
        [
        //styles[baseClassName],
          baseClassName,
          'yf s1 k-s',
          isTop ? 'istop y-transparent' : 'y-background',
          'b-light-y',
          className
        ].filter(e => e).join(' ')
      }
      id={id}
      style={style}
    >
      <ul
        className="compact yf v0 m-v"
      >
        <li>
          <IconLink to="/" >
      1
          </IconLink>
        </li>
        { menuItems.map((e, i) =>
          (<li className="item">
            <Link
              {...e}
              key={i}
            />
          </li>)
        ) }
        <li>
          <IconLink to={ URLS.SITE.CONTACT }>
      S
          </IconLink>
        </li>
        <li>
          <IconLink to={ URLS.SITE.CREDITS } >
      O
          </IconLink>
        </li>
        <li>
          <ThemeSelector />
        </li>
      </ul>
    </HorizontalBar>
  )
}

NavBar.propTypes = {

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
NavBar.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/
export default NavBar
