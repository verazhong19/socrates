import React, { Component } from 'react';
import './App.css';
import DisplayName from './components/DisplayName';
import ButtonNoRep from './components/ButtonNoRep';
import ButtonRep from './components/ButtonRep';

class App extends Component {

  //functions
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* leftovers */}
          <img src={'https://i.pinimg.com/originals/c5/67/60/c56760404cac5ca001c2ba11e330d606.jpg'} className="App-logo" alt="logo" />
          <p>
            Click <code>the icon</code> to pick a Pleb.
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
        <DisplayName student={this.name} />
      </div>    

      <div>
        <Button onClick ={this.noRepeat} />
      </div>


        </header>
      </div>
    );
  }
}

export default App;
