import React from 'react'

class Restroom extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      showingDetails: false
    }
    this.showDetails = this.showDetails.bind(this);
  }

  showDetails(e){
    this.setState({
      showingDetails: !this.state.showingDetails
    })
  }

  render(){
    if(this.state.showingDetails){
      return(
        <div onClick={this.showDetails}>
          {this.props.restroom.name}
          {this.props.restroom.directions}
        </div>
      )
    } else {
      return(
        <div onClick={this.showDetails}>
          {this.props.restroom.name}

        </div>
      )
      }
  }

}

export default Restroom