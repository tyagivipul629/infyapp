import { useState } from "react";
import { Redirect } from "react-router";
import useInput from "../hooks/use-input";
import { userDetails } from "./BookRoom";
var startDate;

const isEmail = (value) => value.includes("@");
const isStartDate = (value) => {
  startDate = new Date(value);
  startDate.setHours(0, 0, 0, 0);
  var today = new Date();
  today.setHours(0, 0, 0, 0);
  if (startDate > today) {
    return true;
  } else {
    return false;
  }
};
const isEndDate = (value) => {
  var endDate = new Date(value);
  endDate.setHours(0, 0, 0, 0);
  if (endDate >= startDate) {
    return true;
  } else {
    return false;
  }
};

const Reschedule = (props) => {
  const [isEmailIdExist, setIsEmailIdExist] = useState(false);
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  const {
    value: startDateValue,
    isValid: startDateIsValid,
    hasError: startDateHasError,
    valueChangeHandler: startDateChangeHandler,
    inputBlurHandler: startDateBlurHandler,
    reset: resetStartDate,
  } = useInput(isStartDate);

  const {
    value: endDateValue,
    isValid: endDateIsValid,
    hasError: endDateHasError,
    valueChangeHandler: endDateChangeHandler,
    inputBlurHandler: endDateBlurHandler,
    reset: resetEndDate,
  } = useInput(isEndDate);

  let formIsValid = false;

  if (emailIsValid && startDateIsValid && endDateIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    var counter = 0;

    userDetails.forEach((cur) => {
      if (cur.EmailId === emailValue) {
        cur.DateofBooking = startDateValue;
        cur.DateofLeaving = endDateValue;
        counter++;
      }
    });

    if (counter === 0 || !formIsValid) {
      setIsEmailIdExist(true);
      return;
    }

    setIsEmailIdExist(false);
    console.log("Submitted!");
    console.log(userDetails);

    resetEmail();
    resetStartDate();
    resetEndDate();
  };

  const emailClasses = emailHasError ? "form-control invalid" : "form-control";

  const startDateClasses = startDateHasError
    ? "form-control invalid"
    : "form-control";

  const endDateClasses = endDateHasError
    ? "form-control invalid"
    : "form-control";
  if (!props.isLoggedin) return <Redirect to="/login" />;

  return (
    <>
      <h1>Book a Room</h1>
      <form onSubmit={submitHandler}>
        <div className={emailClasses}>
          <label htmlFor="name">E-Mail Address</label>
          <input
            type="text"
            id="name"
            value={emailValue}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
          {emailHasError && (
            <p className="error-text">Please enter a valid email address.</p>
          )}
        </div>
        <div className={startDateClasses}>
          <label htmlFor="startDate">Start Date</label>
          <input
            type="date"
            id="startDate"
            value={startDateValue}
            onChange={startDateChangeHandler}
            onBlur={startDateBlurHandler}
          />
          {startDateHasError && (
            <p className="error-text">Start date must be greater than today.</p>
          )}
        </div>
        <div className={endDateClasses}>
          <label htmlFor="endDate">End Date</label>
          <input
            type="date"
            id="endDate"
            value={endDateValue}
            onChange={endDateChangeHandler}
            onBlur={endDateBlurHandler}
          />
          {endDateHasError && (
            <p className="error-text">
              End date must be greater than or equal to Start date.
            </p>
          )}
        </div>
        {isEmailIdExist && (
          <p className="error-text">Email Id doesn't exist.</p>
        )}
        <div className="form-actions">
          <button disabled={!formIsValid}>Reschedule</button>
        </div>
      </form>
    </>
  );
};

export default Reschedule;
