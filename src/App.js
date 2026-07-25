import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MainPage from './components/MainPage';
import Hosted from './components/Hosted';

function App() {
  return (
    <Router>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/hosted" element={<Hosted />} />
          </Routes>
    </Router>
  );
}

export default App;
