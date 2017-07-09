import React from 'react'

import Header from './../Header/Header'

//  importing CSS module
import './App.css'

class App extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <div className='container'>
          <div className='row'>
            <h4>Search</h4>
            <div className='input-field col s12'>
              <input id='first_name' type='text' className='validate' required />
              <label htmlFor='first_name'>Search</label>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
