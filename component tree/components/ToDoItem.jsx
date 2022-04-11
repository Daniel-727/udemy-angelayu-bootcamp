import React from 'react';

function ToDoItem(props) {

  const[click, setClick] = React.useState(false); //not actually using this anymore

  const clickedStyle = {
    textDecoration: 'line-through'
  }

  function handleClick(){
    props.deleteItem(props.id);
  }


  return <li style={click ? clickedStyle : {textDecoriation: "none"}} onClick={handleClick}>{props.text}</li>
}


export default ToDoItem;