import React from 'react'


class Review extends React.Component {
  constructor(props){
    super(props)

  }

  render(){
    console.log('hi', this.props.reviews)
    if(this.props.reviews.length > 0){
      return (
        <div>
          {this.props.reviews.map( (review, i) => {
            <div key={i}>
              {review.name} hi
            </div>
          })}
        </div>
      )
    } else {
      return <div></div> ;
    }
  }
}

export default Review;