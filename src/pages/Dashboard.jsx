import Header from '../components/Header';
import { Routes, Route } from 'react-router-dom';
import Users from './Users';
import Home from './Home';

const Dashboard = () => {
    return (
        <div>
            <Header />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/users' element={<Users />} />
            </Routes>
        </div>
    );
};

export default Dashboard;
