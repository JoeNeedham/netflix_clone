import { Signin, Browse } from '../pages';

const useAuth = () => {
    const user = { loggedIn: false };
    return user && user.loggedIn
};

const ProtectedRoutes = () => {
    const isAuth = useAuth();
    return isAuth ? <Browse /> : <Signin />
};

export default ProtectedRoutes; 

