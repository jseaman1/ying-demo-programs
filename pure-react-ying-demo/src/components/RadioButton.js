import React from "react";


const RadioButton = props => {
    return(
        <input type="radio" onClick={props.completeTask}></input>
    );
};

export default RadioButton;