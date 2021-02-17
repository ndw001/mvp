import React from 'react'
import axios from 'axios'
import RestroomList from './RestroomList.jsx'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearchLocation} from '@fortawesome/free-solid-svg-icons'
import {faMapMarked} from '@fortawesome/free-solid-svg-icons'
import {faUserEdit} from '@fortawesome/free-solid-svg-icons'
import Banner from './Banner.jsx'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      latitude: 0,
      longitude: 0,
      restroomList: [],
      viewSaved: false,
      viewReviews: false,
      savedPlaces: [],
    }
    this.setLat = this.setLat.bind(this);
    this.setLong = this.setLong.bind(this);
    this.sampleData = this.sampleData.bind(this);
    this.sampleData2 = this.sampleData2.bind(this);
    this.sampleData3 = this.sampleData3.bind(this);
    this.searchRestrooms = this.searchRestrooms.bind(this);
    this.viewSaved = this.viewSaved.bind(this);
    this.viewReviews = this.viewReviews.bind(this);
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
    this.setState({
      longitude: e.target.value
    })
    // console.log(this.state.restroomList);
    // console.log(this.state.longitude);
  }

  sampleData() {
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

  sampleData2() {
    let app = this;
    axios.get('https://www.refugerestrooms.org/api/v1/restrooms/by_location?ada=true&lat=33.81294&lng=-117.91870')
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

  sampleData3() {
    let app = this;
    axios.get('https://www.refugerestrooms.org/api/v1/restrooms/by_location?ada=true&lat=22.31277&lng=114.04219')
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

  searchRestrooms() {
    let app = this;
    let lat = this.state.latitude;
    let long = this.state.longitude;
    axios.get(`https://www.refugerestrooms.org/api/v1/restrooms/by_location?ada=true&lat=${lat}&lng=${long}`)
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

  viewSaved(e){
    this.setState({
      viewSaved: !this.state.viewSaved
    })
  }

  viewReviews(e){
    this.setState({
      viewReviews: !this.state.viewReviews
    })
  }

  render() {
    if(this.state.viewSaved){
      return (
        <div>
          <Banner viewSaved={this.viewSaved} viewReviews={this.viewReviews}/>
          <div className='savedList'>
            <button type='submit' onClick={this.sampleData}>Temple City Park</button>
            <button type='submit' onClick={this.sampleData2}>Disneyland LA</button>
            <button type='submit' onClick={this.sampleData3}>Disneyland HK</button>

          <div></div>
          <RestroomList restrooms={this.state.restroomList}/>
          </div>
        </div>
      )
    } else if(this.state.viewReviews){
      return (
        <div>
          <Banner viewSaved={this.viewSaved} viewReviews={this.viewReviews}/>
        </div>
      )
    } else {
      return(
        <div>
          <Banner viewSaved={this.viewSaved} viewReviews={this.viewReviews}/>
          <div className='cordinates'>
            Enter your latitude
            <input type='text' id='latitude' onChange={this.setLat}/>
            <div></div>
            Enter your longitude
            <input type='text' id='longitude' onChange={this.setLong}/>
            <div></div>
            <button type='submit' onClick={this.searchRestrooms}>Search</button>
            <div></div>
          </div>
          <div className='list'>
            <RestroomList restrooms={this.state.restroomList}/>
          </div>
        </div>
      )
    }
  }
}

export default App;