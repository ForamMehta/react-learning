import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const appExtra = () => {

  const [personState, setPerson] = useState(
    {
      person: [
        { name: 'Max', age: 26 },
        { name: 'Sophia', age: 27 },
        { name: 'Dhara', age: 28 }
      ],
      somePerson: 'random text'
    }
  );

  console.log(personState);

  const handleClick = () => {
    alert('Hello!');
    setPerson({
      person: [
        { name: 'Maxmul', age: 26 },
        { name: 'Sophia Tuner', age: 27 },
        { name: 'Dhara', age: 30 }
      ]
    })
  }
  // render() {
    return (
      <div className="App">
        <h1>Happy Learning</h1>
        <button onClick={handleClick}>Switch Name</button>
        <Person name={personState.person[0].name} age={personState.person[0].age}/>
        <Person name={personState.person[1].name} age={personState.person[1].age}>My Hobby : Racing</Person>
        <Person name={personState.person[2].name} age={personState.person[2].age}/>
      </div>
    );
  // }
}

export default appExtra;
