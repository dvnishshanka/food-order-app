import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css';
import { useContext } from 'react';
import CartContext from './../../../../store/cart-context';

const MealItem = (props) => {
  const cartContext = useContext(CartContext);

  const onAddAmountHandler = (amount) => {
    cartContext.addItem({
      amount: amount,
      id: props.id,
      price: props.price,
      name: props.name,
    });
  };

  return (
    <li className={classes['meal-item']}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{`$ ${props.price.toFixed(2)}`}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddAmount={onAddAmountHandler} />
      </div>
    </li>
  );
};

export default MealItem;
