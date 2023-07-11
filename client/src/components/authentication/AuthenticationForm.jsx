import { useState } from 'react';
import './authenticationForm.css';

function AuthenticationForm({ legend, action, actionButtonText }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [feedbackMessage, setFeedbackMessage] = useState({isError: false, message: ''});

  const handleClick = async () => {
    try {
      let result = (await action({ email, password })).data;
      setFeedbackMessage({isError: false, message: result});
      clearState();
    } catch (err) {
      setFeedbackMessage({isError: true, message: err.response.data});
    }
  };

  const clearState = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <section>
      <form className='form'>
        <fieldset className='fieldset'>
          <legend>{legend}</legend>
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
          <button type='button' onClick={handleClick} className='active'>{actionButtonText}</button>
        </fieldset>
      </form>
      { feedbackMessage.message.length > 0 ?
        <p className={`feedbackMessage ${feedbackMessage.isError ? "error" : ''}`}>
          {feedbackMessage.message}
        </p>
        :
        null
      }
    </section>
  );
};

export default AuthenticationForm;
