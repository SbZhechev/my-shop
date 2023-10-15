import { createBrowserRouter, redirect } from 'react-router-dom';
import App from '../components/App';
import Home from '../components/home/Home';
import Authentication from '../components/authentication/Authentication';
import User from '../components/user/User';
import { getUser } from '../services/AuthenticationService';
import { handleLogin, handleSignUp } from '../services/AuthenticationService';

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
        action: async ({ request }) => {
          let data = await request.formData();
          let actionType = data.get('actionType');
          if (actionType === 'login') {
            try {
              await handleLogin({ email: data.get('email'), password: data.get('password') });
              return redirect('/user');
            } catch (error) {
              return { isError: true, message: error.response.data };
            }
          } else {
            try {
              await handleSignUp({ email: data.get('email'), password: data.get('password') });
              return redirect('/signIn');
            } catch (error) {
              return { isError: true, message: error.response.data };
            }
          }
        },
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