import React from 'react'
import Rating from './Rating.jsx'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'


class Restroom extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      showingDetails: false,
      review: false,
      safe: 0,
      access: 0,
      clean:0,
      comments: ''

    }
    this.showDetails = this.showDetails.bind(this);
  }

  componentDidMount(){
    this.props.restroom.latitude;
    this.props.restroom.longitude;
  }

  showDetails(e){
    this.setState({
      showingDetails: !this.state.showingDetails
    })
  }

  saveFave(e){

  }

  render(){
    if(this.state.showingDetails){
      return(
        <div className='restroom'>
          <div onClick={this.showDetails} className='clickRR'>
            {this.props.restroom.name}
          </div>
          <div>
            {this.props.restroom.distance.toFixed(2)} miles away
          </div>
          <div>
            {this.props.restroom.street}
          </div>
          <Rating restroom={this.props.restroom}/>
        </div>

      )
    } else {
      return(
        <div onClick={this.showDetails} className='clickRR'>
          {this.props.restroom.name}
        </div>
      )
      }
  }

}

export default Restroom