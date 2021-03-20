import React from "react";
import "./App.css";
import Random from "./Component/Random_V2";
import Tag from "./Component/Tag_V2";
const App = () => (
  <div>
    <h1>Random GIF Application</h1>
    <div className="main-container">
      <Random />
      <Tag />
    </div>
  </div>
);

export default App;
