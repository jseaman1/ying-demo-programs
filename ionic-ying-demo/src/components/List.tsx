import React from "react";
import PropTypes from "prop-types";

//Import Compon
import ListItem from "./ListItem";

const List = props => {
  return (
    <ul>
      {props.list.map(((item: { name: string; isEditing: any; id: any; }, index: React.Key | null | undefined) => (
        <ListItem
          key={index}
          item={item.name}
          isEditing={item.isEditing}
          handleRemove={() => props.removeItemAt(item.id)}
          toggleIsEditingAt={() => props.toggleIsEditingAt(item.id)}
          setName={text => props.setNameAt(text, item.id)}
        />
      ))}
    </ul>
  );
};

export default List;