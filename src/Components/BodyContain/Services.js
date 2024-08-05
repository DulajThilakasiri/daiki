import React from 'react';
import "./Service.css";
import service1 from "../../Resourses/service1.jpg";
import service2 from "../../Resourses/service2.jpg";
import service3 from "../../Resourses/service3.jpg";


const Service = () => {
  return (
    <div className='service-all'>
      <h1>Our Services</h1>
      <div className="Service-Details-card">
        <h2>Consulting To Build Your Career In Japan</h2>
        <p>
          We are representing Daiki Group of Japan in Sri Lanka. Being a bridge between Sri Lanka and Japan we found number of similarities and differences in both countries.
          As a result of that we were able to  create opportunities for Sri Lankans who willing to learn/work in Japan.
        </p>
      </div>

      
      <div className='Service-image-card'>
      <div className='service-images'>
          <img src={service1} alt="japan tech" />
          <img src={service2} alt="japan tech 2" />
          <img src={service3} alt="japan tech 3" />
        </div>
      </div>
    </div>
  );
};

export default Service;