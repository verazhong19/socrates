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
import firebase from 'firebase';
import {firebase_config} from './firebase_config.js';
import {LevelTWO} from './Levels'


firebase.initializeApp(firebase_config);
const database = firebase.database();


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [],
          nowSelectedStudent: {name: " ", avatar:"https://i.ibb.co/SNDH066/start.png"}
        };
    }
       componentDidMount(){
            let reference = database.ref("data");
            
            reference.on("child_added", (newData) => {
              console.log(newData.val())
              //alert("database has new content");
              this.setState({
                data: this.state.data.concat( [ newData.val() ] )
              })
            });
          }
    
  //functions
  
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
            <BackSide className='pickApleb' style={{ backgroundColor: '#41669d',}}>
            {/* <Questions query={this.state.nowSelectedStudent.question}/> */}
            <LevelTWO data={this.state.data} />
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
