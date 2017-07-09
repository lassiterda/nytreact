import React from 'react'

//  Importing .css file
import styles from './Header.css'

class Header extends React.Component {
  render () {
    return (
      <nav className={styles.header}>
        <div className={'nav-wrapper ' + styles.container}>
          <h1 href='#' className={'brand-logo ' + styles.title}>NY Times Article Search</h1>
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
