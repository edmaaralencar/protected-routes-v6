import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';

import './App.css';

import Dashboard from './pages/Dashboard';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<PrivateRoute />}>
                    <Route path="*" element={<Dashboard />} />
                </Route>

                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
            </Routes>
        </Router>
    );
}

export default App;
