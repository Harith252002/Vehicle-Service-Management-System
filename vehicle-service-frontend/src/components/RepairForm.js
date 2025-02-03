// frontend/src/components/RepairForm.js
// frontend/src/components/RepairForm.js

import React, { useState } from 'react';

const RepairForm = ({ components }) => {
  const [selectedComponents, setSelectedComponents] = useState([]);
  const [laborCharge, setLaborCharge] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleComponentChange = (event) => {
    const { value, checked } = event.target;
    const component = components.find((comp) => comp.id === parseInt(value));

    if (checked) {
      setSelectedComponents((prev) => [...prev, component]);
    } else {
      setSelectedComponents((prev) =>
        prev.filter((comp) => comp.id !== parseInt(value))
      );
    }
  };

  const handleLaborChargeChange = (event) => {
    setLaborCharge(event.target.value);
  };

  const calculateTotalPrice = () => {
    const componentTotal = selectedComponents.reduce(
      (total, comp) => total + parseFloat(comp.price),
      0
    );
    const total = componentTotal + parseFloat(laborCharge);
    setTotalPrice(total);
  };

  return (
    <div>
      <h3>Repair Service</h3>
      <form>
        <div>
          <label>Labor Charge:</label>
          <input
            type="number"
            value={laborCharge}
            onChange={handleLaborChargeChange}
            required
          />
        </div>
        <div>
          <h4>Select Components:</h4>
          {components.map((component) => (
            <div key={component.id}>
              <input
                type="checkbox"
                value={component.id}
                onChange={handleComponentChange}
              />
              <label>{component.name} - ${component.price}</label>
            </div>
          ))}
        </div>
        <button type="button" onClick={calculateTotalPrice}>
          Calculate Total Price
        </button>
      </form>
      <h4>Total Price: ${totalPrice}</h4>
    </div>
  );
};

export default RepairForm;

