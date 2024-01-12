import Button from '../utility/Button';
import { Form, useActionData } from 'react-router-dom';
import './authenticationForm.css';

function AuthenticationForm({ legend, actionButtonText }) {
  const feedbackMessage = useActionData();

  return (
    <Form className='form' method='post'>
      <fieldset className='form__fieldset'>
        <legend className='form__legend'>{legend}</legend>
        <label htmlFor='email' className='form__label'>
          Email: 
          <input 
            id='email' 
            type='email'
            name='email'
            placeholder='example@gmail.com' 
            className='form__input'
          ></input>
        </label>
        <label htmlFor='password' className='form__label'>
          Password:
          <input 
            id='password'
            type='password'
            name='password' 
            className='form__input'
          ></input>
        </label>
        <div className='form__actions'>
          <Button active={true} buttonType='submit'>{actionButtonText}</Button>
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
  );
};

export default AuthenticationForm;
