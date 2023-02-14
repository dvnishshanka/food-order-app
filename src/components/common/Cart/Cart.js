import classes from './Cart.module.css';
import Modal from './../Modal';
import CartContext from '../../../store/cart-context';
import { useContext } from 'react';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartContext = useContext(CartContext);
  const totalAmount = `$ ${cartContext.totalAmount.toFixed(2)}`;
  const hasItemsInCart = cartContext.items.length > 0;

  const onAddItemHandler = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };

  const onRemoveHandler = (id) => {
    cartContext.removeItem(id);
  };

  const cartItems = (
    <ul className={classes.cartItems}>
      {cartContext.items.map((item) => (
        <CartItem
          item={item}
          key={item.id}
          onAdd={onAddItemHandler.bind(null, item)}
          onRemove={onRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onBackdropClick={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.action}>
        <button className={classes['btn-close']} onClick={props.onClose}>
          Close
        </button>
        {hasItemsInCart && (
          <button className={classes['btn-order']}>Order</button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
