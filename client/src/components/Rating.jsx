import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import Rodal from 'rodal';


class Rating extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      visible: false,
      reviewData: [],
      viewRating: false,
    }
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this.saveReviewData = this.saveReviewData.bind(this);
  }

  show(){
    this.setState({
      visible:true,
    })
  }

  hide(){
    this.setState({
      visible:false,
    })
  }

  saveReviewData(e){
    let safe = document.getElementById('safeChoice').value;
    let access = document.getElementById('accessChoice').value;
    let clean = document.getElementById('cleanChoice').value;
    let review = [safe, access, clean];
    this.setState({
      visible: false,
      reviewData: review,
      viewRating: true,
    })
  }

  render(){
    if(this.state.viewRating){
      return (
        <div>
          <div className='leaveReview'>
            <FontAwesomeIcon icon={faPencilAlt}/>
            <a onClick={this.show}>Leave a Review</a>
            <FontAwesomeIcon icon={faPencilAlt}/>
          </div>
          <div></div>
          <div className='viewReview'>
            <div>
              Safety: {this.state.reviewData[0]}
            </div>
            <div>
              Accessibility: {this.state.reviewData[1]}
            </div>
            <div>
              Cleanliness: {this.state.reviewData[2]}
            </div>
          </div>
          <Rodal visible={this.state.visible} onClose={this.hide}>
            <div>
              <div>Leave a Review for {this.props.restroom.name}</div>
              <div className='reviewOptions'> How safe did you feel? </div>
              <select id='safeChoice'>
                <option value='0'>0 - This is NOT a safe space</option>
                <option value='1'>1 - I did not feel safe at this location</option>
                <option value='2'>2 - I felt that this location is generally safe</option>
                <option value='3'>3 - I felt completely safe </option>
              </select>
              <div className='reviewOptions'> How accessible was the restroom? </div>
              <select id='accessChoice'>
                <option value='0'>0 - I wasn't able to access this space</option>
                <option value='1'>1 - It was difficult to find or access</option>
                <option value='2'>2 - I was able to access this location with minor difficulties</option>
                <option value='3'>3 - I was able to access this location easily</option>
              </select>
              <div className='reviewOptions'> How clean was the restroom? </div>
              <select id='cleanChoice'>
                <option value='0'>0 - This location was extremely dirty</option>
                <option value='1'>1 - This location was dirty</option>
                <option value='2'>2 - This location was clean enough</option>
                <option value='3'>3 - This location was spotless</option>
              </select>
              <div className='submitReview'>
                <button type='submit' onClick={this.saveReviewData}>Submit</button>
              </div>
            </div>
          </Rodal>
        </div>
      )
    } else {
      return (
        <div>
          <div className='leaveReview'>
            <FontAwesomeIcon icon={faPencilAlt}/>
            <a onClick={this.show}>Leave a Review</a>
            <FontAwesomeIcon icon={faPencilAlt}/>
          </div>
          <Rodal visible={this.state.visible} onClose={this.hide}>
            <div>
              <div>Leave a Review for {this.props.restroom.name}</div>
              <div className='reviewOptions'> How safe did you feel? </div>
              <select id='safeChoice'>
                <option value='0'>0 - This is NOT a safe space</option>
                <option value='1'>1 - I did not feel safe at this location</option>
                <option value='2'>2 - I felt that this location is generally safe</option>
                <option value='3'>3 - I felt completely safe </option>
              </select>
              <div className='reviewOptions'> How accessible was the restroom? </div>
              <select id='accessChoice'>
                <option value='0'>0 - I wasn't able to access this space</option>
                <option value='1'>1 - It was difficult to find or access</option>
                <option value='2'>2 - I was able to access this location with minor difficulties</option>
                <option value='3'>3 - I was able to access this location easily</option>
              </select>
              <div className='reviewOptions'> How clean was the restroom? </div>
              <select id='cleanChoice'>
                <option value='0'>0 - This location was extremely dirty</option>
                <option value='1'>1 - This location was dirty</option>
                <option value='2'>2 - This location was clean enough</option>
                <option value='3'>3 - This location was spotless</option>
              </select>
              <div className='submitReview'>
                <button type='submit' onClick={this.saveReviewData}>Submit</button>
              </div>
            </div>
          </Rodal>
        </div>
      )
    }
  }

}



export default Rating