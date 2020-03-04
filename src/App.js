import React from 'react';
import './App.css';
import Person from './person_card/person_card';

function App() {
  return (
    <div className="App">
      <Person first_name="Zach" last_name="Wick" age={1} hair_color="Black"/>
    </div>
  );
}

export default App;
