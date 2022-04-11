import React from "react";
import List from "./List";

function App() {
  const [items, setItems] = React.useState([]);//items is an array

  const [item, setItem] = React.useState({});

  const [key, setKey] = React.useState(0);
  
  function handleChange(e) {
    setItem({key: key, input: e.target.value});
  }

  function handleSubmit() {
    setItems([...items, item]);
    setKey(key + 1);
    console.log(key);
  }


  
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" />
        <button onClick={handleSubmit}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <List items={items}  />
      </div>
    </div>
  );
}

export default App;
