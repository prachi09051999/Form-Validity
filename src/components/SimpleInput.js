// import { use } from 'react';
import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
  const {enteredValue: enteredName, enteredValueIsValid: nameIsValid,valueInputIsInvalid: nameInputIsInvalid,resetValue: resetName,valueInputChangeHandler: nameInputChangeHandler, valueInputBlurHandler: nameInputBlurHandler} =useInput((val)=>{return val.trim() !== ''});

  const {enteredValue: enteredEmail, enteredValueIsValid: emailIsValid,valueInputIsInvalid: emailInputIsInvalid,resetValue: resetEmail,valueInputChangeHandler: emailInputChangeHandler, valueInputBlurHandler: emailInputBlurHandler} =useInput((val)=>{return val.includes('@');});

  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  // const enteredEmailIsValid = enteredEmail.includes('@');
  // const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;
  let formIsValid = false;

  if (nameIsValid && emailIsValid) {
    formIsValid = true;
  }

  // const emailInputChangeHandler = (event) => {
  //   setEnteredEmail(event.target.value);
  // };

  // const emailInputBlurHandler = (event) => {
  //   setEnteredEmailTouched(true);
  // };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (nameInputIsInvalid || emailInputIsInvalid) {
      return;
    }

    console.log(enteredName);
    console.log(enteredEmail);
    // nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
    resetName();
    resetEmail();
  };

  const nameInputClasses = nameInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';
  
    const emailInputClasses = emailInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className='error-text'>Name must not be empty.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>Your E-mail</label>
        <input
          type='email'
          id='email'
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailInputIsInvalid && (
          <p className='error-text'>Please Enter a valid E-mail.</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
