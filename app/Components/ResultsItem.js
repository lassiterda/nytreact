import React from 'react'

class ResultsItem extends React.Component {
  render () {
    return (
        <div className='card'>
          <div className='card-content white-text'>
            <span className='card-title'>I am Item #{this.props.key}</span>
            <p>I am a very simple card. I am good at containing small bits of information.
            I am convenient because I require little markup to use effectively.</p>
          </div>
          <div className='card-action'>
            <a href='#'>This is a link</a>
            <a href='#'>This is a link</a>
          </div>
      </div>
    )
  }
}
