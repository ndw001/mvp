import React from 'react'

class Rating extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      visited: false
    }

  }

  render(){
      if(this.state.visited) {
        return (
          <div className='rating'>
          </div>
        )
      } else {
        return (
          <div className='rating'>
          </div>
        )
      }
  }



}



export default Rating