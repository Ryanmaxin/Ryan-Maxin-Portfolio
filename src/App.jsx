import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Content from "./content/content";
import Homepage from "./homepage/hompeage";

function App() {
  return (
    <Router>
      <div id="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/content" element={<Content />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
