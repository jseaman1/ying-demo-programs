import React from "react";

import ListItem from "./ListItem";

const List = props => {
  return (
    <ul>
      {props.list.map((item, index) => (
        <ListItem
          key={index}
          item={item.name}
          isEditing={item.isEditing}
          handleRemove={() => props.removeItemAt(item.id)}
          toggleIsEditingAt={() => props.toggleIsEditingAt(item.id)}
          setName={text => props.setNameAt(text, item.id)}
          completeTask={() => props.completeTask(item.id)}
        />
      ))}
    </ul>
  );
};


export default List;
