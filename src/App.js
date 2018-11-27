import React, { Component } from 'react';
import './App.css';
import studentList from './components/Students';
import DisplayName from './components/DisplayName';
import randomNoRep from './components/randomNoRep';
import randomRep from './components/randomRep';
import ButtonNoRep from './components/ButtonNoRep';
import ButtonRep from './components/ButtonRep';
import Avatar from './components/Avatar';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Questions from './components/Questions';


class App extends Component {

  //functions
  state = {
    nowSelectedStudent: {name: " ", question:''},
  };
  
  render() {
    return (
<div className="App">
    <header className="App-header">
        <div className="plato"> <h1>Plato's Plebians</h1>
        </div>

        <Flippy flipDirection="horizontal" flipOnClick={true} ref={(r)=> this.flippy = r} style={{ width: '300px', height: '300px' }}>


            <FrontSide style={{ backgroundColor: '#41669d', }}>
                <DisplayName student={this.state.nowSelectedStudent.name} />
                <Avatar image={this.state.nowSelectedStudent.avatar}/>
            </FrontSide>
            <BackSide style={{ backgroundColor: '#41669d'}}>
            <Questions query={this.state.nowSelectedStudent.question}/>
            </BackSide>
        </Flippy>
        <div>
            <ButtonNoRep onClick={function () { this.setState({ nowSelectedStudent: randomNoRep(studentList), }) }.bind(this)} />
            <ButtonRep onClick={function () { this.setState({ nowSelectedStudent: randomRep(studentList), }) }.bind(this)} />
        </div>


    </header>
</div>    );
  }
}

export default App;
