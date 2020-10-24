import React, { Component } from 'react'
import './GalleryItem.css'


class GalleryItem extends Component {

    state = {
        renderImg: true
    }

    toggleRenderState = () => {
        this.setState({
            renderImg: !this.state.renderImg
        });
    }

    renderitemBox = () => {
        console.log('renderitembox');
        
        if (this.state.renderImg) {
            console.log('in true render img state');
            
            return <img src={this.props.item.path} alt={this.props.item.name} className="itemBox" onClick={this.toggleRenderState}></img>
        } else {
            return <p className="itemBox" onClick={this.toggleRenderState}>test description text</p>
        }
    }


    render(){
        return (
            <div className="galItemFrame" key={this.props.item.id}>
                {this.renderitemBox()}
                    <button onClick={() => this.props.updateLike(this.props.item.id)}>likes</button> {/* accessing PUT request function in App, passing in item ID */}
                <p>{this.props.item.likes}</p>
            </div>
        )
    }

}
export default GalleryItem;
