import React, { Component } from 'react';
import './App.css';
import studentList from './components/Students';
import DisplayName from './components/DisplayName';
import randomNoRep from './components/randomNoRep';
import randomRep from './components/randomRep';
import ButtonNoRep from './components/ButtonNoRep';
import ButtonRep from './components/ButtonRep';

class App extends Component {

  //functions
  state = {
    nowSelectedStudent: {name: " "},
  };
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* leftovers */}
          <img src={'https://i.pinimg.com/originals/c5/67/60/c56760404cac5ca001c2ba11e330d606.jpg'} className="App-logo" alt="logo" />
          <p>
            Click <code>the buttons </code> to pick a Pleb.
          </p>
         
          <a
            className="App-link"
            href="https://medium.com/applab"
            target="_blank"
            rel="noopener noreferrer"
          >
            Plato's Plebians
          </a>

      <div>
        <DisplayName student={this.state.nowSelectedStudent.name} />
      </div>    

      <div>
        <ButtonNoRep onClick={function () {
          this.setState({
            nowSelectedStudent: randomNoRep(studentList),
          })
        }.bind(this)} />
      </div>

      <div>
        <ButtonRep onClick={function () {
          this.setState({
            nowSelectedStudent: randomRep(studentList),
          })
        }.bind(this)} />
      </div>


        </header>
      </div>
    );
  }
}

export default App;
