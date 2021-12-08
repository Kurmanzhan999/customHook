import useInput from "../hooks/use-input";

const SimpleInput = () => {
 const {
   value: enterdName,
   isValid: enteredNameIsValid,
   hasError: nameInputHasError,
   valueChangeHandler: nameChangeHandler,
   inputBlurHandler: nameInputBlurHandler 
 } = useInput((value) => value.trim() !== "");

 const {
  value: enterdEmail,
  isValid: enteredEmailIsValid,
  hasError: emailInputHasError,
  valueChangeHandler: emailChangeHandler,
  inputBlurHandler: emailInputBlurHandler 
} = useInput((value) => value.includes('@'));


  let formIsValid = false;
  if(enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!enteredNameIsValid) return;
}

const nameInputClasses =  nameInputHasError
? 'form-control error-text'
 : ' form-control ';

 const emailInputClasses =  emailInputHasError
? 'form-control error-text'
 : ' form-control ';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
            type='text'
            id='name'
            onChange={nameChangeHandler}
            onBlur={nameInputBlurHandler}
            value={enterdName}
          />
          {nameInputHasError && <p>Name musnt be empty</p>}
      </div>
      <div className="form-actions">
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>Your Email</label>
        <input 
            type='text'
            id='name'
            onChange={emailChangeHandler}
            onBlur={emailInputBlurHandler}
            value={enterdEmail}
          />
          {emailInputHasError && <p>email must be incluse @</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
