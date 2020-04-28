import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>Hello World!</h1>
       <Person name='max' age='28'/> 
       <Person name='manu' age='30'>Hobbies: Cycling</Person> 
       <Person name='emily' age='26'/> 
      </div>
    );
  }
}

export default App;
