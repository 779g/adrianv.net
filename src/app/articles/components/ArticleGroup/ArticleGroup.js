/* @fwrlines/generator-react-component 2.3.4 */
import * as React from 'react'
import { useMemo } from 'react'
import PropTypes from 'prop-types'


import { ArticleCard } from './common'


//Intl

//import { FormattedMessage} from "react-intl";
//import messages from "./messages";
// <FormattedMessage {...messages.title} />

//Config

//import C from 'ui/cssClasses'

//Relative imports
//import styles from './article_group.scss'

const baseClassName = 'article_group'

const getSeriesFromArticle = (article, c) => article.series.find(e =>  {
  const eq = e[0] === c
  return eq
})

const filterAndOrderBySeries = (articles, c) => articles.reduce((a,e) => {
  if (e.series){
    const find = getSeriesFromArticle(e,c)
    find && a.push(e)
  }
  return a
},
[]
).sort((a, b, c) => {
  const ga = getSeriesFromArticle(a,c)
  const gb = getSeriesFromArticle(b,c)
  return a
  //getSeriesFromArticle(a,c)[1] > getSeriesFromArticle(b,c)[1]
})


/**
 * Use `ArticleGroup` to
 * Has color `x`
 */
const ArticleGroup = ({
  id,
  className,
  style,
  filterSeries,
  grid,
  mini,
  articles
}) => {

  const currentArticles = useMemo(() => {
    let current = articles
    if (filterSeries) {
      current = filterAndOrderBySeries(current, filterSeries)
    }
    return current

  }
    
  ,
  [articles, filterSeries]

  )
  
  
  return (
    <ArticleCard.Group
      grid={ grid }
      className={
        [
        //styles[baseClassName],
          baseClassName,
          's-1 k-s pv-u',
          className
        ].filter(e => e).join(' ')
      }
      id={id}
      style={style}
    >
      {
        currentArticles.map((e, i) =>
          (<ArticleCard
            key={i}
      mini={ mini }
            selectedSeries={filterSeries}
            {...e}
          >
          </ArticleCard>)
        )
      }
    </ArticleCard.Group>
  )
}

ArticleGroup.propTypes = {

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

ArticleGroup.defaultProps = {
  articles:[]
  //height:'2.2em',
  //as:'p',
}
export default ArticleGroup
