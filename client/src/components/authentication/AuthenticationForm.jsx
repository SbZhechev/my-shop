import { useState } from 'react';
import Button from '../utility/Button';
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
        <fieldset className='form__fieldset'>
          <legend className='form__legend'>{legend}</legend>
          <label htmlFor='email' className='form__label'>
            Email: 
            <input 
              id="email" 
              type='email' 
              placeholder='example@gmail.com' 
              value={email} 
              onChange={(event) => setEmail(event.target.value)}
              className='form__input'
            ></input>
          </label>
          <label htmlFor='password' className='form__label'>
            Password:
            <input 
              id="password" 
              type='password' 
              value={password} 
              onChange={(event => setPassword(event.target.value))}
              className='form__input'
            ></input>
          </label>
          <div className='form__actions'>
            <Button action={handleClick} active={true}>{actionButtonText}</Button>
            { feedbackMessage.message.length > 0 ?
              <p 
                className={`
                form__actions__feedbackMessage 
                  ${feedbackMessage.isError ? "form__actions__feedbackMessage--error" : ''}
                `}
              >
                {feedbackMessage.message}
              </p>
              :
              null
            }
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default AuthenticationForm;
