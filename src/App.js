import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HeaderComponent from './components/HeaderComponent.js';
import MainComponent from './components/MainPageComponent.js';
import FooterComponent from './components/FooterComponent.js';
import LogInComponent from './components/LogInComponent.js';

function App() {
  return (
    <>
      <Router>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<MainComponent />} />
          <Route path="/log_in" element={<LogInComponent />} />
        </Routes>
      </Router>
      <FooterComponent />
    </>
  );
}

export default App;
