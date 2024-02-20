import React from "react";
import "./style.css";
import "./Components/buttons.css";
import "./Components/Header.css";

const App = () => {
  return (
    <div className='styles.myContainer'>
      <h1>🍌 Hello World! 🛸</h1>;
      <button className='first-btn'>Click me</button>
      <button className='second-btn'>Enter</button>
    </div>
  );
};

export default App;
