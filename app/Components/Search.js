import React from 'react'

import ResultsItem from './ResultsItem'

class Search extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      searchTerm: '',
      startYear: null,
      endYear: null,
      results: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    var newState = {}
    newState[event.target.id] = event.target.value
    this.setState(newState)
  }

  handleSubmit () {
    let queryString = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=041467f312144c8cb89cdf1c6698a1b7&q=${this.state.searchTerm}`

    window.fetch(queryString)
      .then(res => { return res.json() })
      .then(dat => {
        this.setState({results: dat.response.docs})
      })
      .catch(err => console.log(err))
  }

  handleSave (event) {

  }

  render () {
    return (
      <div>
        <h4>Search</h4>
        <div className='row card-panel'>
          <div className='input-field col s12'>
            <input id='searchTerm' type='text' className='validate' onChange={this.handleChange} required />
            <label htmlFor='first_name'>Topic</label>
          </div>
          <div className='input-field col s12 m6'>
            <i className='material-icons prefix'>date_range</i>
            <input id='startYear' type='text' className='validate' onChange={this.handleChange} />
            <label htmlFor='icon_prefix'>Start Year</label>
          </div>
          <div className='input-field col s12 m6'>
            <i className='material-icons prefix'>date_range</i>
            <input id='endYear' type='text' className='validate' onChange={this.handleChange} />
            <label htmlFor='icon_prefix'>End Year</label>
          </div>
          <div className='col  s12'>
            <div className='right-align'>
              <a className='waves-effect waves-light btn blue darken-3' onClick={this.handleSubmit}>Search</a>
            </div>
          </div>
        </div>
        <div className='row'>
          <h4>Results</h4>
          {this.state.results.map((article, idx) => {
            article.key = article._id
            return (
              <div className='col s12 m4'>
                <ResultsItem article={article} key={idx} />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Search
