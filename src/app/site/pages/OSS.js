/* @fwrlines/generator-react-component 2.3.4 */
import * as React from 'react'
//import {} from 'react'
import PropTypes from 'prop-types'

import { Page, Heading, IconCard } from '@fwrlines/ds'

import { LocalBreadcrumb } from 'app/common/components'

import URLS from '../urls'

//Config
//import C from 'ui/cssClasses'

//Intl

import { FormattedMessage } from 'react-intl'
//import { FormattedMessage, FormattedHTMLMessage } from "react-intl";
import messages from './oss.messages'
//<FormattedHTMLMessage {...messages.title} tagName='p'/>

//const baseClassName = 'page_o_s_s'
const baseId = 'page_o_s_s'

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
      className:'ph-u u2 v4 pv-v',
      id       :'head'
    },
    headingProps:{
      //id,
      className:'uc',
      //style,
      //children, //appended at bottom

      heading  :<FormattedMessage {...messages.title} />,
      //headingClassName:'ts-green',
      headingAs:'h1',
      //headingProps :{}

      label:<LocalBreadcrumb>
        <LocalBreadcrumb.Item
          to={URLS.OSS}
          position={2}
        >
          <FormattedMessage {...messages.title} />
        </LocalBreadcrumb.Item>
      </LocalBreadcrumb>,
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
    },
    cardMap:[
      {
        className   :'y-background',
        headingProps:{
          heading         :'@fwrlines/swatch',
          headingAs       :'h3',
          headingClassName:'s4 k-s c-on-y',
          subtitle        :<a
            href="https://github.com/fwrlines/swatch"
            target="_blank"
            rel="nofollow"
            data-icon="h"
          >
            fwrlines/swatch
          </a>
        },
        svgTarget:'engine-1',
        children :<FormattedMessage {...messages.title} />,
        cardProps:{
          backFace:<FormattedMessage {...messages.title} />
        }
      }


    ]

  }
}


/**
 * Page `OSS`
 * Description :
 */
const OSS = ({
  history,
  location,
  match
}) => (
  <Page
    id={baseId}
    //itemType="https://schema.org/FAQPage"
    HELMET={helmet}
  >
    <Page.Section
      {...content.sectionTitle.sectionProps}
    >
    
      <Heading {...content.sectionTitle.headingProps} />
    </Page.Section>
    <Page.Section
      id="a1"
      className="p-u u2"
    >
      { content.sectionCards.cardMap.map((e, i) =>
        (<IconCard
          key={i}
          {...e}
        />)
      ) }
    
    </Page.Section>
  </Page>
)

OSS.propTypes = {

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
OSS.defaultProps = {
  status: 'neutral',
}
*/


export default OSS
