import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home-All">
      <div className="Home-Title-card">
        <h1>DAIKI JAPANESE STUDIES</h1>
        <h2>Bridge to Japan</h2>
      </div>
      <div className="Home-Details-card">
        <h3>Welcome to Daiki Japanese Studies</h3>
        <p>
          Japan is a prosperous country and has the most diverse economy in
          Asia. The leading Japanese companies are among the largest, most
          efficiently run, and most well-known firms in the world. Familiar
          names like Sony, Toshiba, Sanyo, Casio, Canon, Minolta, Honda, Toyota,
          Mitsubishi, and many others have infiltrated the world market in a
          variety of sectors. Whether you're in the field of business,
          engineering, manufacturing, research, economics, or politics, chances
          are you will be competing with, if not working for, a Japanese entity
        </p>
      </div>

      <div className="Member-Details-card">
        <h2>Daiki Students</h2>
        <p>
          We have our own Japanese Language School in Tokyo. Daiki Group of
          Japan established Daiki Japanese Language School Tokyo in Shiba,
          Minato-ku, Tokyo. We route students to Tokyo who willing to learn
          Japanese Langauge in Daiki Japanese Language School Tokyo in Japan.
        </p>
        <h3> Requirements </h3>
        <p style={{ textAlign: 'left' }}>
          <li>A/Levels</li>
          <li> NAT 5 (We conduct classes)</li>
          <li>(18-28) Age Limit</li>
        </p>
      </div>

      <div className="Member-Details-card">
        <h2>Daiki Engineers</h2>
        <p>
          We create opportunities for Engineers who willing to work in Japan as
          Daiki Engineers. People who have B.Sc, degree from recognized
          university can easily be Daiki Engineer in Japan.
        </p>

        <h3 > Requirements </h3>
        <p style={{ textAlign: 'left' }}>
          <li>B.Sc. Degree</li>
          <li>NAT 2 (We conduct classes)</li>
          <li>(18-28) Age Limit</li>
        </p>
      </div>

      <div className="Home-Media-card">
        <h1>Youtube</h1>

        <div className="video-thumbnail">
          <a
            href="https://youtu.be/5J412cXeQ5g?si=Ul0KExQ--kekfkKo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.youtube.com/vi/5J412cXeQ5g/hqdefault.jpg"
              alt="Video 2"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
