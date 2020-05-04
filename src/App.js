import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      {id: '1w2', name: 'Max', age: 26},
      {id: '33e', name: 'Sophia', age: 27},
      {id: '4r4', name: 'Dhara', age: 28}
    ],
    personExtra : 'some random text',
    showPerson: false
  }

  deletePersonHandler = (personIndex) =>{
    const newPerson = [...this.state.persons];
    newPerson.splice(personIndex, 1);
    console.log(this.state.persons);
    this.setState({persons : newPerson})
  }

  handleChange = (event, personId) => {
    console.log('Inside handleChange');
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === personId;
    })
    
    const personToChange = {...this.state.persons[personIndex]};
    personToChange.name = event.target.value;

    const newPersons =  [...this.state.persons];
    newPersons[personIndex] = personToChange;

    this.setState({ persons : newPersons})

  } 

  togglePersonHandler = () => {
    const show = this.state.showPerson;
    this.setState({ showPerson: !show});
  }

  render() {

    const inlineStyle = {
      backgroundColor: 'green',
      color: 'white',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
      // ':hover': {
      //   backgroundColor: 'lightgreen',
      //   color: 'black'
      // }
    }

    let classes = [];
    if(this.state.persons.length <= 2){
      classes.push('red');
    }
    if(this.state.persons.length <= 1){
      classes.push('bold');
    }

    let persons = null;
    if(this.state.showPerson) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person
                key={person.id}
                name={person.name}
                age={person.age} 
                click={() => this.deletePersonHandler(index)}
                changed={(event) => this.handleChange(event, person.id)}/>
            })
          }
        </div>
      );
      inlineStyle.backgroundColor = 'red'; 
      // inlineStyle[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    }
    
    return (
      <div className="App">
        <h1>Happy Learning</h1>
        <p className={classes.join(' ')}>This is really working</p>
        <button className="button" onClick={this.togglePersonHandler}>Switch Name</button>
        {persons}
      </div>
    );
  }
}

export default App;
