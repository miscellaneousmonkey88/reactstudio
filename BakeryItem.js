// TODO: create a component that displays a single bakery item
import React, {Component, PropTypes} from 'react';

class BakeryItem extends React.Component {
    
    render() {
    return (
        <p>
            <img src = {this.props.image}/>
            <div>{this.props.name} {this.props.price}</div>
            <div>
                {this.props.addbutton} {this.props.removebutton}
            </div>
        </p>
    )
    }
}
  

export default BakeryItem;