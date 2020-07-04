/* @fwrlines/generator-react-component 2.3.4 */
import * as React from 'react'
//import {} from 'react'
import PropTypes from 'prop-types'

import { Button, Page, Heading } from '@fwrlines/ds'

import { BarBack } from 'app/common/components'

import { Link } from 'react-router-dom'


//Config
//import C from 'ui/cssClasses'

//Intl

import { FormattedMessage } from 'react-intl'
import messages from './credits.messages'

//const baseClassName = 'page_credits'
const baseId = 'page_credits'

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
 * Page `Credits`
 * Description :
 */
const Credits = ({
  history,
  location,
  match
}) => (
  <Page
    id={baseId}
    //itemType='https://schema.org/FAQPage'
    className="y-background b-dark-y ui-dark yf v5 u2"
    style={{ flexDirection: 'column', 
      //background: 'linear-gradient(180deg, var(--blue) 0%, var(--dark-green) 35%, var(--dark-blue) 80%)'
     '--grid-item-width': '300px', '--grid-gap': '4em 1.5em' }}
    HELMET={helmet}
  >
    <BarBack style={{ position: 'sticky', top: 0 }} />
    <Page.Section
      head
      className="gt-grid ph-u pv-v"
      id="head"
    >
      <p className="g3-md xs-h sm-h" />
      <p className="">
        <FormattedMessage
          {...messages.description}
          values={{
            workLink:<a
              href="https://www.newyorker.com/culture/cultural-comment/the-woman-who-gave-the-macintosh-a-smile"
              target="_blank"
            >
the work
            </a>,
            kareLink:<a
              href="https://kare.com/apple-icons"
              target="_blank"
                     >
Susan Kare
            </a>
          }}
        />
      </p>
      <p className="g2-md xs-h sm-h" />
      <p className="g1-md xs-h sm-h" />
      <p className="g2-md">
        <FormattedMessage
          {...messages.fonts}
          values={{
            headingsLink:<a
              href="http://www.suppertime.co.uk/blogmywiki/2017/04/chicago/"
              target="_blank"
                         >
ChiKareGo2
            </a>,
            cairoLink:<a
              href="https://www.haleyfiege.fun/fonts"
              target="_blank"
            >
Cairo
            </a>
          }}
        />
      </p>
    </Page.Section>
    <Page.Section
      head
      className="ph-u pv-v y-indigo  b-y v3"
      id="cairo"
    >
      <p className="cairo s6 k-s uc" style={{ lineHeight:'1em' }}>7 1181 FGHJ 1811&nbsp;*</p>

    </Page.Section>
    <Page.Section
      head
      className="gt-grid ph-u pv-v"
      id="package"
    >
      <p>
        <FormattedMessage
          {...messages.packaging}
          values={{
          }}
        />
      </p>
      <p className="g2-md xs-h sm-h" />
      <p className="g1-md xs-h sm-h" />
      <p>
        <FormattedMessage
          {...messages.frontEnd}
          values={{
            swatchLink:<a
              href="https://swatch.fwrlines.com"
              target="_blank"
            >
              Swatch
            </a>,
            componentLink:<a
              href="https://github.com/fwrlines/ds"
              target="_blank"
            >
              Design System
            </a>
          }}
        />
      </p>
      <p>
        <FormattedMessage
          {...messages.backEnd}
          values={{
            vercelLink:<a
              href="https://vercel.com"
              target="_blank"
            >
              Vercel
            </a>
          }}
        />
      </p>
      <p className="g3-md sm-uc">
        <FormattedMessage
          {...messages.goToSource}
          values={{
            sourceLink:<a
              href="https://github.com/779g/adrianv.net"
              target="_blank"
                       >
              <FormattedMessage
                {...messages.source}
                values={{
                }}
              />
            </a>
          }}
        />
      </p>
    </Page.Section>
    <Page.Section
      head
      className="v6 ph-u pv-v"
      id="package"
    >
      <p className="sm-uc">
        <strong>
          <FormattedMessage
            {...messages.thanks}
            values={{
            }}
          />
        </strong>
      </p>

      <p className="sm-uc" >
        <Link to="/">
          <Button
            className="x-indigo c-y it s-2 k-s pointer"
            icon="h"
            iconSide="l"
            simple
          >
            <FormattedMessage
              {...messages.backToHomepage}
              values={{
              }}
            />
          </Button>
        </Link>
      </p>
    </Page.Section>
  </Page>
)

Credits.propTypes = {

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
Credits.defaultProps = {
  status: 'neutral',
}
*/


export default Credits
