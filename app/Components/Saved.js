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
      .catch(err => { console.log(err) })
  }

  render () {
    console.log(this.savedArticles)
    return (
      <div>
        <h4>Saved Articles</h4>
        <div className='row card-panel'>
          {
            this.state.savedArticles.length === 0
              ? <p className='grey-text darken-4 center-align'><i className='material-icons'>mood_bad</i><br />Looks like you dont have any saved articles...</p>
              : this.state.savedArticles.map(article => {
                return (
                  <div key={article.nytId}>
                    <h5 className='blue-text darken-3'>{article.title}</h5>
                    <hr />
                  </div>
                )
              })
          }
        </div>
      </div>
    )
  }
}

export default Saved
