import React from 'react';

const tipsInput = (props) => {
  return (
    <div className={props.divClassName}>
      <input className={props.inputClassName} onChange={props.changeHandler} type='number' placeholder={props.inputValue}/>
    </div>
  )
}

export default tipsInput;
