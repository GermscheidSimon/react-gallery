import React, { Component } from 'react'

class GalleryForm extends Component {



    render(){
        return(
            <div className="formWrapper">
                <label htmlFor="picURLIn">Add a URL for your Picture Image:   </label>
                <input id="picURLIn" type="text" placeholder="Picture URL"></input>
                <br/>
                <br/>
                <label htmlFor="picDescIn">Short description of the picture:   </label>
                <textarea id="picDescIn" rows="3" placeholder="Description"></textarea>
            </div>
        )
    }
}

export default GalleryForm;