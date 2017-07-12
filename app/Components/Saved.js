import React, {Component } from 'react'

class Saved extends Component {
  constructor (props) {
    super(props)
    this.state = {
      savedArticles: []
    }
  }

  componentWillMount () {
    window.fetch('/api/saved')
      .then(response => { return response.json() })
      .then(dat => { this.setState({savedArticles: dat}) })
  }

  render () {
    console.log(this.savedArticles)
    return (
      <div>Saved Articles</div>
    )
  }
}

export default Saved
