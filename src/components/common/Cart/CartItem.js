import classes from './CartItem.module.css';

const CartItem = (props) => {
  return (
    <li className={classes['cart-item']}>
      <div>
        <h4 className={classes['name']}>{props.item.name}</h4>
        <div>
          <span className={classes.price}> {props.item.price.toFixed(2)}</span>
          <span className={classes.amount}> {`x ${props.item.amount}`}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onAdd}>+</button>
        <button onClick={props.onRemove}>-</button>
      </div>
    </li>
  );
};

export default CartItem;
