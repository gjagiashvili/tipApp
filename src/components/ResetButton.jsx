import React from 'react';

const ResetButton = (props) => {
  return (
    <div className={props.divClassName}>
      <button className={props.buttonClassName} id={props.buttonName}  onClick={props.onClick}  disabled={props.btnDisabled}>
        {props.buttonName}
      </button>
    </div>
  )
}
export default ResetButton;
