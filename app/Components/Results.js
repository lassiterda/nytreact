import React from 'react'

import ResultsItem from './ResultsItem'

class Results extends React.Component {
  render () {
    console.log(this.props.articles[0])
    return (
      <div className='row'>
        {this.props.articles.map((article, idx) => {
          article.key = article._id
          return (
            <div className='col s12 m4'>
              <ResultsItem {...article} key={idx} />
            </div>
          )
        })}
      </div>
    )
  }
}

export default Results
