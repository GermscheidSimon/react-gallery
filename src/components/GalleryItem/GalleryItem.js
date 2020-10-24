import React, { Component } from 'react'


class GalleryItem extends Component {

  

    render(){
        return (
            <div id="galItemFrame">
                <ul>
                    <li>{this.props.item.description}</li>
                </ul>
            </div>
        )
    }

}
export default GalleryItem;
