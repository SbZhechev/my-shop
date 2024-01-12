import Authentication from "../../components/authentication/Authentication";
import { handleLogin, handleSignUp } from '../../services/AuthenticationService';
import { AUTHENTICATION_FORM_TYPES } from '../../utilites/constants';
import { redirect } from "react-router-dom";

const loginRoute = {
  path: '/login',
  element: <Authentication authenticationFormType={AUTHENTICATION_FORM_TYPES.LOGIN_FORM} />,
  action: async ({ request }) => {
    try {
      let data = await request.formData();

      await handleLogin({ email: data.get('email'), password: data.get('password') });
      return redirect('/user');
    } catch (error) {
      return { isError: true, message: error.response.data };
    }
  }
};

const signUpRoute = {
  path: '/signUp',
  element: <Authentication authenticationFormType={AUTHENTICATION_FORM_TYPES.SIGN_UP_FORM} />,
  action: async ({ request }) => {
    try {
      let data = await request.formData();

      await handleSignUp({ email: data.get('email'), password: data.get('password') });
      return redirect('/login');
    } catch (error) {
      return { isError: true, message: error.response.data };
    }
  }
};

export { loginRoute, signUpRoute };