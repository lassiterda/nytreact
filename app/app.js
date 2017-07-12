import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './Components/Header'
import Search from './Components/Search'
import Saved from './Components/Saved'

render(
  <BrowserRouter>
    <div>
      <Header />
      <div className='container'>
        <Route exact path='/' component={Search} />
        <Route exact path='/saved-articles' component={Saved} />
      </div>
    </div>
  </BrowserRouter>
, document.getElementById('root'))
