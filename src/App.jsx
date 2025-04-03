import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Content from "./content/content";
import Homepage from "./homepage/hompeage";
import { ROUTES } from "./routes";

function App() {
  return (
    <Router>
      <div id="App">
        <Routes>
          <Route path={ROUTES.HOME} element={<Homepage />} />
          <Route path={ROUTES.CONTENT} element={<Content />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
