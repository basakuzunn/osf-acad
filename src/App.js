import React, { useState, useEffect} from 'react';
import './App.css';
import Home from './components/Home';
import NavbarComponent from './components/NavbarComponent';

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  function addToCart (){
    setCartCount(cartCount+1);
  }

  function deleteFromCart() {
    if (cartCount > 0) {
      setCartCount(cartCount-1);
    }
  }

  function addToWishlist (){
    setWishlistCount(wishlistCount+1);
  }

  return (
    <div className="App">
       <NavbarComponent cartCount = {cartCount} addToCart = {addToCart} deleteFromCart = {deleteFromCart} addToWishlist = {addToWishlist} wishlistCount = {wishlistCount}/>
    </div>
  );
}

export default App;
