import React from "react";

import ItemName from "./ItemName";
import Button from "./Button";
import RadioButton from "./RadioButton";

const ListItem = props => {
  return (
    <li>
      <RadioButton completeTask={props.completeTask}></RadioButton>
      <ItemName
        isEditing={props.isEditing}
        item={props.item}
        toggleIsEditingAt={props.toggleIsEditingAt}
        handleNameEdits={e => props.setName(e.target.value)}
      >
        {props.item}
      </ItemName>
      <Button
        isEditing={props.isEditing}
        toggleIsEditingAt={props.toggleIsEditingAt}
        handleRemove={props.handleRemove}
      />
    </li>
  );
};
export default ListItem;
