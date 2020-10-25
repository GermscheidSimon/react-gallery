import React, { Component } from 'react'
import './GalleryItem.css'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';


class GalleryItem extends Component {

    state = {
        renderImg: true // create a default state for the render itemBox 
    }

    toggleRenderImg = () => { // when the <p> or <img> tag are clicked this will flip the state and renderitemBox will draw a different tag.
        this.setState({
            renderImg: !this.state.renderImg
        });
    }



    renderitemBox = () => {  // called to render the box. default state of the component will be the img. 
        if (this.state.renderImg) {
            return <img src={this.props.item.path} alt={this.props.item.name} className="itemBox"  onClick={this.toggleRenderImg} ></img>
        } else {
            return <div className="itemBox" onClick={this.toggleRenderImg} >{this.props.item.description}</div>
        }
    }

    render(){
        return (
            <div className="galItemFrame" >
            <div className="dltbtnWrap">
            </div>
                {this.renderitemBox()}
                <div className="buttonLikeWrap">
                    <Button className="dltBtn" color="primary" onClick={() => this.props.updateLike(this.props.item.id)}>Like</Button>
                     {/* accessing PUT request function in App, passing in item ID */}
                <p>{this.props.item.likes} likes</p>
                    <IconButton aria-label="delete"  onClick={() => this.props.deleteItembyId(this.props.item.id)}>
                        <DeleteIcon fontSize="small"/>
                    </IconButton>
                </div>
            </div>
        )
    }
}
export default GalleryItem;
