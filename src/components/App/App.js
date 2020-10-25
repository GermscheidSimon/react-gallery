import React, { Component } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList'
import axios from 'axios'
import GalleryForm from '../GalleryForm/GalleryForm'


class App extends Component {


    /*  EXAMPLE DATA:: { id: 1, path: 'images/goat_small.jpg', description: 'Photo of a goat taken at Glacier National Park.', likes: 0 } */
  state = {
    galleryArray: []
  }

  // call /GET gallery function 
  componentDidMount(){
    this.getGalleryArray(); // get data on page load
  }

  getGalleryArray = () => { //get sql data request
    console.log('GET /gallery started');
    axios({
      method: 'GET',
      url: '/gallery'
        }).then( (response) => {
          console.log(`GET /gallery ${response.data.length} items received` );
          this.setState({ // replace state.galleryArray with response
            galleryArray: response.data
          });    
        }).catch( (error) => {
          console.log(error); //log error
          alert('failed to process request'); // throw an alert for user
        });
  }

  putItemLikeCount = (itemID) =>{ // item ID past from onClick event function
    console.log('PUT /gallery started');
    axios({
      method: 'PUT',
      url: `/gallery/like/${itemID}`
    }).then( (response) => {
      console.log('PUT /gallery success, status: ', response.status);
      this.getGalleryArray(); // after likes updated, updated client data
    }).catch( (error) => {
      console.log('error', error);
      alert('failed to process request')
    })
  }
  submitNewItem = (galItemObj) => { //galItemObj param looks like this {path: 'image url', description: 'image desription'}

    if (galItemObj.path === '' || galItemObj.description === '') { // prevent empty inputs
      alert('Please complete both input fields before submitting!')
      return;
    } else if (galItemObj.path.length >= 200) { // prevent excessively long inputs from erroring in database 
      alert('URL is too long. please enter a shorter path')
      return;
    } else {
      console.log(galItemObj.path.length );
      axios({
        method: 'POST',
        url: `/gallery`,
        data: galItemObj
      }).then( (response) => {
        console.log('POST request success, status:',response.status);
        this.getGalleryArray();
      }).catch( (error) => {
        console.log(error);
      });
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <GalleryForm  submitNewItem={this.submitNewItem}/>
        <br/>
        <GalleryList gallery={this.state.galleryArray} updateLike={this.putItemLikeCount}/>
      </div>
    );
  }
}

export default App;
