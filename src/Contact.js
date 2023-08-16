import React, { useState } from 'react';
import './index.css';

const About = () => {
  const [values, setValue] = useState({
    name: '',
    phone: '',
    gmail: '',
    message: '',
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setValue((preVal) => ({
      ...preVal,
      [name]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
const { name, phone, gmail, message } = values;

// Check if any of the properties is empty
if (!name || !phone || !gmail || !message) {
  alert('Error submitting form: Some form fields are empty');
  return; // or handle the error accordingly
}

const sanitizedMessage = message.replace(/"/g, '');

    try {
        const response = await fetch('http://localhost:8000/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name,
              phone,
              gmail,
              message: sanitizedMessage, // URL-encode the message
            }),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
      } else {
        throw new Error('Error submitting form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }

    setValue({
      name: '',
      phone: '',
      gmail: '',
      message: '',
    });
  };

  return (
    <form method="POST">
      <div className="Contact">
        <h1 style={{ textAlign: 'center' }}>Contact Us</h1>

        <label>Full Name</label>
        <input
          type="text"
          placeholder="enter your name"
          onChange={InputEvent}
          name="name"
          value={values.name}
        />
        <label>Phone</label>
        <input
          type="text"
          placeholder="enter your phone"
          onChange={InputEvent}
          name="phone"
          value={values.phone}
        />
        <label>Gmail</label>
        <input
          type="text"
          placeholder="enter your Gmail"
          onChange={InputEvent}
          name="gmail"
          value={values.gmail}
        />
        <label>Message</label>
        <textarea
          type="text"
          placeholder="enter your message"
          onChange={InputEvent}
          name="message"
          value={values.message}
        ></textarea>
        <button type="submit" className="btn" onClick={onSubmit}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default About;
