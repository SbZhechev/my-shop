import { useState } from 'react';
import { handleLogin } from '../services/AuthenticationService';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleClick = async () => {
    try {
      let result = (await handleLogin({ email, password })).data;
      setFeedbackMessage(result);
    } catch (err) {
      setFeedbackMessage(err.response.data);
    }
  }

  return (
    <section>
      <h1>Welcome to My Shop!</h1>

      <form className='form'>
        <fieldset className='fieldset'>
          <legend>Login</legend>
          <label htmlFor='email'>
            Email: 
            <input 
              id="email" 
              type='email' 
              placeholder='example@gmail.com' 
              value={email} 
              onChange={(event) => setEmail(event.target.value)}
            ></input>
          </label>
          <label htmlFor='password'>
            Password:
            <input 
              id="password" 
              type='password' 
              value={password} 
              onChange={(event => setPassword(event.target.value))}
            ></input>
          </label>
          <button type='button' onClick={handleClick}>Login</button>
          { feedbackMessage ? <p>{feedbackMessage}</p> : null }
        </fieldset>
      </form>
    </section>
  );
}

export default App;
