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
    this.getGalleryArray();
  }

  getGalleryArray = () => {
    console.log('GET /gallery started');
    axios({
      method: 'GET',
      url: '/gallery'
        }).then( (response) => {
          console.log(`GET /gallery ${response.data.length} items received` );
          this.setState({ // replace galleryArray with response
            galleryArray: response.data
          });    
        }).catch( (error) => {
          console.log(error); //log error
          alert('failed to process request'); // throw an alert for user
        });
  }

  putItemLikeCount = (itemID) =>{
    console.log('PUT /gallery started');
    axios({
      method: 'PUT',
      url: `/gallery/like/${itemID}`
    }).then( (response) => {
      console.log('PUT /gallery success', response);
      this.getGalleryArray(); // after likes updated, updated client data
    }).catch( (error) => {
      console.log('error', error);
      alert('failed to process request')
    })
  }
  submitNewItem = (galItemObj) => { //galItemObj param looks like this {path: 'image url', description: 'image desription'}

    if (galItemObj.path === '' || galItemObj.description === '') {
      alert('Please complete both input fields before submitting!')
      return;
    } else {
      axios({
        method: 'POST',
        url: `/gallery`,
        data: galItemObj
      }).then( (response) => {
        console.log(response);
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
