import React from 'react'

import Header from './Header'
import Search from './Search'
import Results from './Results'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      searchTerm: '',
      startYear: null,
      endYear: null
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    var newState = {}
    newState[event.target.id] = event.target.value
    this.setState(newState)
  }

  render () {
    return (
      <div>
        <Header />
        <div className='container'>
          <Search handleChange={this.handleChange} />
          <Results results={this.state.results}/>
          <p>{this.state.searchTerm}</p>
        </div>
      </div>
    )
  }
}

export default App
