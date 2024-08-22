import React, { useState, useEffect } from "react";
import axios from "axios";

function CarList() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/cars?format=json")
      .then((response) => {
        setCars(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the cars!", error);
      });
  }, []);

  return (
    <div>
      <h2>Car List</h2>
      <ul>
        {console.log("cars")}
        {cars.map((car) => (
          <li>
            {car.make} - {car.model}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CarList;
