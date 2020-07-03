import * as React from 'react'

import { SiteContextProvider } from '@fwrlines/ds'

import { IntlProvider } from 'react-intl'

import App from './App'

import localizedMessages from 'translations/en.json'

import siteContextConfig from 'config/siteContext'

export default (props) => (
  <SiteContextProvider
    config={siteContextConfig}
    initialTheme="dark"
  >
    <IntlProvider
      locale={'en'}
      messages={localizedMessages}
    >
      <App {...props} />
    </IntlProvider>
  </SiteContextProvider>
)

