import Input from '../../Input';
import classes from './MealItemForm.module.css';
import { useRef, useState } from 'react';

const MealItemForm = (props) => {
  const amountInputRef = useRef();

  const [formIsValid, setFormIsValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();
    const amountInNumber = +amountInputRef.current.value.trim();

    if (amountInNumber > 0 && amountInNumber <= 5) {
      setFormIsValid(true);
      props.onAddAmount(amountInNumber);
    } else {
      setFormIsValid(false);
    }
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        ref={amountInputRef}
        input={{
          id: 'amount' + props.id,
          min: '1',
          type: 'number',
          step: '1',
          max: '5',
          defaultValue: '1',
        }}
      />
      <button className={classes['add-button']} type="submit">
        + Add
      </button>
      {!formIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
