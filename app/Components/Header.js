import React from 'react'

class Header extends React.Component {
  render () {
    return (
      <nav className='blue darken-3'>
        <div className='nav-wrapper container'>
          <h1 href='#' className='brand-logo title'>NY Times Article Archive</h1>
          <ul id='nav-mobile' className='right hide-on-med-and-down'>
            <li className='active'><a href='#' >Search</a></li>
            <li><a href='#'>About</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header
