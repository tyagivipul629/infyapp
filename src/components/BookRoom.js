import { Redirect } from "react-router";
import useInput from "../hooks/use-input";

var startDate;
const userDetails = [];

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");
const isNoOfPersons = (value) => value > 0 && value <= 5;
const isNoOfRooms = (value) => value > 0 && value <= 3;
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

const BookRoom = (props) => {
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(isNotEmpty);

  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput(isNotEmpty);

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  const {
    value: noOfPersonsValue,
    isValid: noOfPersonsIsValid,
    hasError: noOfPersonsHasError,
    valueChangeHandler: noOfPersonsChangeHandler,
    inputBlurHandler: noOfPersonsBlurHandler,
    reset: resetNoOfPersons,
  } = useInput(isNoOfPersons);

  const {
    value: noOfRoomsValue,
    isValid: noOfRoomsIsValid,
    hasError: noOfRoomsHasError,
    valueChangeHandler: noOfRoomsChangeHandler,
    inputBlurHandler: noOfRoomsBlurHandler,
    reset: resetNoOfRooms,
  } = useInput(isNoOfRooms);

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

  const {
    value: roomTypeValue,
    isValid: roomTypeIsValid,
    hasError: roomTypeHasError,
    valueChangeHandler: roomTypeChangeHandler,
    inputBlurHandler: roomTypeBlurHandler,
    reset: resetRoomType,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (
    firstNameIsValid &&
    lastNameIsValid &&
    emailIsValid &&
    noOfPersonsIsValid &&
    noOfRoomsIsValid &&
    startDateIsValid &&
    endDateIsValid &&
    roomTypeIsValid
  ) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log("Submitted!");
    userDetails.push({
      CustomerId: `B-00${userDetails.length}`,
      FirstName: firstNameValue,
      Lastname: lastNameValue,
      EmailId: emailValue,
      HotelName: "Paradise Stay",
      PersonsBooked: noOfPersonsValue,
      RoomsBooked: noOfRoomsValue,
      DateofBooking: startDateValue,
      DateofLeaving: endDateValue,
      RoomType: roomTypeValue,
    });
    console.log(userDetails);

    resetFirstName();
    resetLastName();
    resetEmail();
    resetNoOfPersons();
    resetNoOfRooms();
    resetStartDate();
    resetEndDate();
    resetRoomType();
  };

  const firstNameClasses = firstNameHasError
    ? "form-control invalid"
    : "form-control";

  const lastNameClasses = lastNameHasError
    ? "form-control invalid"
    : "form-control";

  const emailClasses = emailHasError ? "form-control invalid" : "form-control";

  const noOfPersonsClasses = noOfPersonsHasError
    ? "form-control invalid"
    : "form-control";

  const noOfRoomsClasses = noOfRoomsHasError
    ? "form-control invalid"
    : "form-control";

  const startDateClasses = startDateHasError
    ? "form-control invalid"
    : "form-control";

  const endDateClasses = endDateHasError
    ? "form-control invalid"
    : "form-control";

  const roomTypeClasses = roomTypeHasError
    ? "form-control invalid"
    : "form-control";
  if (!props.isLoggedin) return <Redirect to="/login" />;

  return (
    <>
      <h1>Book a Room</h1>
      <form onSubmit={submitHandler}>
        <div className="control-group">
          <div className={firstNameClasses}>
            <label htmlFor="name">First Name</label>
            <input
              type="text"
              id="name"
              value={firstNameValue}
              onChange={firstNameChangeHandler}
              onBlur={firstNameBlurHandler}
            />
            {firstNameHasError && (
              <p className="error-text">Please enter a first name.</p>
            )}
          </div>
          <div className={lastNameClasses}>
            <label htmlFor="name">Last Name</label>
            <input
              type="text"
              id="name"
              value={lastNameValue}
              onChange={lastNameChangeHandler}
              onBlur={lastNameBlurHandler}
            />
            {lastNameHasError && (
              <p className="error-text">Please enter a last name.</p>
            )}
          </div>
        </div>
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
        <div className={noOfPersonsClasses}>
          <label htmlFor="countPersons">No. Of Persons</label>
          <input
            type="number"
            id="countPersons"
            value={noOfPersonsValue}
            onChange={noOfPersonsChangeHandler}
            onBlur={noOfPersonsBlurHandler}
          />
          {noOfPersonsHasError && (
            <p className="error-text">No. of Persons range between 0 and 6.</p>
          )}
        </div>
        <div className={noOfRoomsClasses}>
          <label htmlFor="countRooms">No. Of Rooms</label>
          <input
            type="number"
            id="countRooms"
            value={noOfRoomsValue}
            onChange={noOfRoomsChangeHandler}
            onBlur={noOfRoomsBlurHandler}
          />
          {noOfRoomsHasError && (
            <p className="error-text">No. of Rooms range between 0 and 4.</p>
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
        <div className={roomTypeClasses}>
          <label htmlFor="roomType">Type of Room</label>
          <select
            id="roomType"
            value={roomTypeValue}
            onChange={roomTypeChangeHandler}
            onBlur={roomTypeBlurHandler}
          >
            <option value="" disabled>
              --Select Room Type--
            </option>
            <option value="Luxury">Luxury</option>
            <option value="Boutique">Boutique</option>
            <option value="Very Large">Very Large</option>
            <option value="Large">Large</option>
            <option value="Medium">Medium</option>
            <option value="Small">Small</option>
            <option value="Specialty">Specialty</option>
          </select>
          {roomTypeHasError && (
            <p className="error-text">Please select valid room type.</p>
          )}
        </div>
        <div className="form-actions">
          <button disabled={!formIsValid}>Book</button>
        </div>
      </form>
    </>
  );
};

export default BookRoom;
export { userDetails };
