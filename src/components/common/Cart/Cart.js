import classes from './Cart.module.css';
import Modal from './../Modal';

const DUMMY_CART = [
  {
    id: 'm4',
    name: 'Green Bowl',
    amount: 2,
    price: 18.99,
  },
  {
    id: 'm3',
    name: 'Green Bowl',
    amount: 4,
    price: 18.99,
  },
];

const Cart = (props) => {
  const cartItems = (
    <ul>
      {DUMMY_CART.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onBackdropClick={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>$ 90.00</span>
      </div>
      <div className={classes.action}>
        <button className={classes['btn-close']} onClick={props.onClose}>
          Close
        </button>
        <button className={classes['btn-order']}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
