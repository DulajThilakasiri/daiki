import React from 'react';
import "./Contact.css";

const Contact = () => {
  return (
    <div className='contact-all'>
      <h1>Contact Us</h1>
      <div className="Contact-Details-card">
        <h2>Contact us (Daiki offering special scholar ship programs for 2018 intake)</h2>
        <p>
        Daiki Lanka (Pvt) Ltd. (Daiki Group Japan)
        <br/>24/9, 1st Lane, Gothami Road,
        <br/>Borella, Colombo 08,
        <br/>Sri Lanka
        </p>
        
      </div>


<div className='form-card'>
<form className="contact-form">
          <div className="form-group">
            <label htmlFor="firstname">Firstname:</label>
            <input type="text" id="firstname" name="firstname" required />
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Lastname:</label>
            <input type="text" id="lastname" name="lastname" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="comment">Comment:</label>
            <textarea id="comment" name="comment" rows="3" required></textarea>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>


</div>
      
    </div>
  );
};

export default Contact;