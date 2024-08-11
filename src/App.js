import React from 'react';
import './App.css';
import AtlasLogo from './assets/atlas-logo.png'; // Ensure you have this image in the assets folder
import GirlImage from './assets/girl.png'; // Ensure you have this image in the assets folder

function App() {
  return (
    <div className="App">
      <div className="landing-page">
        <img src={GirlImage} alt="Girl" className="background-image" />
        <div className="content">
          <img src={AtlasLogo} alt="Atlas Logo" className="logo" />
          <h1>
            <span>Where people</span><br />
            <span>power democracy.</span>
          </h1>
          <button className="register-button">Register to Vote</button>
        </div>
      </div>
    </div>
  );
}

export default App;
