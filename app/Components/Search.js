import React from 'react'

class Search extends React.Component {
  render () {
    return (
      <div className='row card-panel'>
        <div className='input-field col s12'>
          <input id='searchTerm' type='text' className='validate' onChange={this.props.handleChange} required />
          <label htmlFor='first_name'>Topic</label>
        </div>
        <div className='input-field col s12 m6'>
          <i className='material-icons prefix'>date_range</i>
          <input id='startYear' type='text' className='validate' onChange={this.props.handleChange} />
          <label htmlFor='icon_prefix'>Start Year</label>
        </div>
        <div className='input-field col s12 m6'>
          <i className='material-icons prefix'>date_range</i>
          <input id='endYear' type='text' className='validate' onChange={this.props.handleChange} />
          <label htmlFor='icon_prefix'>End Year</label>
        </div>
        <div className='col  s12'>
          <div className='right-align'>
            <a className='waves-effect waves-light btn blue darken-3' onClick={this.props.submitSearch}>Search</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Search
