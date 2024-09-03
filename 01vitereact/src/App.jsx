import React, { useState } from 'react';

function App() {
  // State to hold the list of items
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

  // Function to update the second item
  function updateItem() {
    // Using the Virtual DOM, we only update the second item
    const newItems = [...items];
    newItems[1] = 'Updated Item 2';
    setItems(newItems);
  }

  return (
    <div>
      <div id="container">
        {items.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <button onClick={updateItem} style={{background:"blue",right:"-20px"}}>Update Item 2</button>
    </div>
  );
}

export default App;
