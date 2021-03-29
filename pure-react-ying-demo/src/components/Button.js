import React from "react";


const Button = props => {
  if (props.isEditing) {
    return (
      <button className="action" onClick={props.toggleIsEditingAt}>
        save
      </button>
    );
  }
  return (
    <button className="action" onClick={props.handleRemove}>
      x
    </button>
  );
};

export default Button;
