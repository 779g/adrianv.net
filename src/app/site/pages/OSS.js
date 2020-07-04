/* @fwrlines/generator-react-component 2.3.4 */
import * as React from 'react'
//import {} from 'react'
import PropTypes from 'prop-types'

import { Page, Heading, IconCard, IconList } from '@fwrlines/ds'

import { NavBar, LocalBreadcrumb } from 'app/common/components'

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

const LocalCard = ({
  children,
  small,
  heading,
  label,
  backFace,
  icon,
  labelClassName,
  npm,
  github,
  demo,
  docs,
  ...otherProps
}) => {
  const linksReduced = [
    [npm, 'npm'],
    [github, 'github'],
    [demo, 'demo'],
    [docs, 'docs']
  ].reduce((a, e, i) => {
    e[0] && a.push(() => (<a
      href={e[0]}
      className='cool-link'
      target="_blank"
      rel="noopener noreferrer nofollow"
                          >
      { e[1] }
    </a>))
    return a
  },
  []).map((E, i) => {
    if (i-1 >= 0) {
      return (<>
        &nbsp;
        
        { ' | ' }
&nbsp;
        <E />
      </>)
    }
    return <E />

  })

  return (
    <IconCard
      svgSprite="/dev.sprite.svg"
      headingProps={{
        heading       ,
        label           ,
        labelClassName  :labelClassName + ' s-3 k-s c-on-x b-dark-x',
        headingAs       :'h3',
        headingClassName:'small',
        children        :<span  className="s-1 k-s c-light-x">{ linksReduced }</span>

      /*subtitle        :<a
        href="https://github.com/fwrlines/swatch"
        target="_blank"
        rel="nofollow"
        data-icon="h"
                       >
            sub
      </a>*/
      }}
      svgTarget={icon}
      cardProps={{
        ...otherProps.cardProps,
        backFace }}
    
      {...otherProps}
    >

      <div
        className={
          [
            'k-s',
            small ? 's-1' : 's0'
          ].filter(e => e).join(' ')
        }
      >
        <span className='x-paragraph c-x'>
        { children }
        </span>
      </div>
    </IconCard>
  )
}

LocalCard.defaultProps = {
  //icon    :'engine-1',
  //children:<FormattedMessage {...messages.title} />
  
}

