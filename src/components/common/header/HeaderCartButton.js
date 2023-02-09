import classes from './HeaderCartButton.module.css';
import CartIcon from './CartIcon';

const HeaderCartButton = (props) => {
  return (
    <button className={classes.headerCartButton}>
      <span className={classes.cartImage}>
        <CartIcon />
      </span>
      <span> Your Cart </span>
      <span className={classes['badge']}>5</span>
    </button>
  );
};

export default HeaderCartButton;
