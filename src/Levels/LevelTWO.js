import React, { Component } from 'react';

class LevelTWO extends Component {
    constructor(props){
      super(props)
      this.state ={};
      this.renderList = this.renderList.bind(this);
    };

    // this function renders out list elements dynamically
    renderList = () =>{
      return this.props.data.map((dataItem, index) =>{
        return <li key={index}>{dataItem}</li>;
      });
    }
    
componentDidUpdate(){ 
 let listElement = this.refs.list;
 let listItem = listElement.lastChild;
 if(listItem!=null){
   listElement.scrollTo({
     top: listItem.offsetTop,
     left: 0,
     behavior: 'smooth'
   });
 }

}


    render() { 
        return (  
              <div className='content levelTWO'>
                <ul ref="list">
                  {this.renderList()}
                </ul>
              </div>
        );
    }
}
 
export default LevelTWO;