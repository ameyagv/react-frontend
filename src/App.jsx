import React from 'react';
import CarList from './CarList';
import AddCar from './AddCar';

function App() {
  return (
    <div className="App">
      <h1>Car Management System</h1>
      <CarList />
      <AddCar />
    </div>
  );
}

export default App;
