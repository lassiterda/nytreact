import React from 'react'

import ResultsItem from './ResultsItem'

class Search extends React.Component {
  render () {
    return (
      <div>
        <div className='row card-panel'>
          <div className='input-field col s12'>
            <input id='searchTerm' type='text' className='validate' onChange={this.props.handleChange} required />
            <label htmlFor='first_name'>Topic</label>
          </div>
          <div className='input-field col s12 m6'>
            <i className='material-icons prefix'>date_range</i>
            <input id='startYear' type='text' className='validate' onChange={this.props.handleChange} />
            <label htmlFor='icon_prefix'>Start Year</label>
          </div>
          <div className='input-field col s12 m6'>
            <i className='material-icons prefix'>date_range</i>
            <input id='endYear' type='text' className='validate' onChange={this.props.handleChange} />
            <label htmlFor='icon_prefix'>End Year</label>
          </div>
          <div className='col  s12'>
            <div className='right-align'>
              <a className='waves-effect waves-light btn blue darken-3' onClick={this.props.handleSubmit}>Search</a>
            </div>
          </div>
        </div>
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
      </div>
    )
  }
}

export default Search
