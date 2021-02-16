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
            How safe did you feel?
            <select>
              <option value='okay'>okay</option>
              <option value='great'>great</option>
            </select>
            (Safe environment and safe people)
            How accessible was the restroom?
            (there were alot of people) (it's hard to find)
          </div>
        </Rodal>
      </div>
    )
  }

}



export default Rating