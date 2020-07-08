/* @fwrlines/generator-react-component 2.3.4 */
import * as React from 'react'
//import {} from 'react'
import PropTypes from 'prop-types'

import { Page, Heading } from '@fwrlines/ds'

import { NavBar,  LocalBreadcrumb } from 'app/common/components'
import { ArticleGroup } from '../components'
import allArticles from '../content/articleMap'
import { Link } from 'react-router-dom'

import URLS from '../urls'
import { SITE as SITE_URLS } from 'app/urls'

//Config
//import C from 'ui/cssClasses'

//Intl

import { FormattedMessage } from 'react-intl'
//import { FormattedMessage, FormattedHTMLMessage } from "react-intl";
import messages from './list.messages'
// <FormattedMessage {...messages.title} />
// <FormattedHTMLMessage {...messages.title} tagName='p'/>

//const baseClassName = 'page_article_list'
const baseId = 'page_article_list'

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
      className:'ph-u u2 v10 pv-v gt-center',
      id       :'head'
    },
    headingProps:{
      //id,
      className:'uc gc-column',
      //style,
      //children, //appended at bottom

      heading  :<FormattedMessage {...messages.title} />,
      //headingClassName:'ts-green',
      headingAs:'h1',
      //headingProps :{}

      label:<LocalBreadcrumb>
        <LocalBreadcrumb.Item
          to={URLS.LIST}
          position={2}
        >
          <FormattedMessage {...messages.title} />
        </LocalBreadcrumb.Item>
      </LocalBreadcrumb>,
      labelClassName:'simple',
      //labelAs:'p',
      //labelProps :{},
      //
      subtitle      :<FormattedMessage {...messages.subtitle} />
      //subtitleClassName,
      //subtitleProps:{},

    }

  },
  sectionAll:{
    sectionProps:{
      className:'v4 pv-v gt-center u2',
      id       :'all'
    },
    headingProps:{
      //id,
      className:'uc gc-column ph-u',
      //style,
      //children, //appended at bottom

      heading  :<FormattedMessage {...messages.allTitle} />,
      //headingClassName:'ts-green',
      headingAs:'h2',
      //headingProps :{}

      //label:'',
      labelClassName:'simple',
      //labelAs:'p',
      //labelProps :{},
      //
      subtitle      :<FormattedMessage {...messages.allSubtitle} />
      //subtitleClassName,
      //subtitleProps:{},

    },
    articleGroup:{
      articles:allArticles,
      grid:true
    }

  },
  sectionSb:{
    sectionProps:{
      className:'v4 pv-v gt-center u2',
      id       :'storybook'
    },
    headingProps:{
      //id,
      className:'uc gc-column ph-u',
      //style,
      //children, //appended at bottom

      heading  :<FormattedMessage {...messages.sbTitle} />,
      //headingClassName:'ts-green',
      headingAs:'h2',
      //headingProps :{}

      //label:'',
      labelClassName:'simple',
      //labelAs:'p',
      //labelProps :{},
      //
      subtitle      :<FormattedMessage {...messages.sbSubtitle} />
      //subtitleClassName,
      //subtitleProps:{},

    },
    articleGroup:{
      articles    :allArticles,
      filterSeries:'Storybook'
    }

  },

  sectionEnd:{
    sectionProps:{
      className:'ph-u u2 v4 pv-v gt-center',
      id       :'end'
    }

  }
}

/**
 * Page `ArticleList`
 * Description :
 */
const ArticleList = ({
  history,
  location,
  match
}) => (
  <Page
    id={baseId}
    //itemType="https://schema.org/FAQPage"
    HELMET={helmet}
  >
    <NavBar />
    <Page.Section
      {...content.sectionTitle.sectionProps}
    >
    
      <Heading {...content.sectionTitle.headingProps} />
    </Page.Section>
    <Page.Section
      {...content.sectionSb.sectionProps}
    >
    
      <Heading {...content.sectionSb.headingProps} />
      <div className="gc-wide mv-v">
        <ArticleGroup
          {...content.sectionSb.articleGroup}
          style={{
            '--card-width':'300px'
          }}
        />
      </div>
    </Page.Section>
    <Page.Section
      {...content.sectionAll.sectionProps}
    >
    
      <Heading {...content.sectionAll.headingProps} />
      <div className="gc-wide mv-v">
        <ArticleGroup
          {...content.sectionAll.articleGroup}
          style={{
            '--card-width':'300px'
          }}
        />
      </div>
    </Page.Section>
    <Page.Section
      {...content.sectionEnd.sectionProps}
    >
      <p className="h4 gc-column uc mv-v">
        <FormattedMessage {...messages.comingSoon} />
      </p>
      <p className="ks s1 gc-column uc mv-v x-subtitle c-x">
        <FormattedMessage
          {...messages.contact}
          values={{
            link:<Link to={SITE_URLS.CONTACT} >
              <FormattedMessage {...messages.contactLink} />
            </Link>
          }}
        />
      </p>
    

    </Page.Section>
  </Page>
)

ArticleList.propTypes = {

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
ArticleList.defaultProps = {
  status: 'neutral',
}
*/


export default ArticleList
