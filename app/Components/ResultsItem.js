import React, { Component } from 'react'

class ResultsItem extends Component {
  constructor (props) {
    super(props)
    this.handleSave = this.handleSave.bind(this)
  }

  handleSave () {
    let reqBody = {
      nytId: this.props.article._id,
      title: this.props.article.headline.print_headline || this.props.article.headline.main,
      URL:

    }
    window.fetch('/api/save',
      {title
        method: 'post',
        body: JSON.stringify(reqBody)
      })
      .then()
  }

  render () {
    let dateObj = new Date(this.props.article.pub_date)
    return (
      <div className='card small hoverable'>
        <div className='card-content white-text valign-container'>
          <h5 className='blue-text darken-3'>{this.props.article.headline.print_headline || this.props.article.headline.main}</h5>
          <h6 className='grey-text darken-5'>
            {this.props.article.news_desk || 'General'} |
            {` ${dateObj.getDate()}/${dateObj.getMonth()}/${dateObj.getFullYear()}`}
          </h6>
          <blockquote className='grey-text darken-5 valign'>{this.props.article.snippet || this.props.article.lead_paragraph}</blockquote>
        </div>
        <div className='card-action align-right blue darken-3'>
          <a href='#' onClick={this.handleSave}>Save</a>
        </div>
      </div>
    )
  }
}

export default ResultsItem
