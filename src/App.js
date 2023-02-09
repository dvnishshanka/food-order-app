import './App.css';
import React from 'react';
import Header from './components/common/header/Header';
import Meals from './components/common/meals/Meals';

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
