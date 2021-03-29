import React from "react";

interface ListItem {
    item:string,
    itemIndex:string,
}
let props: Array<tasks>;

const ListItem = (props: string) => {
    return (
      <li>
          {props.item}
          <button className="action" onClick={
            () => {props.handleRemove(props.itemIndex)}
          }>
          x
        </button>
      </li>
    );
  };

export default ListItem;