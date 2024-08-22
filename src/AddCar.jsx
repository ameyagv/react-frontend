import React, { useState } from "react";
import axios from "axios";

function AddCar() {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/add/", {
        make: make,
        model: model,
      })
      .then((response) => {
        alert("Car added successfully!");
        setMake("");
        setModel("");
      })
      .catch((error) => {
        console.error("There was an error adding the car!", error);
      });
  };

  return (
    <div>
      <h2>Add a New Car</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Make: </label>
          <input
            type="text"
            value={make}
            onChange={(e) => setMake(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Model: </label>
          <input
            type="text"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Car</button>
      </form>
    </div>
  );
}

export default AddCar;
