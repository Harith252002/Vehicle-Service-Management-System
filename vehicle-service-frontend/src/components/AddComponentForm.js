// frontend/src/components/AddComponentForm.js

import React, { useState } from 'react';
import axios from 'axios';

const AddComponentForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newComponent = { name, description, price, stock };

    try {
      await axios.post('http://localhost:8000/api/components/', newComponent);
      alert('Component added successfully!');
      setName('');
      setDescription('');
      setPrice('');
      setStock('');
    } catch (error) {
      console.error('There was an error adding the component:', error);
      alert('Error adding component.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Price:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Stock:</label>
        <input
          type="number"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Component</button>
    </form>
  );
};

export default AddComponentForm;
