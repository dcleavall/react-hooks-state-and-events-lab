import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";


function App() {

  const [isDarkMode, setIsDarkMode] = useState(false)
  const [items, setItems] = useState(itemData) 


  const toggleState = () => {
    setIsDarkMode(!isDarkMode);
  }


  const appClass = isDarkMode ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleState}> {isDarkMode ? "Dark" : "Light"} Mode</button>
      </header>
      <ShoppingList items={items} setItems={setItems}/>
      <itemData />
    </div>
  );
}


export default App;
