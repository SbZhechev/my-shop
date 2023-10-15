import { useState } from 'react';
import Button from '../utility/Button';
import { Form, useActionData } from 'react-router-dom';
import './authenticationForm.css';

function AuthenticationForm({ legend, actionButtonText, actionButtonType }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const feedbackMessage = useActionData();

  return (
    <section>
      <Form className='form' method='post' action="/signIn">
        <fieldset className='form__fieldset'>
          <legend className='form__legend'>{legend}</legend>
          <label htmlFor='email' className='form__label'>
            Email: 
            <input 
              id='email' 
              type='email'
              name='email'
              placeholder='example@gmail.com' 
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className='form__input'
            ></input>
          </label>
          <label htmlFor='password' className='form__label'>
            Password:
            <input 
              id='password'
              type='password'
              name='password' 
              value={password} 
              onChange={(event => setPassword(event.target.value))}
              className='form__input'
            ></input>
          </label>
          <div className='form__actions'>
            <Button active={true} type='submit' actionType={actionButtonType}>{actionButtonText}</Button>
            { feedbackMessage ?
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
      </Form>
    </section>
  );
};

export default AuthenticationForm;
