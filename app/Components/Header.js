import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {
  render () {
    return (
      <nav className='blue darken-3'>
        <div className='nav-wrapper container'>
          <h1 href='#' className='brand-logo title'>NY Times Article Archive</h1>
          <ul id='nav-mobile' className='right hide-on-med-and-down'>
            <li className='active'>
              <Link to='/'>Search</Link>
            </li>
            <li>
              <Link to='saved-articles'>Saved</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header
