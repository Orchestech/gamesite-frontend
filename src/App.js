import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HeaderComponent from './components/HeaderComponent.js';
import MainComponent from './components/MainPageComponent.js';
import FooterComponent from './components/FooterComponent.js';
import LogInComponent from './components/LogInComponent.js';
import SignUpComponent from './components/SignUpComponent.js';
import PasswordResetComponent from './components/PasswordResetComponent.js';
import PrivateOfficeComponent from './components/PrivateOfficeComponent.js';
import NotFound from './components/NotFound.js';

function App() {
  return (
    <>
      <Router>
          <HeaderComponent />
          <Routes>
            <Route path="/" element={<MainComponent />} />
            <Route path="/log_in" element={<LogInComponent />} />
            <Route path="/sign_up" element={<SignUpComponent />} />
            <Route path="/password_reset" element={<PasswordResetComponent />} />
            <Route path="/private_office" element={<PrivateOfficeComponent />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <FooterComponent />
      </Router>
    </>
    
  );
}

export default App;
