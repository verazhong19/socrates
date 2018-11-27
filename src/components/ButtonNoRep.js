import React, { Component } from 'react';

class ButtonNoRep extends Component {
    render() { 
        return (
            <button className="btn btn-primary" style={{ padding: '15px 30px', margin: '5px 3px', display: 'inline-block' }} onClick={this.props.onClick} >
                No Repetition
            </button>
        );
    }
}
 
export default ButtonNoRep;