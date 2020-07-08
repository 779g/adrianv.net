/* @fwrlines/generator-react-component 2.3.4 */
import * as React from 'react'
import { memo } from 'react'
import PropTypes from 'prop-types'

import { Button, SVG, Heading, Label, Card } from '@fwrlines/ds'

import { Link } from 'react-router-dom'

//Intl

import { FormattedMessage } from 'react-intl'
import messages from '../messages'

//Config

//import C from 'ui/cssClasses'

//Relative imports
//import styles from './article_card.scss'
import { isBackend } from 'utils/isBackend'

if (!isBackend) {
  import('./article_card.scss')
}

const baseClassName = 'article_card'


const categoryMap = ({
  Storybook:'x-violet',
  NPM      :'x-orange',
  React    :'x-azure'
})


/**
 * Use `ArticleCard` to
 * Has color `x`
 */
const ArticleCard = ({
  id,
  className,
  style,

  slug,
  title,
  categories,
  description,
  series,

  icon,
  svgSprite,
  svgClassName,
  svgHeight,
  svgWidth,

  headingAs,
  mini,

  selectedSeries
}) => {

  const sectionDescription = (<Card.Section style={{'flexGrow':'99'}}>
      <p>
        { description }
      </p>
    </Card.Section>)

  const sectionReadMore = (<Card.Section className="ur">
        <Link to={slug}>
          <Button className="x-paragraph xh-link s-1 k-s">
            <FormattedMessage {...messages.readMore} />
          </Button>
        </Link>
      </Card.Section>)

  const preloadArticle = async () => await import(
          /* webpackPreload:true */
          `../../../content/${slug}.mdx`
  ).catch(e => console.warn(e.message))

  return (
    <Card
      onMouseEnter={ preloadArticle }
      className={
        [
        //styles[baseClassName],
          baseClassName,
          'k-s s0',
          className
        ].filter(e => e).join(' ')
      }
      id={id}
      style={{
        display:'flex',
        flexDirection:'column',
        ...style
      }}
      backFace={ 

        mini && <>{ sectionDescription }{ sectionReadMore }</>
      }
      backFaceClassName={mini && 'y-blue b-y ui-dark'}
    >
      { icon &&
    <Card.Section
      style={{ paddingBottom: 0 }}
      className="xs-h sm-h"
    >
      <SVG
        width={'50%'}
        style={{ maxWidth: '4em' }}
        target={icon}
        sprite={svgSprite}
        className={svgClassName}
        useClassName="x-transparent c-x y-paragraph e-y"
      />
    </Card.Section>}
      <Card.Section style={{flexGrow:99}}>
        <Heading
          heading={
            <Link to={slug} className='x-paragraph c-x'>
              { selectedSeries && `Part ${series.find(e => e[0] === selectedSeries)[1]} > ` }
              { title }
            </Link>
          }
          headingAs={headingAs}
          headingClassName="s3 k-s"
          label={categories.map((e, i) => {
            <Label
              className={categoryMap[e]}
              key={i}
            >
              { e }
            </Label>
          })}
          labelAs="div"
        />
      { !mini &&
        <p>{ description }</p>
      }
      </Card.Section>
      { sectionReadMore }
    </Card>
  )
}

ArticleCard.propTypes = {

  /**
   * Provide an HTML id to this element
   */
  id:PropTypes.string,

  /**
   * The html class names to be provided to this element
   */
  className:PropTypes.string,

  /**
   * The JSX-Written, css styles to apply to the element.
   */
  style:PropTypes.object,

  /**
   *  The children JSX
   */
  children:PropTypes.node,

  /**
   * Which html tag to use
   */
  as:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  //as: PropTypes.string,

  /**
   * The height of the element
   */
  height:PropTypes.string,

  /**
   * The width of the element
   */
  width:PropTypes.string

  /*
  : PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  : PropTypes.func,
  : PropTypes.func,
  : PropTypes.oneOf(['', ''])
  */
}

ArticleCard.defaultProps = {
  headingAs:'h3',
  svgSprite:'/dev.sprite.svg'
  //height:'2.2em',
  //as:'p',
}

const toExport = memo(ArticleCard)
toExport.Group = memo(Card.Group)

export default toExport
