import { Routes, Route } from "react-router-dom"
import LoginPage from './pages/LoginPage';
import LandingPage from './pages/LandingPage';

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
        </Routes>
    )
}


