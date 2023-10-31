import React from 'react';
import './MyButton.css'
function MyButton(props) {
  return (
    <button className='my-button' onClick={props.onClick}>{props.label}</button>
  );
}

export default MyButton;