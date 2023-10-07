import Navigation from './navigation/Navigation';
import { Outlet, useLoaderData } from 'react-router-dom';
import './App.css';

function App() {
  const user = useLoaderData();
  
  return (
    <section className='section'>
      <Navigation user={ user } />
      <Outlet context={ { user } } />
    </section>
  );
}

export default App;
