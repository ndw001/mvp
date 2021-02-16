import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import Rodal from 'rodal';


class Rating extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      visible: false,
    }
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
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

  render(){
    return (
      <div>
        <div onClick={this.show}>Leave a Review</div>
        <Rodal visible={this.state.visible} onClose={this.hide}>
          <div>
            <div>Leave a Review for {this.props.restroom.name}</div>
            <div className='reviewOptions'> How safe did you feel? </div>
            <select>
              <option value='safe0'>0 - This is NOT a safe space</option>
              <option value='safe1'>1 - I did not feel safe at this location</option>
              <option value='safe2'>2 - I felt that this location is generally safe</option>
              <option value='safe3'>3 - I felt completely safe </option>
            </select>
            <div className='reviewOptions'> How accessible was the restroom? </div>
            <select>
              <option value='access0'>0 - I wasn't able to access this space</option>
              <option value='access0'>1 - It was difficult to find or access</option>
              <option value='access0'>2 - I was able to access this location with minor difficulties</option>
              <option value='access0'>3 - I was able to access this location easily</option>
            </select>
            <div className='reviewOptions'> How clean was the restroom? </div>
            <select>
              <option value='clean0'>0 - This location was extremely dirty</option>
              <option value='clean1'>1 - This location was dirty</option>
              <option value='clean1'>2 - This location was clean enough</option>
              <option value='clean1'>3 - This location was spotless</option>
            </select>
            <div className='submitReview'>
              <button type='submit'>Submit</button>
            </div>
          </div>
        </Rodal>
      </div>
    )
  }

}



export default Rating