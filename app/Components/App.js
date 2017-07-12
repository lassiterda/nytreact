import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import Header from './Header'
import Search from './Search'
import Saved from './Saved'

class App extends React.Component {
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

  render () {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <div className='container'>
            <Route path='/'>
              <Search handleChange={this.handleChange} handleSubmit={this.handleSubmit} articles={this.state.results} />
            </Route>
            <Route path='/saved-articles' component={Saved} />
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
