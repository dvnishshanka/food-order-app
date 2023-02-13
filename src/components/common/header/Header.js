import React from 'react';
import classes from './Header.module.css';
import mealImage from './../../../assets/meal-image.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Food Fiesta</h1>
        <HeaderCartButton onClick={props.onShowCartHandler} />
      </header>
      <div className={classes['meal-image']}>
        <img src={mealImage} alt="A meal meal dish in a plate"></img>
      </div>
    </React.Fragment>
  );
};

export default Header;
