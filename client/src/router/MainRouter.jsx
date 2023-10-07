import { createBrowserRouter, redirect } from 'react-router-dom';
import App from '../components/App';
import Home from '../components/home/Home';
import Authentication from '../components/authentication/Authentication';
import User from '../components/user/User';
import { getUser } from '../services/AuthenticationService';

const router = createBrowserRouter([
  {
    element: <App />,
    loader: async () => (await getUser()).data,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/signIn',
        element: <Authentication />
      },
      {
        path: '/user',
        loader: async () => {
          let user = (await getUser()).data;
          if (!user) return redirect('/signIn');

          return null;
        },
        element: <User />
      }
    ]
  }
]);

export default router;