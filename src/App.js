import './App.css';
import { BrowserRouter as Router, Route, Routes, Redirect } from 'react-router-dom'
import HomePage from './homePage/homePage';
import Content from './content/content';

function App() {
  return (
    <Router>
      <div id="App">
        <Routes>
          <Route exact path="/Ryan-Maxin-Portfolio" element={<HomePage />} />
          <Route exact path="/Ryan-Maxin-Portfolio/content" element={<Content />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
