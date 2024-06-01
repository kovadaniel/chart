import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'app/providers/router/config/routeConfig';
//import { routeConfig } from 'app/providers/router/config/routeConfig';

const AppRouter = () => {
    return ( 
        <Routes>
            {Object.values(routeConfig).map(route => 
                <Route 
                    key={route.path}
                    element={route.element} 
                    path={route.path}/>
            )}
        </Routes>
    );
};
 
export default AppRouter;