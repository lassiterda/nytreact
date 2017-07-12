import React from 'react'

const ResultsItem = (props) => {
  let dateObj = new Date(props.pub_date)
  return (
    <div className='card small hoverable'>
      <div className='card-content white-text valign-container'>
        <h5 className='blue-text darken-3'>{props.headline.print_headline || props.headline.main}</h5>
        <h6 className='grey-text darken-5'>
          {props.news_desk || 'General'} |
          {` ${dateObj.getDate()}/${dateObj.getMonth()}/${dateObj.getFullYear()}`}
          </h6>
        <blockquote className='grey-text darken-5 valign'>{props.snippet || props.lead_paragraph}</blockquote>
      </div>
      <div className='card-action align-right blue darken-3'>
        <a href='#'>Save</a>
      </div>
    </div>
  )
}

export default ResultsItem
