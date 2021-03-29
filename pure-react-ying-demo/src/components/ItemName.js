import React from "react";

const taskStyle = {
  width: "75%",
  marginRight: "25px",
  padding: "15px",
  borderRadius: "4px",
  border: "1px solid rgb(238, 238, 238)",
  marginLeft: "50px",
};

const ItemName = props => {
  if (props.isEditing) {
    return (
      <input
        type="text"
        value={props.children}
        onChange={props.handleNameEdits}
        style={taskStyle}
      />
    );
  }
  return <span onClick={props.toggleIsEditingAt}>{props.children}</span>;
};

export default ItemName;
