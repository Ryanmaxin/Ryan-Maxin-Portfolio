import './App.css';
import { BrowserRouter as Router, Route, Routes, Redirect } from 'react-router-dom'
import HomePage from './homePage/homePage';
import Projects from './projects/projects';
import About from './about/about';

function App() {
  return (
    <Router>
      <div id="App">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
