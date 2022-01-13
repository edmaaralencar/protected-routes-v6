import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const loggedIn = true;

    return loggedIn ? children : <Navigate to="/sign-in" />;
};

export default PrivateRoute;
