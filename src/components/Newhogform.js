import React, { useState } from 'react';

function NewHogForm({ onAddHog }) {
  const [formData, setFormData] = useState({
    name: '',
    specialty: '',
    weight: '',
    greased: false,
    image: '',
    highestMedal: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddHog(formData);
    setFormData({ name: '', specialty: '', weight: '', greased: false, image: '', highestMedal: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
      <input name="specialty" placeholder="Specialty" value={formData.specialty} onChange={handleChange} />
      <input name="weight" type="number" placeholder="Weight" value={formData.weight} onChange={handleChange} />
      <label>
        Greased:
        <input name="greased" type="checkbox" checked={formData.greased} onChange={handleChange} />
      </label>
      <input name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} />
      <input name="highestMedal" placeholder="Highest Medal" value={formData.highestMedal} onChange={handleChange} />
      <button type="submit">Add Hog</button>
    </form>
  );
}

export default NewHogForm;

