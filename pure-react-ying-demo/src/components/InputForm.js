import React from "react";

const mainInputStyle = {
  width: "75%",
  marginRight: "25px",
  borderRadius: "4px",
  border: "1px solid rgb(238, 238, 238)",
  marginLeft: "50px",
  align: "center"
};

const InputForm = props => {
  return (
    <form onSubmit={props.newItemSubmitHandler} className="todoInput">
      <input
        className="input"
        type="text"
        onChange={props.handleItemInput}
        value={props.pendingItem}
        placeholder="Add an item"
        style={mainInputStyle}
      />
      <button type="submit" name="submit" value="submit">
        Add To List
      </button>
    </form>
  );
};

export default InputForm;
