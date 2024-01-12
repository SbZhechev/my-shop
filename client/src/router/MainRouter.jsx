import { createBrowserRouter } from 'react-router-dom';
import App from '../components/App';
import Home from '../components/home/Home';
import User from '../components/user/User';
import { getUser } from '../services/AuthenticationService';
import { loginRoute, signUpRoute } from './routes/AuthenticationRoute';

const router = createBrowserRouter([
  {
    element: <App />,
    loader: async () => (await getUser()).data,
    children: [
      {
        path: '/',
        element: <Home />
      },
      loginRoute,
      signUpRoute,
      {
        path: '/user',
        element: <User />
      },
      {
        path: '*',
        element: <Home />
      }
    ]
  }
]);

export default router;