import { useRoutes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ShopPage from '../pages/ShopPage';
import LoginPage from '../pages/LoginPage';

const RouterOutlet = () => {
    const routers = useRoutes([
        {   
            path: "/", 
            element: <HomePage/>
        },
        {
            path: "shop", 
            element: <ShopPage/>
        },
        {
            path: "/auth",
            children: [
                {
                    path: 'login',
                    element: <LoginPage/>  
                },
            ],
        }
    ]);

    return routers;
};

export default RouterOutlet;