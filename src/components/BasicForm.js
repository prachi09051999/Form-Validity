import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  // First Name
  const { enteredValue: firstName,enteredValueIsValid: firstNameValid, valueInputIsInvalid: firstNameInvalid, resetValue: resetFirstName,valueInputChangeHandler: firstNameChangeHandler, valueInputBlurHandler: firstNameBlurHandler}= useInput((val)=>val.trim() !== '');

  // Second Name

  const { enteredValue: secondName,enteredValueIsValid: secondNameValid, valueInputIsInvalid: secondNameInvalid, resetValue: resetSecondName,valueInputChangeHandler: secondNameChangeHandler, valueInputBlurHandler: secondNameBlurHandler}= useInput((val)=> val.trim() !== '');

  // Email

  const { enteredValue: emailValue,enteredValueIsValid: emailValid, valueInputIsInvalid: emailInvalid, resetValue: resetEmail,valueInputChangeHandler: emailChangeHandler, valueInputBlurHandler: emailBlurHandler}= useInput((val)=> val.includes('@') );

  // Form Validity

  let formValid = false;
  if(firstNameValid && secondNameValid && emailValid){
    formValid = true;
  }

  // Form Submit Handler 

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if(!formValid) return;
    console.log(firstName);
    console.log(secondName);
    console.log(emailValue);
    resetFirstName();
    resetSecondName();
    resetEmail();
  }

  // Conditional classes

  const firstNameClasses = firstNameInvalid ? 'form-control invalid' : 'form-control';
  const secondNameClasses = secondNameInvalid ? 'form-control invalid' : 'form-control';
  const emailClasses = emailInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit = {formSubmitHandler}>
      <div className='control-group'>
        <div className= {firstNameClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' value = {firstName} onChange = {firstNameChangeHandler} onBlur = {firstNameBlurHandler} />
          {firstNameInvalid && <p>Please enter a valid Name</p>}
        </div>
        <div className={secondNameClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' value = {secondName} onChange = {secondNameChangeHandler} onBlur = {secondNameBlurHandler} />
          {secondNameInvalid && <p>Please enter a valid Name</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' value = {emailValue} onChange = {emailChangeHandler} onBlur = {emailBlurHandler}/>
        {emailInvalid && <p>Please enter a valid E-mail</p>}
      </div>
      <div className='form-actions'>
        <button disabled = {!formValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
