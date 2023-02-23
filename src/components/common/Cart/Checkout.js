import classes from './Checkout.module.css';
import { useRef, useState } from 'react';

const Checkout = (props) => {
  const [formInputValid, setForInputValid] = useState({
    name: true,
    street: true,
    city: true,
    postal: true,
  });
  const nameRef = useRef();
  const streetRef = useRef();
  const postalRef = useRef();
  const cityRef = useRef();

  const checkInputEmpty = (value) => value.trim() === '';
  const checkIfFiveChar = (value) => value.trim().length === 5;

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameRef.current.value;
    const enteredStreet = streetRef.current.value;
    const enteredPostal = postalRef.current.value;
    const enteredCity = cityRef.current.value;

    const enteredNameValid = !checkInputEmpty(enteredName);
    const enteredStreetValid = !checkInputEmpty(enteredStreet);
    const enteredPostalValid = checkIfFiveChar(enteredPostal);
    const enteredCityValid = !checkInputEmpty(enteredCity);

    setForInputValid({
      name: enteredNameValid,
      street: enteredStreetValid,
      city: enteredCityValid,
      postal: enteredPostalValid,
    });

    const formIsValid =
      enteredNameValid &&
      enteredStreetValid &&
      enteredPostalValid &&
      enteredCityValid;

    if (!formIsValid) return;

    const contactDetails = {
      name: enteredName,
      street: enteredStreet,
      postal: enteredPostal,
      city: enteredCity,
    };

    props.onSubmit(contactDetails);
    nameRef.current.value = '';
    streetRef.current.value = '';
    postalRef.current.value = '';
    cityRef.current.value = '';
  };

  return (
    <form onSubmit={confirmHandler}>
      <div
        className={`${classes.control} ${
          formInputValid.name ? '' : classes.invalid
        }`}
      >
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameRef} />
        {!formInputValid.name && (
          <p className={classes.errorMsg}>Please enter a valid name!</p>
        )}
      </div>
      <div
        className={`${classes.control} ${
          formInputValid.street ? '' : classes.invalid
        }`}
      >
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetRef} />
        {!formInputValid.street && (
          <p className={classes.errorMsg}>Please enter a valid street!</p>
        )}
      </div>
      <div
        className={`${classes.control} ${
          formInputValid.postal ? '' : classes.invalid
        }`}
      >
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalRef} />
        {!formInputValid.postal && (
          <p className={classes.errorMsg}>
            Please enter a valid postal code (5 characters long)!
          </p>
        )}
      </div>
      <div
        className={`${classes.control} ${
          formInputValid.city ? '' : classes.invalid
        }`}
      >
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityRef} />
        {!formInputValid.city && (
          <p className={classes.errorMsg}>Please enter a valid city!</p>
        )}
      </div>
      <div className={classes.actions}>
        <button
          type="button"
          onClick={props.onCancel}
          className={classes['btn-cancel']}
        >
          Cancel
        </button>
        <button className={classes['btn-confirm']}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
