import * as React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter } from 'react-router-dom'

import { loadableReady } from '@loadable/component'

import BaseApp from 'app/BaseApp'


import(

  /* webpackPreload:true */
  /* webpackChunkName:'styles' */
  'styles/local.scss'
)


const rootElement = document.getElementById('main')

const jsx = (
  <BrowserRouter>
	  <BaseApp />
  </BrowserRouter>
)


/* When main pagedelivered by SSR, not sure why, js is loaded twice for Loadable components
  console.log(rootElement.hasChildNodes(), rootElement.innerHTML) */

loadableReady(() => {
  if (rootElement.hasChildNodes()) {
    ReactDOM.hydrate(
      jsx,
      rootElement)
  }
  else {
    ReactDOM.render(
      jsx,
      rootElement)
  }


})

if (module.hot) {
  module.hot.accept()
}
