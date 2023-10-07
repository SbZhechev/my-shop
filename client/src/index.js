import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './components/App';
import Authentication from './components/authentication/Authentication';
import Home from './components/home/Home';
import { getUser } from './services/AuthenticationService';

const router = createBrowserRouter([
  {
    path: '/',
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
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);