import { Signin, Browse } from '../pages';
import useAuthListener from '../hooks/use-auth-listner';

const useAuth = () => {
    // const user = { loggedIn: false };
    // return user && user.loggedIn

    const { user } = useAuthListener();
    return user 
};

const ProtectedRoutes = () => {
    const isAuth = useAuth();
    return isAuth ? <Browse /> : <Signin />
};

export default ProtectedRoutes; 

