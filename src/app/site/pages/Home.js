/* @fwrlines/generator-react-component 2.3.4 */
import * as React from 'react'
//import {} from 'react'
import PropTypes from 'prop-types'

import { Page, Heading } from '@fwrlines/ds'

import { LocalBreadcrumb } from 'app/common/components'


import URLS from '../urls'
//Config
//import C from 'ui/cssClasses'

//Intl

//import { FormattedMessage} from "react-intl";
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl'
import messages from './home.messages'
// <FormattedMessage {...messages.title} />
// <FormattedHTMLMessage {...messages.title} tagName='p'/>

//const baseClassName = 'page_home'
const baseId = 'page_home'

const helmet = {
  robots   :'noindex, nofollow',
  title    :'test of the title',
  title_tag:'this should appear in the title tag'

  /*
  canonical          :'https://home.com/description',
  meta_description   :'This is the meta description. 170 chars.',
  twitter_title      :'For twitter, a title',
  twitter_description:'',
  twitter_image      :'',
  og_title           :'This is the open graph title',
  og_description     :'',
  og_image           :'',
  og_type            :'',
  og_url             :'',
  */
}

const content = {
  sectionTitle:{
    sectionProps:{
      head     :true,
      className:'p-u u2',
      id       :'head'
    },
    headingProps:{
      //id,
      //className:'uc',
      //style,
      //children, //appended at bottom

      heading  :<FormattedMessage {...messages.title} />,
      //headingClassName:'ts-green',
      headingAs:'h1',
      //headingProps :{}

      
      label   :'',
      //labelClassName:'x-red basic',
      //labelAs:'p',
      //labelProps :{},
      //
      subtitle:<FormattedMessage {...messages.subtitle} />
      //subtitleClassName,
      //subtitleProps:{},

    }

  },

  sectionCards:{
    sectionProps:{
      head     :true,
      className:'p-u u2',
      id       :'head'
    }

  }
}

/**
 * Page `Home`
 * Description :
 */
const Home = ({
  history,
  location,
  match
}) => (
  <Page
    id={baseId}
    itemType="https://schema.org/FAQPage"
    HELMET={helmet}
  >
    <Page.Section
      {...content.sectionTitle.sectionProps}
    >
    
      <Heading
        {...content.sectionTitle.headingProps}
      />
    </Page.Section>
    <Page.Section
      id="a1"
      className="p-u u2"
    >
      <h2>Section A2</h2>
      <p>Some content here. Blah blah</p>
    
    </Page.Section>
    <Page.Section
      id="a2"
      className="p-u u2"
    >
      <h2>Section A2</h2>
      <p>Some content here. Blah blah</p>
    
    </Page.Section>
  </Page>
)

Home.propTypes = {

  /**
   *
   */
  someprop:PropTypes.node

  /*
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  : PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  children: PropTypes.node,
  : PropTypes.func,
  styles: PropTypes.object,
  : PropTypes.oneOf(['', ''])
  */
}

/*
Home.defaultProps = {
  status: 'neutral',
}
*/


export default Home
