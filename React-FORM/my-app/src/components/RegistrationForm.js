
import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    userId: '',
    password: '',
    name: '',
    address: '',
    country: '',
    zipCode: '',
    email: '',
    sex: '',
    language: '',
    about: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        User id:
        <input type="text" name="userId" value={formData.userId} onChange={handleChange} required minLength="5" maxLength="12" />
      </label>
      <label>
        Password:
        <input type="password" name="password" value={formData.password} onChange={handleChange} required minLength="7" maxLength="12" />
      </label>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required pattern="[A-Za-z]+" />
      </label>
      <label>
        Address:
        <input type="text" name="address" value={formData.address} onChange={handleChange} />
      </label>
      <label>
        Country:
        <select className='select' name="country" value={formData.country} onChange={handleChange} required>
          <option value="">Please select a country</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="UK">UK</option>
          <option value="UK">Pakistaan</option>
          <option value="UK">Dubai</option>
        </select>
      </label>
      <label>
        ZIP Code:
        <input type="text" name="zipCode" value={formData.zipCode} onChange={handleChange} required pattern="\d+" />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>
      <label>
        Sex:
        <input type="radio" name="sex" value="Male" onChange={handleChange} required /> Male
        <input type="radio" name="sex" value="Female" onChange={handleChange} required /> Female
      </label>
      <label>
        Language:
        <input type="checkbox" name="language" value="English" onChange={handleChange} /> English
        <input type="checkbox" name="language" value="Non-English" onChange={handleChange} /> Non-English
      </label>
      <label>
        About:
        <textarea name="about" value={formData.about} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default RegistrationForm;
