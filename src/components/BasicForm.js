import useInput from "../hooks/use-input";

const BasicForm = () => {
  const {
    value: enterdName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameInputBlurHandler 
  } = useInput((value) => value.trim().length > 5 );
 
  let formIsValid = false;
  if (enteredNameIsValid) {
    formIsValid = true
  }
  const submitHandler = (e) => {
    e.preventDefault()
    if(!enteredNameIsValid) return
  }
  const nameInputClasses =  nameInputHasError
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
           {nameInputHasError && <p>error</p>}
        </div>
        <div className='form-control'>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' />
        </div>
      </div>
      <div className='form-control'>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' />
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
