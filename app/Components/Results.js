import React from 'react'

import ResultsItem from './ResultsItem'

class Results extends React.Component {
  render () {
    return (
      <div className='row'>
        {this.props.results.map(function(ele, idx) {
          return (
          <div className='col s12 m6'>
            <ResultsItem resultInfo={ele} key={idx} />
          </div>
          )
        })}
      </div>
    )
  }
}

export default Results
