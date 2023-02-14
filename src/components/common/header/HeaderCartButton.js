import classes from './HeaderCartButton.module.css';
import CartIcon from './CartIcon';
import { useContext, useEffect, useState } from 'react';
import CartContext from './../../../store/cart-context';

const HeaderCartButton = (props) => {
  const [btnHighlighted, setBtnHighlighted] = useState(false);

  const cartCtx = useContext(CartContext);
  const noOfItems = cartCtx.items.reduce((accumulator, item) => {
    return accumulator + item.amount;
  }, 0);

  useEffect(() => {
    if (noOfItems === 0) {
      return;
    }

    setBtnHighlighted(true);
    const timer = setTimeout(() => {
      setBtnHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [noOfItems]);

  const btnClasses = `${classes.headerCartButton} ${
    btnHighlighted ? classes.bump : ''
  }`;

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.cartImage}>
        <CartIcon />
      </span>
      <span> Your Cart </span>
      <span className={classes['badge']}>{noOfItems}</span>
    </button>
  );
};

export default HeaderCartButton;
