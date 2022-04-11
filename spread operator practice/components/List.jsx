import React from 'react';


function List(props) {
  return(
    <ul>
      {props.items.map(item => <li key={item.key}>{item.input}</li>)}
    </ul>
  )
    
}


export default List;