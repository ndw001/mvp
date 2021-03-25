import React from 'react'
import Restroom from './Restroom.jsx'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


class RestroomList extends React.Component {
  constructor(props){
    super(props)

  }

  render() {
    if(this.props.restrooms.length > 0){
      return(
        <div>
          <h3>Restrooms Near Me</h3>
          {this.props.restrooms.map( (restroom, i) => {
            return (
              <div key={i}>
                <Restroom restroom={restroom}/>
              </div>
            )
          })}



        </div>
      )
    } else {
      return (
        <div>
          <h3>Restrooms Near Me</h3>
        </div>
      )
    }

  }

}

export default RestroomList