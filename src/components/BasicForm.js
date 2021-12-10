import useInput from "../hooks/use-input";

const BasicForm = () => {
const nameReg =/^[a-z\d]{5,12}$/i
const emailReg = 
/^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/;;
  const {

      value: enterdName,
      isValid: enteredNameIsValid,
      hasError: nameInputHasError,
      valueChangeHandler: nameChangeHandler,
      inputBlurHandler: nameInputBlurHandler 
  } = useInput((value) => nameReg.test(value));

  const {
      value: enteredLastdName,
      isValid: enteredLastNameIsValid,
      hasError: lastNameInputHasError,
      valueChangeHandler: lastNameChangeHandler,
      inputBlurHandler: lastNameInputBlurHandler 
  } = useInput((value) => value.trim().length !== 9 );


  
  const {
      value: enteredEmail,
      isValid: enteredEmailIsValid,
      hasError: emailInputHasError,
      valueChangeHandler: emailChangeHandler,
      inputBlurHandler: emailInputBlurHandler 
  } = useInput((value) => emailReg.test(value));
 
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
           {nameInputHasError && <p>Username must be lowercase including numbers and contain 5-12 characters</p>}
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
            {lastNameInputHasError && <p>Last name is invalid,should be no more than 9 letters</p> }
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
         {emailInputHasError && <p>Email must be a valid address, e.g. kurmanzhan@gmail.com</p>}
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
