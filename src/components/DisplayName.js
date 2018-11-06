import React, { Component } from 'react';

class DisplayName extends Component {
    render() { 
        return (
            <p>{this.props.student}</p>
        );
    }
}
 
export default DisplayName;