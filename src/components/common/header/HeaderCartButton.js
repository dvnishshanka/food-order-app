import classes from './HeaderCartButton.module.css';
import CartIcon from './CartIcon';
import { useContext } from 'react';
import CartContext from './../../../store/cart-context';

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const noOfItems = cartCtx.items.reduce((accumulator, item) => {
    return accumulator + item.amount;
  }, 0);

  return (
    <button className={classes.headerCartButton} onClick={props.onClick}>
      <span className={classes.cartImage}>
        <CartIcon />
      </span>
      <span> Your Cart </span>
      <span className={classes['badge']}>{noOfItems}</span>
    </button>
  );
};

export default HeaderCartButton;
