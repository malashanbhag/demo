import React, { Component } from 'react';
import './App.css';
import './Person/Person.css'; 
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
  state = {
    persons: [
      {id:'10', name: 'abc', age:18},
      {id:'11', name: 'def', age:20},
      {id:'12', name: 'ghi', age:22},
    ],
    showPersons : false
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    });
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
    })
  }

  togglePersonsHandler = () => {
    this.setState({
      showPersons : !this.state.showPersons
    })

  }

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index,1);
    this.setState({persons : persons})
  }

  render() {
    const style = {
      backgroundColor : 'green',
      color : 'white',
      fint: 'inherit',
      border: '1px solid blue',
      padding : '8px',
      cursor: 'pointer',
    };

    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index)=>{
            return <ErrorBoundary key={person.id}><Person 
            click={() => this.deletePersonHandler(index)} 
            name={person.name} 
            age={person.age} 
            changed={(event) => this.nameChangedHandler(event, person.id)}></Person></ErrorBoundary>
          })}
          </div>
      );

      style.backgroundColor = 'red';
    }

    let classes = [];
    if(this.state.persons.length <= 2){
      classes.push('red')
    }
    if(this.state.persons.length <= 1){
      classes.push('bold')
    }

    return (
        <div className="App">
          <h1>Hi, I'm React App!!</h1>
          <p className={classes.join(' ')}>This is really working!</p>
          <button
            style={style} 
            onClick={this.togglePersonsHandler}> 
              Toggle Persons
          </button>
          {persons}
        </div>
    );
  }
}

export default App;
