import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem.js";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */


function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };
  
  const removeFromCart = (item) => {
    let hardCopy = [...cart];
    hardCopy = hardCopy.filter((cartItem) => cartItem.id !== item.id);
    setCart(hardCopy);
  };

  const cartItems = cart.map((item) => (
    <div key={item.id}>
      {`${item.name}: $${item.price}`}
      <input type="submit" value="add" onClick={() => addToCart(item)} />
      <input type="submit" value="remove" onClick={() => removeFromCart(item)} />
    </div>
  ));

  return (
    <div className="App">
      <h1>Maya's Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        <div key={item.id}>
          <div className="BakeryItem"><BakeryItem image={item.image} 
          name={item.name} price={item.price} 
          addbutton = {<input type="submit" value="add" onClick={() => addToCart(item)} />}
          removebutton = {<input type="submit" value="remove" onClick={() => removeFromCart(item)} />}
          >
            </BakeryItem>
          </div>

      </div>
         // replace with BakeryItem component
      ))}

      <div>
        <h2>Cart</h2>
        {/* TODO: render a list of items in the cart */}
        {cartItems}
      </div>
    </div>
  );
}

export default App;
