import {Component} from 'react';

class ImageComponent extends Component{
    render(){
        return (
            // <img src= />
            <img src={this.props.imgUrl} alt="Girl in a jacket" width="500" height="600"></img>
        );
    }
}

export default ImageComponent