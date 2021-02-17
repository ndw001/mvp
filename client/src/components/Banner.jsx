import React from 'react'
import axios from 'axios'
import RestroomList from './RestroomList.jsx'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearchLocation} from '@fortawesome/free-solid-svg-icons'
import {faMapMarked} from '@fortawesome/free-solid-svg-icons'
import {faUserEdit} from '@fortawesome/free-solid-svg-icons'


class Banner extends React.Component{
  constructor(){
    super()
  }


  render() {
    return (
      <div>
        <div className='banner'>
          <h1 className='title'>Restroom Rater</h1>
          <div className='link'>
            <FontAwesomeIcon icon={faSearchLocation}/>
            <a href='/'>Search</a>
            <FontAwesomeIcon icon={faSearchLocation}/>
          </div>
          <div>
            <FontAwesomeIcon icon={faMapMarked}/>
            <a onClick={this.viewSaved}>Saved Places</a>
            <FontAwesomeIcon icon={faMapMarked}/>
          </div>
          <div>
            <FontAwesomeIcon icon={faUserEdit}/>
            <a onClick={this.viewReviews}>My Reviews</a>
            <FontAwesomeIcon icon={faUserEdit}/>
          </div>
        </div>

      </div>
    )
  }

}


export default Banner