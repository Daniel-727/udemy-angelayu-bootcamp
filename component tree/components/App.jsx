import React, { useState } from "react";
import ToDoItem from './ToDoItem';

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems([...items, inputText]);
    /* setItems(prevItems => {
      return [...prevItems, inputText];
    }); */
    setInputText("");
  }

  function deleteItem(id){ //this function is actually being passed as a prop into the ToDoItem component, and within the ToDoItem component, we are passing in the id of the instance
    console.log(id);
    setItems(items.filter((element,index) => { //go through the items array and return only the elements where the index is not equal to the id
      return index !== id;
    }));
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem key={index} id={index} text={todoItem} deleteItem={deleteItem}/> //passing in the index as the key and id which we pass into the deleteItem function within the ToDoItem component
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
