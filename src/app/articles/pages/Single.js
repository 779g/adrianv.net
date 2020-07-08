/* @fwrlines/generator-react-component 2.3.4 */
import * as React from 'react'
import { useEffect, useState, useMemo } from 'react'
import PropTypes from 'prop-types'


import { Page, Heading } from '@fwrlines/ds'
import URLS from '../urls'


import { ArticleGroup } from 'app/articles/components'
import { NavBar,  LocalBreadcrumb } from 'app/common/components'
//Config
//import C from 'ui/cssClasses'

//Intl

import allArticles from '../content/articleMap'
import { FormattedMessage} from "react-intl";
import messages from "./single.messages";
import articleListMessages from "./list.messages";
// <FormattedMessage {...messages.title} />
// <FormattedHTMLMessage {...messages.title} tagName='p'/>

//const baseClassName = 'page_article_single'
const baseId = 'page_article_single'

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

const mainHeadingProps = {
  //id,
  className:'uc',
  //style,
  //children, //appended at bottom

  heading  :'Single Article',
  //headingClassName:'ts-green',
  headingAs:'h1',
  //headingProps :{}

  label         :'Film',
  labelClassName:'x-green basic',
  //labelAs:'p',
  //labelProps :{},
  //
  subtitle      :'Stanley Kubrick, 1960'
  //subtitleClassName,
  //subtitleProps:{},

}

/**
 * Page `ArticleSingle`
 * Description :
 */
const ArticleSingle = ({
  history,
  location,
  match
}) => {
  const slug = match.params.slug

  const article = useMemo(() => {
    return allArticles.find(e => e.slug === slug) || {}
  },
    [slug]
  )

  const content = useMemo(() => ({
    sectionTitle:{
      sectionProps:{
        head     :true,
        className:'ph-u u2 v8 pv-v gt-center',
        id       :'head'
      },
      headingProps:{
      //id,
        className:'gc-column',
        //style,
        //children, //appended at bottom

        heading  :article.title,
        headingClassName:'small',
        headingAs:'h1',
        //headingProps :{}

        label:<LocalBreadcrumb>
          <LocalBreadcrumb.Item
            to={URLS.LIST}
            position={2}
          >
            <FormattedMessage {...articleListMessages.title} />
          </LocalBreadcrumb.Item>
        </LocalBreadcrumb>,
        labelClassName:'simple',
        //labelAs:'p',
        //labelProps :{},
        //
        subtitle      :article.description
        //subtitleClassName,
        //subtitleProps:{},

      }

    }
  }), [slug])

  //console.log(88, slug)
  const [ArticleContent, setArticleContent] = useState(
    () => (
      () => <p>Loading...</p>
    ))

  useEffect(
    () => {
      const fetchResult = async () => await import(
          /* webpackPreload:true */
          `../content/${slug}.mdx`
      ).then(Module => setArticleContent(() => {
        return Module.default
      })).catch(e => setArticleContent(() => () => 
        <p className='x-error c-x'>{ e.message }</p>
      ))
      fetchResult()
    }
    , 
    [slug])


  return (
    <Page
      id={baseId}
      itemType="https://schema.org/FAQPage"
      HELMET={helmet}
    >
      <NavBar />
    <Page.Section
      {...content.sectionTitle.sectionProps}
    >
    
      { article.title ? <Heading {...content.sectionTitle.headingProps} /> :
          <Heading 
            className='ph-u g3'
            label='Not found'
            labelClassName='x-error'
            headingAs='h1'
            heading={ 
              '404'
            }
            subtitle={
              'The article you have requested does not exist. Instead, you might find the following articles interesting.'
            }
          />
      }
    </Page.Section>
      { article.title ?
          <>
      <Page.Section
        id="a1"
        className="p-u u2 gt-center"
        as='main'
      >
        <div className="content gc-column">
          <ArticleContent/>
          
        </div>
    
      </Page.Section>
      <Page.Section
        id="a2"
        className="u2"
      >
        { article.series.map(e => e[0]).map(
          (e, i) => 
            <div className='uc'>
              <Heading
                headingAs='h2'
                headingClassName='small'
                heading={
                  <>More articles in the { e } series :</>
                }
              />
        <ArticleGroup
          articles={ allArticles }
          mini
          className='ul'
          filterSeries={ e }
          style={{
            '--card-width':'300px'
          }}
        />
              </div>
        )}
      </Page.Section>
          </>:
      <Page.Section
        id="a2"
        className="p-u u2"
      >
        <ArticleGroup
          articles={ allArticles }
          className='ul'
          style={{
            '--card-width':'350px'
          }}
        />
      </Page.Section>

      }
    </Page>
  )
}

ArticleSingle.propTypes = {

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
ArticleSingle.defaultProps = {
  status: 'neutral',
}
*/


export default ArticleSingle
