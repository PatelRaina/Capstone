import React, { useState } from 'react';
import axios from 'axios';
import '../styles/contactus.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    option:'',
    query: '',

  });
 // const [name, setName] = useState('');
 // const [email, setEmail] = useState('');
  const [option, setOption] = useState('');

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleDropdownChange =(event)=> {
    setOption(event.target.value);
  }
  const handleSubmit = async (event) => {
    event.preventDefault();


    try {
      const response = await axios.post('/api/send-email', formData);
      console.log(response.data);
      alert('Message sent successfully');
      setFormData({
        name: '',
        email: '',
        option:'',
        query: ''
      });
    } catch (error) {
      console.log(error);
      alert('Error sending message');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <h1>CONTACT US</h1>
      <div className="input-container">
        <h3>Name:</h3>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
      </div>
      <div className="input-container">
        <h3>Email:</h3>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
      </div>
      <div className="input-container">
      <h3>Organization Type:</h3>
      <select>
        <option value="">Please choose an option</option>
        <option value="For Profit"> For Profit</option>
        <option value="For Non-Profit">For Non-Profit</option>
        <option value="Government">Government</option>
        <option value="Other">Other</option>
        <option value="Not applicable">Not applicable</option>
      </select>
      </div>
      <div className="input-container">
        <h3>Query:</h3>
        <textarea id="query" name="query" value={formData.message} onChange={handleChange}></textarea>
      </div>
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
