import React, {Component} from 'react'
import GalleryItem from '../GalleryItem/GalleryItem'

class GalleryList extends Component {


    /*  EXAMPLE DATA:: { id: 1, path: 'images/goat_small.jpg', description: 'Photo of a goat taken at Glacier National Park.', likes: 0 } */

    render(){
        return (
            <div>
                {this.props.gallery.map( (item) => {      
                    return <GalleryItem item={item} updateLike={this.props.updateLike} key={item.id} deleteItembyId={this.props.deleteItembyId}/>
                })}
            </div>
        )
    }
}
export default GalleryList;