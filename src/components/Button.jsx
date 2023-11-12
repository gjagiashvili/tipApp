import React from 'react';

const Button = (props) => {
  // const buttonChangeHandler = (e) => {

  // } 

  return (
    <div className={props.divClassName}>
      <input type='radio' id={props.buttonName} value={props.buttonValue} name='tip' onChange={props.changeHandler}/>
      <label className={props.buttonClassName}>
        {props.buttonName}
      </label>
    </div>
  );
};

export default Button;
