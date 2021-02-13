import React from 'react'
import axios from 'axios'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      latitude: 0,
      longitude: 0,
    }
    this.setLat = this.setLat.bind(this);
    this.setLong = this.setLong.bind(this);
  }

  setLat(e){
    e.persist();

  }

  componentDidMount() {
    axios.get('https://www.refugerestrooms.org/api/v1/restrooms/by_location?lat=34.108009009714664&lng=-118.05728536777977')
      .then(function(response){
        console.log(response.data);
      })
      .catch(function(error){
        console.log('in the server ',error);
      })
  }

  render() {
    return(
      <div>
        <h1>Restroom Rater</h1>
        Enter your latitude
        <input type='text' id='latitude'/>
        Enter your longitude
        <input type='text' id='longitude'/>
        <div>This is react</div>
      </div>
    )
  }



}





export default App;