import React, { Component } from 'react'
import './GalleryItem.css'


class GalleryItem extends Component {

  

    render(){
        return (
            <div class="galItemFrame" key={this.props.item.id}>
                <img src={this.props.item.path} alt={this.props.item.name}></img>
                    <button on>likes</button>
                <p>{this.props.item.likes}</p>
            </div>
        )
    }

}
export default GalleryItem;
