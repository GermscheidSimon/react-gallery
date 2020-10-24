import React, { Component } from 'react'
import './GalleryItem.css'


class GalleryItem extends Component {

  

    render(){
        return (
            <div className="galItemFrame" key={this.props.item.id}>
                <img src={this.props.item.path} alt={this.props.item.name}></img>
                    <button onClick={() => this.props.updateLike(this.props.item.id)}>likes</button> {/* accessing PUT request function in App, passing in item ID */}
                <p>{this.props.item.likes}</p>
            </div>
        )
    }

}
export default GalleryItem;
