import Navigation from './navigation/Navigation';
import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <section className='section'>
      <Navigation />
      <Outlet />
    </section>
  );
}

export default App;
