/* @fwrlines/generator-react-component 2.3.4 */
import * as React from 'react'
import { useMemo } from 'react'
import PropTypes from 'prop-types'

import { Button, NavBar as BaseNavBar } from '@fwrlines/ds'

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
    children:'Experience',
    to      :URLS.SITE.CURRICULUM
  },
  {
    children:'Articles & Tutorials',
    to      :URLS.ARTICLES.LIST
  },
  {
    children:'OSS',
    to      :URLS.SITE.OSS
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


  const TitleComponent = useMemo(() => ({ open }) => (
    <Link
      to="/"
      className="xs-h sm-h"
    >
      <Button
      //simple
        className="x-link fi-cairo fi s5 k-s"
        style={{ padding: '.3em', height: 'min-content', fontWeight: 'normal', lineHeight: '.8em' }}
        simple
      >
1
      </Button>
    </Link>


  ), [])

  const FooterComponent = useMemo(() => ({ open }) => (
    <Button.Group className={`${open && ''} gc-footer u0`}>
      <Link
        to={URLS.SITE.CONTACT}
        className={!open && 'xs-h sm-h'}
      >
        <Button
          className="x-link fi-cairo fi s6 k-s"
          simple
          style={{ padding: '0 0 0 .3em', height: 'min-content', fontWeight: 'normal', lineHeight: '.8em', top: '-.12em' }}
        >
        S
        </Button>
      </Link>
      <Link
        to={URLS.SITE.CREDITS}
        className={!open && 'xs-h sm-h'}
      >
        <Button
          className="x-link fi-cairo fi s6 k-s"
          simple
          style={{ padding: '0 0 0 .3em', height: 'min-content', fontWeight: 'normal', lineHeight: '.8em', top: '-.07em' }}

        >
        O
        </Button>
      </Link>
      <ThemeSelector
        simple
        className="s1 k-s"
        style={{ padding: '0 .4em 0 .6em' }}
      />
    </Button.Group>


  ), [])

  return (
    <BaseNavBar
      className={
        [
          //styles[baseClassName],
          baseClassName,
          className
        ].filter(e => e).join(' ')
      }
      openClassName="y-background b-dark-y"
      closedClassName={
        [
          isTop ? 'istop y-transparent' : 'y-background'
        ].filter(e => e).join(' ')

      }
      id={id}
      style={style}
      headerClassName="x-paragraph"
      headerOpenClassName="x-link"
      headerClosedClassName="b-light-y"
      contentOpenClassName="s4 k-s"
      contentClosedClassName="s1 k-s"
      FooterComponent={FooterComponent}
      TitleComponent={TitleComponent}
    >
      { menuItems.map(({ to, ...props }, i) =>
        (
          <BaseNavBar.Item
            link={to}
            {...props}
            key={i}
          />
        )
      ) }
    </BaseNavBar>

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
