/* @fwrlines/generator-react-component 2.3.4 */
import * as React from 'react'
import { useContext } from 'react'
import PropTypes from 'prop-types'

import { SiteContext, Page, Heading, Image } from '@fwrlines/ds'

import { BarBack } from 'app/common/components'


//Config
//import C from 'ui/cssClasses'

//Intl

import { FormattedMessage } from 'react-intl'
//import { FormattedMessage, FormattedHTMLMessage } from "react-intl";
import messages from './contact.messages'
// <FormattedHTMLMessage {...messages.title} tagName='p'/>

//const baseClassName = 'page_contact'
const baseId = 'page_contact'

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


/**
 * Page `Contact`
 * Description :
 */
const Contact = ({
  history,
  location,
  match
}) => {
  
  const {
    SUPPORT_EMAIL
  } = useContext(SiteContext)
  
  return (
    <Page
      id={baseId}
      //itemType="https://schema.org/FAQPage"
      className='y-blue b-dark-y ui-dark yf'
      HELMET={helmet}
      style={{'height':'100%', 'flexDirection':'column'}}
    >
      <BarBack></BarBack>
      <Page.Section
        id="a1"
        className="p-u u2 v2"
        //style={{'minHeight':'100%'}}
      >
        <div className="uc ft-fill">
          <p className="h5 uc mv-v">
            <a href={`mailto:${SUPPORT_EMAIL}`}>{ SUPPORT_EMAIL }</a>
          </p>
          <Image
            src="/yo.png"
            style={{'maxWidth':'330px', width:'80%', 'maxHeight':'45vh', minHeight:'200px'}}
            objectFit='contain'
            alt="Me on my first computer, circa 1995"
          />
          <p className="h5 uc mv-v">
            <FormattedMessage {...messages.description} />
          </p>
        </div>
    
      </Page.Section>
    </Page>
  )
}

Contact.propTypes = {

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
Contact.defaultProps = {
  status: 'neutral',
}
*/


export default Contact
