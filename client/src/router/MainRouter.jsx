import { createBrowserRouter, redirect } from 'react-router-dom';
import App from '../components/App';
import Home from '../components/home/Home';
import Authentication from '../components/authentication/Authentication';
import User from '../components/user/User';
import { getUser } from '../services/AuthenticationService';
import { handleLogin, handleSignUp } from '../services/AuthenticationService';
import { AUTHENTICATION_FORM_TYPES } from '../utilites/constants';

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
        path: '/auth?/login',
        element: <Authentication authenticationFormType={AUTHENTICATION_FORM_TYPES.LOGIN_FORM} />,
        action: async ({ request }) => {
          try {
            let data = await request.formData();

            await handleLogin({ email: data.get('email'), password: data.get('password') });
            return redirect('/user');
          } catch (error) {
            return { isError: true, message: error.response.data };
          }
        },
      },
      {
        path: '/auth/signUp',
        element: <Authentication authenticationFormType={AUTHENTICATION_FORM_TYPES.SIGN_UP_FORM} />,
        action: async ({ request }) => {
          try {
            let data = await request.formData();
  
            await handleSignUp({ email: data.get('email'), password: data.get('password') });
            return redirect('/auth/login');
          } catch (error) {
            return { isError: true, message: error.response.data };
          }
        }
      },
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