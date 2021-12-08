import useInput from "../hooks/use-input";

const BasicForm = () => {

  const {

      value: enterdName,
      isValid: enteredNameIsValid,
      hasError: nameInputHasError,
      valueChangeHandler: nameChangeHandler,
      inputBlurHandler: nameInputBlurHandler 
  } = useInput((value) => value.trim().length >5);

  const {
      value: enteredLastdName,
      isValid: enteredLastNameIsValid,
      hasError: lastNameInputHasError,
      valueChangeHandler: lastNameChangeHandler,
      inputBlurHandler: lastNameInputBlurHandler 
  } = useInput((value) => value.trim().length > 6 );


  
  const {
      value: enteredEmail,
      isValid: enteredEmailIsValid,
      hasError: emailInputHasError,
      valueChangeHandler: emailChangeHandler,
      inputBlurHandler: emailInputBlurHandler 
  } = useInput((value) => /^[0-3]+$/.test(value.enteredEmail));
 
  let formIsValid = false;
    if (enteredNameIsValid 
        && enteredLastNameIsValid
        && enteredEmailIsValid ) {
    formIsValid = true;
  }
  const submitHandler = (e) => {
    e.preventDefault()
    if(!enteredNameIsValid) return
  }
  const nameInputClasses =  nameInputHasError
    ? 'form-control error-text'
    : ' form-control ';

  const lastNameInputClasses =  nameInputHasError
    ? 'form-control error-text'
    : ' form-control ';

  const emailInputClasses =  emailInputHasError
    ? 'form-control error-text'
    : ' form-control ';

  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClasses}>
        <div className='form-control'>
          <label htmlFor='name'>First Name</label>
          <input 
              type='text'
              id='name' 
              onChange={nameChangeHandler}
              onBlur={nameInputBlurHandler}
              value={enterdName}
           />
           {nameInputHasError && <p>You have entered an invalid email address </p>}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input
              type='text'
              id='name'
              onChange={lastNameChangeHandler}
              onBlur={lastNameInputBlurHandler}
              value={enteredLastdName}
            />
            {lastNameInputHasError && <p>Last name is invalid</p> }
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input 
            type='text' 
            id='name'
            onChange={emailChangeHandler}
            onBlur={emailInputBlurHandler}
            value={enteredEmail}
         />
         {emailInputHasError && <p>Email should include @</p>}
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
