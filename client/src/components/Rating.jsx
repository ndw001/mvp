import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

class Rating extends React.Component {
  constructor(props){
    super(props)

    this.modalOpen = this.modalOpen.bind(this);
  }

  modalOpen(e) {
    console.log('hi')
  }

  render(){
    return (
      <div>
        bro
      </div>
    )
  }



}



export default Rating