const content = {
  sectionTitle:{
    sectionProps:{
      head     :true,
      className:'ph-u u2 v4 pv-v gt-center',
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
          to={URLS.OSS}
          position={2}
        >
          <FormattedMessage {...messages.title} />
        </LocalBreadcrumb.Item>
      </LocalBreadcrumb>,
      labelClassName:'simple',
      //labelAs:'p',
      //labelProps :{},
      //
      subtitle:<FormattedMessage {...messages.subtitle} />
      //subtitleClassName,
      //subtitleProps:{},

    }

  },

  sectionLibraries:{
    sectionProps:{
      head     :true,
      className:'u2 pv-v v6 gt-center',
      id       :'head'
    },
    headingProps:{
      //id,
      className:'uc ph-u gc-column',
      //style,
      //children, //appended at bottom

      heading  :<FormattedMessage {...messages.libsTitle} />,
      //headingClassName:'ts-green',
      headingAs:'h2',
      //headingProps :{}

      label   :'',
      subtitle:<FormattedMessage {...messages.libsSubtitle} />
      //labelClassName:'x-red basic',
      //labelAs:'p',
      //labelProps :{},
      //
      //subtitleClassName,
      //subtitleProps:{},

    },
    cardMap:[
      {
        icon          :'swatch',
        svgClassName  :'x-orange c-x',
        className     :'y-background b-light-y x-subtitle',
        label         :'SASS',
        labelClassName:'x-orange',
        heading       :'Swatch',
        npm           :'@fwrlines/swatch',
        demo          :'https://demo.swatch.fwrlines.com',
        docs          :'https://swatch.fwrlines.com',
        github        :'fwrlines/swatch',
        children      :<FormattedMessage {...messages.swatchDescription} />

        /*
        backFace      :<IconCard.Section>
          <FormattedMessage {...messages.title} />
        </IconCard.Section>
        */
      },
      {
        icon          :'ds',
        svgClassName  :'x-heading c-x',
        className     :'y-background b-light-y x-subtitle',
        label         :'React',
        labelClassName:'x-blue',
        heading       :'Design System',
        npm           :'@fwrlines/ds',
        github        :'fwrlines/ds',
        demo          :'demo',
        children      :<FormattedMessage {...messages.dsDescription} />

        /*
        backFace      :<IconCard.Section>
          <FormattedMessage {...messages.title} />
        </IconCard.Section>
        */
      }
    ]
  },

  sectionHelpers:{
    sectionProps:{
      head     :true,
      className:'u2 pv-v v6 gt-center',
      id       :'head'
    },
    headingProps:{
      //id,
      className:'uc ph-u gc-column',
      //style,
      //children, //appended at bottom

      heading  :<FormattedMessage {...messages.helpersTitle} />,
      //headingClassName:'ts-green',
      headingAs:'h2',
      //headingProps :{}

      label   :'',
      subtitle:<FormattedMessage {...messages.helpersSubtitle} />
      //labelClassName:'x-red basic',
      //labelAs:'p',
      //labelProps :{},
      //
      //subtitleClassName,
      //subtitleProps:{},

    },
    cardMap:[
      {
        className     :'y-blue b-y ui-dark',
        label         :'React',
        labelClassName:'x-blue',
        heading       :'template-react-ssr',
        github        :'fwrlines/template-react-ssr',
        children      :<FormattedMessage {...messages.trsDescription} />,
        small         :true

        /*
        backFace      :<IconCard.Section>
          <FormattedMessage {...messages.title} />
        </IconCard.Section>
        */
      },

      {
        className     :'y-green b-light-y ui-light',
        label         :'Apollo Server',
        labelClassName:'x-indigo',
        heading       :'template-graphql-server',
        github        :'fwrlines/template-graphql-server',
        children      :<FormattedMessage {...messages.tgsDescription} />,
        small         :true

        /*
        backFace      :<IconCard.Section>
          <FormattedMessage {...messages.title} />
        </IconCard.Section>
        */
      },

      {
        className     :'y-background b-light-y',
        label         :'Yeoman',
        labelClassName:'x-white',
        heading       :'generator-react-component',
        npm           :'@fwrlines/swatch',
        github        :'fwrlines/ds',
        children      :<FormattedMessage {...messages.grcDescription} />,
        small         :true

        /*
        backFace      :<IconCard.Section>
          <FormattedMessage {...messages.title} />
        </IconCard.Section>
        */
      },

      {
        className     :'y-background b-light-y',
        label         :'Yeoman',
        labelClassName:'x-white',
        heading       :'generator-storybook-story',
        npm           :'@fwrlines/generator-storybook-story',
        github        :'fwrlines/generator-storybook-story',
        children      :<FormattedMessage {...messages.gssDescription} />,
        small         :true

        /*
        backFace      :<IconCard.Section>
          <FormattedMessage {...messages.title} />
        </IconCard.Section>
        */
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
    <NavBar/>
    <Page.Section
      {...content.sectionTitle.sectionProps}
    >
    
      <Heading {...content.sectionTitle.headingProps} />
    </Page.Section>
    <Page.Section
      {...content.sectionLibraries.sectionProps}
    >
      <Heading {...content.sectionLibraries.headingProps} />
      <div className="mv-v v4 gc-wide">
        <IconCard.Group
          style={{ '--card-width': '300px' }}
          className="pv-u"
          grid
        >
          { content.sectionLibraries.cardMap.map((e, i) =>
            (<LocalCard
              key={i}
              {...e}
            />)
          ) }
        </IconCard.Group>
      </div>
    
    </Page.Section>
    <Page.Section
      {...content.sectionHelpers.sectionProps}
    >
      <Heading {...content.sectionHelpers.headingProps} />
      <div className="mv-v v4 gc-wide">
        <IconCard.Group
          style={{ '--card-width': '300px' }}
          className="pv-u"
        >
          { content.sectionHelpers.cardMap.map((e, i) =>
            (<LocalCard
              key={i}
              {...e}
            />)
          ) }
        </IconCard.Group>
        
      </div>
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
