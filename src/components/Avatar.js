import React, { Component } from 'react';

class Avatar extends Component {
    render() { 
        return (
            <img src={this.props.image} alt="avatar" />
        );
    }
}
 
export default Avatar;