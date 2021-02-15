import React from 'react'
import axios from 'axios'
import RestroomList from './RestroomList.jsx'


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      latitude: 0,
      longitude: 0,
      restroomList: [],
    }
    this.setLat = this.setLat.bind(this);
    this.setLong = this.setLong.bind(this);
    this.restroomSearch = this.restroomSearch.bind(this);
  }

  setLat(e){
    e.persist();
    this.setState({
      latitude: e.target.value
    })
    // console.log(this.state.latitude);
  }

  setLong(e){
    e.persist();
    debugger;
    this.setState({
      longitude: e.target.value
    })
    // console.log(this.state.restroomList);
    // console.log(this.state.longitude);
  }

  restroomSearch() {
      let app = this;
      axios.get('https://www.refugerestrooms.org/api/v1/restrooms/by_location?ada=true&lat=34.108009009714664&lng=-118.05728536777977')
      .then(function(response){
        // debugger;
        app.setState({
          restroomList: response.data
        })
      })
      .catch(function(error){
        console.log('in the server ',error);
      })
  }

  render() {
    return(
      <div>
        <h1 className='banner'>Restroom Rater</h1>
        <div className='cordinates'>
          Enter your latitude
          <input type='text' id='latitude' onChange={this.setLat}/>
          <div></div>
          Enter your longitude
          <input type='text' id='longitude' onChange={this.setLong}/>
          <button type='submit' onClick={this.restroomSearch}>Search</button>
        </div>
        <div className='list'>
          <RestroomList restrooms={this.state.restroomList}/>
        </div>


      </div>

    )
  }
}

export default App;