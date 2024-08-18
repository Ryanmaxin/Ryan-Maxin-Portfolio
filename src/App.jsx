import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Content from "./content/content";
import Homepage from "./homepage/homepage";

function App() {
  return (
    <Router>
      <div id="App">
        <Routes>
          <Route exact path="/Ryan-Maxin-Portfolio" element={<Homepage />} />
          <Route
            exact
            path="/Ryan-Maxin-Portfolio/content"
            element={<Content />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
