import React, { Component } from 'react';

class ButtonRep extends Component {
    render() { 
        return (
            <button className='btn btn-success' onClick={this.props.onClick} style={{ padding: '15px 30px', margin: '5px 3px', display: 'inline-block'}}>
                Repetition
            </button>
        );
    }
}
 
export default ButtonRep;