/* @fwrlines/generator-react-component 2.3.4 */
import * as React from 'react'
//import {} from 'react'
import PropTypes from 'prop-types'

import {
  Curriculum as CurriculumComponent,
  IconList,
  Page,
  Heading
} from '@fwrlines/ds'

import { LocalBreadcrumb } from 'app/common/components'

import URLS from '../urls'


//Config
//import C from 'ui/cssClasses'

//Intl

import { FormattedMessage } from 'react-intl'
//import { FormattedMessage, FormattedHTMLMessage } from "react-intl";
import messages from './curriculum.messages'

// <FormattedMessage {...messages.title} />
// <FormattedHTMLMessage {...messages.title} tagName='p'/>

//const baseClassName = 'page_curriculum'
const baseId = 'page_curriculum'

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

const LocalListItem = ({ children, icon, ...otherProps }) =>
  (<IconList.Item
    icon={icon}
    style={{ '--z': 'var(--y)' }}
    className="c-dark-x"
    {...otherProps}
  >
    { children }
  </IconList.Item>)

LocalListItem.defaultProps = {
  icon:'l'
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
      labelClassName:'simple',
      //labelClassName:'x-red basic',
      //labelAs:'p',
      //labelProps :{},
      //
      subtitle:<FormattedMessage {...messages.subtitle} />
      //subtitleClassName,
      //subtitleProps:{},

    }

  },

  sectionEducation:{
    sectionProps:{
      //head     :true,
      className:'ph-u u2 pv-v v4',
      id       :'education'
    },
    headingProps:{
      //id,
      className:'uc',
      //style,
      //children, //appended at bottom

      heading  :<FormattedMessage {...messages.eduTitle} />,
      //headingClassName:'ts-green',
      headingAs:'h2',
      //headingProps :{}

      label   :'',
      //labelClassName:'x-red basic',
      //labelAs:'p',
      //labelProps :{},
      //
      subtitle:<FormattedMessage {...messages.eduSubtitle} />
      //subtitleClassName,
      //subtitleProps:{},

    },
    cardMap:[
      {
        title    :<FormattedMessage {...messages.eduCardsESADETitle} />,
        subtitle :<FormattedMessage {...messages.eduCardsESADESubtitle} />,
        className:'y-background b-light-y',
        id       :'msesade',
        children :<>
          <p>
            <FormattedMessage {...messages.eduCardsESADEDescription} />
          </p>
          <IconList>
            <LocalListItem>
              <FormattedMessage {...messages.eduCardsESADEItem1} />
            </LocalListItem>
            <LocalListItem>
              <FormattedMessage {...messages.eduCardsESADEItem2} />
            </LocalListItem>
            <LocalListItem>
              <FormattedMessage {...messages.eduCardsESADEItem3} />
            </LocalListItem>
            <LocalListItem>
              <FormattedMessage {...messages.eduCardsESADEItem4} />
            </LocalListItem>
          </IconList>
        </>
      },

      {
        title    :<FormattedMessage {...messages.eduCardsHECTitle} />,
        subtitle :<FormattedMessage {...messages.eduCardsHECSubtitle} />,
        className:'y-blue b-y ui-dark',
        id       :'mshec',
        children :<>
          <p>
            <FormattedMessage {...messages.eduCardsHECDescription} />
          </p>
          <IconList>
            <LocalListItem>
              <FormattedMessage {...messages.eduCardsHECItem1} />
            </LocalListItem>
            <LocalListItem>
              <FormattedMessage {...messages.eduCardsHECItem2} />
            </LocalListItem>
            <LocalListItem>
              <FormattedMessage {...messages.eduCardsHECItem3} />
            </LocalListItem>
            <LocalListItem>
              <FormattedMessage {...messages.eduCardsHECItem4} />
            </LocalListItem>
          </IconList>
        </>
      },
      
      
      {
        title    :<FormattedMessage {...messages.eduCardsStanfordTitle} />,
        subtitle :<FormattedMessage {...messages.eduCardsStanfordSubtitle} />,
        className:'y-red b-y ui-dark',
        id       :'sship',
        children :<>
          <p>
            <FormattedMessage {...messages.eduCardsStanfordDescription} />
          </p>
          <IconList>
            <LocalListItem>
              <FormattedMessage {...messages.eduCardsStanfordItem1} />
            </LocalListItem>
            <LocalListItem>
              <FormattedMessage {...messages.eduCardsStanfordItem2} />
            </LocalListItem>
            <LocalListItem>
              <FormattedMessage {...messages.eduCardsStanfordItem3} />
            </LocalListItem>
            <LocalListItem>
              <FormattedMessage {...messages.eduCardsStanfordItem4} />
            </LocalListItem>
          </IconList>
        </>
      }
    ]
    
  },
  sectionWork:{
    sectionProps:{
      //head     :true,
      className:'ph-u u2 pv-v v4',
      id       :'education'
    },
    headingProps:{
      //id,
      className:'uc',
      //style,
      //children, //appended at bottom

      heading  :<FormattedMessage {...messages.workTitle} />,
      //headingClassName:'ts-green',
      headingAs:'h2',
      //headingProps :{}

      label   :'',
      //labelClassName:'x-red basic',
      //labelAs:'p',
      //labelProps :{},
      //
      subtitle:<>
        <FormattedMessage {...messages.workSubtitle} />
        <a
          href={URLS.CONTACT}
          target="_blank"
        >
          <FormattedMessage {...messages.workContact} />
        </a>
      </>
      //subtitleClassName,
      //subtitleProps:{},

    },
    cardMap:[
      {
        title    :<FormattedMessage {...messages.workCardsMeccamicoTitle} />,
        subtitle :<FormattedMessage {...messages.workCardsMeccamicoSubtitle} />,
        id       :'work-mcm',
        className:'y-background b-light-y ui-light',
        children :<>
          <p>
            <FormattedMessage {...messages.workCardsMeccamicoDescription} />
          </p>
          <IconList>
            <LocalListItem>
              <FormattedMessage {...messages.workCardsMeccamicoItem1} />
            </LocalListItem>
            <LocalListItem>
              <FormattedMessage {...messages.workCardsMeccamicoItem2} />
            </LocalListItem>
            <LocalListItem>
              <FormattedMessage {...messages.workCardsMeccamicoItem3} />
            </LocalListItem>
            <LocalListItem>
              <FormattedMessage {...messages.workCardsMeccamicoItem4} />
            </LocalListItem>
          </IconList>
        </>
      },
      {
        title    :<FormattedMessage {...messages.workCardsFwrlinesTitle} />,
        subtitle :<FormattedMessage {...messages.workCardsFwrlinesSubtitle} />,
        id       :'work-fwrlines',
        className:'y-blue b-y ui-dark',
        children :<>
          <p>
            <FormattedMessage {...messages.workCardsFwrlinesDescription} />
          </p>
          <IconList>
            <LocalListItem>
              <FormattedMessage {...messages.workCardsFwrlinesItem1} />
            </LocalListItem>
            <LocalListItem>
              <FormattedMessage {...messages.workCardsFwrlinesItem2} />
            </LocalListItem>
            <LocalListItem>
              <FormattedMessage {...messages.workCardsFwrlinesItem3} />
            </LocalListItem>
            <LocalListItem>
              <FormattedMessage {...messages.workCardsFwrlinesItem4} />
            </LocalListItem>
          </IconList>
        </>
      },
      {
        title    :<FormattedMessage {...messages.workCardsConsultingTitle} />,
        subtitle :<FormattedMessage {...messages.workCardsConsultingSubtitle} />,
        id       :'work-freelance',
        className:'y-secondary b-light-y ui-light',
        children :<>
          <p>
            <FormattedMessage {...messages.workCardsConsultingDescription} />
          </p>
          <IconList>
            <LocalListItem>
              <FormattedMessage {...messages.workCardsConsultingItem1} />
            </LocalListItem>
            <LocalListItem>
              <FormattedMessage {...messages.workCardsConsultingItem2} />
            </LocalListItem>
            <LocalListItem>
              <FormattedMessage {...messages.workCardsConsultingItem3} />
            </LocalListItem>
            <LocalListItem>
              <FormattedMessage {...messages.workCardsConsultingItem4} />
            </LocalListItem>
          </IconList>
        </>
      },
      {
        title    :<FormattedMessage {...messages.workCardsDecidataTitle} />,
        subtitle :<FormattedMessage {...messages.workCardsDecidataSubtitle} />,
        id       :'work-decidata',
        className:'y-background b-light-y',
        children :<>
          <p>
            <FormattedMessage {...messages.workCardsDecidataDescription} />
          </p>
          <IconList>
            <LocalListItem>
              <FormattedMessage {...messages.workCardsDecidataItem1} />
            </LocalListItem>
            <LocalListItem>
              <FormattedMessage {...messages.workCardsDecidataItem2} />
            </LocalListItem>
            <LocalListItem>
              <FormattedMessage {...messages.workCardsDecidataItem3} />
            </LocalListItem>
            <LocalListItem>
              <FormattedMessage {...messages.workCardsDecidataItem4} />
            </LocalListItem>
          </IconList>
        </>
      }
    ]

  }
}

/**
 * Page `Curriculum`
 * Description :
 */
const Curriculum = ({
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
      {...content.sectionWork.sectionProps}
    >
    
      <Heading {...content.sectionWork.headingProps} />
      <CurriculumComponent
        toggleStyle="plus"
        className="s-1 k-s v8 mv-v"
      >
        { content.sectionWork.cardMap.map((e, i) =>
          (<CurriculumComponent.Item
            key={i}
            {...e}
          />)
        ) }
      </CurriculumComponent>
    </Page.Section>
    <Page.Section
      {...content.sectionEducation.sectionProps}
    >
    
      <Heading {...content.sectionEducation.headingProps} />
      <CurriculumComponent
        className="s-1 k-s v8 mv-v"
      >
        { content.sectionEducation.cardMap.map((e, i) =>
          (<CurriculumComponent.Item
            key={i}
            {...e}
          />)
        ) }
      </CurriculumComponent>
    </Page.Section>
    <Page.Section
      {...content.sectionEducation.sectionProps}
    >
    
      <Heading {...content.sectionEducation.headingProps} />
      <div className="" />
    </Page.Section>
  </Page>
)

Curriculum.propTypes = {

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
Curriculum.defaultProps = {
  status: 'neutral',
}
*/


export default Curriculum
