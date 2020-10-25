import React, { Component } from 'react'
import './GalleryItem.css'


class GalleryItem extends Component {

    state = {
        renderImg: true // create a default state for the render itemBox 
    }

    toggleRenderState = () => { // when the <p> or <img> tag are clicked this will flip the state and renderitemBox will draw a different tag.
        this.setState({
            renderImg: !this.state.renderImg
        });
    }

    renderitemBox = () => {  // called to render the box. default state of the component will be the img. 
        if (this.state.renderImg) {
            return <img src={this.props.item.path} alt={this.props.item.name} className="itemBox" onClick={this.toggleRenderState}></img>
        } else {
            return <div className="itemBox" onClick={this.toggleRenderState}>{this.props.item.description}</div>
        }
    }

    render(){
        return (
            <div className="galItemFrame">
                {this.renderitemBox()}
                    <button onClick={() => this.props.updateLike(this.props.item.id)}>like this image</button> {/* accessing PUT request function in App, passing in item ID */}
                <p>{this.props.item.likes} likes</p>
                    <button onClick={() => this.props.deleteItembyId(this.props.item.id)}>Delete</button>
            </div>
        )
    }
}
export default GalleryItem;
