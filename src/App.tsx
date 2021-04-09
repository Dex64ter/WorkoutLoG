import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h3>Workout Log</h3>
      </header>
      <div id="container">
        <div className="Insert">Insert an item</div>
        <form action="">
          <div>
            <input className="input-height" type="number" name="hrs" id="fhrs"/>
          </div>
          <select name="sport" id="fsport">
            <option value="Run">Run</option>
            <option value="Swimming">Swimming</option>
            <option value="Bike">Bike</option>
          </select>
          <input className="input-height" type="date" name="data" id="fdata"/>
          <div>
            <button className="add">Add</button>
          </div>
        </form>
        <hr/>
      </div>
    </div>
  );
}

export default App;
