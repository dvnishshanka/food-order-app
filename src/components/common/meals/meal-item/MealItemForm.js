import Input from '../../Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
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
    </form>
  );
};

export default MealItemForm;
