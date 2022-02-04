import { useState } from 'react';

const useInput = (validationLogic) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [enteredValueTouched, setEnteredValueTouched] = useState(false);
  const enteredValueIsValid = validationLogic(enteredValue);
  const valueInputIsInvalid = !enteredValueIsValid && enteredValueTouched;

  const valueInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const valueInputBlurHandler = (event) => {
    setEnteredValueTouched(true);
  };

  const resetValue=()=>{
    setEnteredValue('');
    setEnteredValueTouched(false);
  }

  return {
    enteredValue,enteredValueIsValid, valueInputIsInvalid, resetValue,valueInputChangeHandler, valueInputBlurHandler
  }
}

export default useInput;