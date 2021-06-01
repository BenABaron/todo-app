import React from 'react';

function TodoCard(props) {

  const {title, clickToRemove, index} = props
  return (
    <li>{title}
      <button onClick={()=>{clickToRemove(index)}}>Delete</button>
    </li>   
  )
}

export default TodoCard;