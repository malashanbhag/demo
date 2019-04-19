import React, { Component } from 'react';
import './App.css';
import './Person/Person.css'

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'abc', age:18},
      {name: 'def', age:20},
      {name: 'ghi', age:22},
    ]
  };

  switchNameHandler = (newName) => {
    console.log('was clicked')
    this.setState({
      persons: [
        {name: newName, age:18},
        {name: 'def', age:20},
        {name: 'ghi', age:22},
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons : [
        {name: 'abc', age:18},
        {name: event.target.value, age:20},
        {name: 'ghi', age:22},
      ]
    })
  }

  render() {
    const style = {
      backgroundColor : 'white',
      fint: 'inherit',
      border: '1px solid blue',
      padding : '8px',
      cursor: 'pointer'
    };
    return (
      <div className="App">
        <h1>Hi, I'm React App!!</h1>
        <button
          style={style} 
          onClick={() => {this.switchNameHandler('Mala')}}> 
            Switch Name
        </button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
        />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this,'Mala1')}
          changed={this.nameChangedHandler}>
          My hobbies
        </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
