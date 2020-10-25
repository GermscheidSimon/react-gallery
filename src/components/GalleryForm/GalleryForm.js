import React, { Component } from 'react'
import './GalleryForm.css'
class GalleryForm extends Component {

    state = {
        inputs: {
            path: '',
            description: ''
        }
    }
    handleInputChange = (inputParam, event) => {
        this.setState({
            inputs: {
                ...this.state.inputs, 
            [inputParam]: event.target.value
            }
        })
    }

    render(){
        return(
            <div className="formWrapper">
                <label htmlFor="picURLIn">Add a URL to Picture:   </label>
                 <input id="picURLIn" type="text" placeholder="URL (https://www....)" onChange={(event) => this.handleInputChange('path', event)}></input>
                    <br/>
                    <br/>
                <label htmlFor="picDescIn">Short description of the picture:   </label>
                 <textarea id="picDescIn" rows="3"  maxLength="120"  placeholder="Description . . ." onChange={(event) => this.handleInputChange('description', event)}></textarea>
                    <br/>
                <button onClick={() => this.props.submitNewItem(this.state.inputs)}>Add Picture</button>
            </div>
        )
    }
}

export default GalleryForm;