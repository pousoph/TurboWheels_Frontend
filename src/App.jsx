import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { LoginPage } from './pages/LoginPage.jsx';
import { Dashboard } from './pages/Dashboard';
import {RegistroUsuario} from "./pages/RegistroUsuario.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/dashboard/*" element={<Dashboard />} />
                <Route path="/registro" element={<RegistroUsuario />} />
            </Routes>
        </Router>
    );
}

export default App;
