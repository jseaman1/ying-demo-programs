import React from "react";

  const InputField = (props: { newItemSubmitHandler: React.FormEventHandler<HTMLFormElement> | undefined; handleItemInput: React.ChangeEventHandler<HTMLInputElement> | undefined; pendingItem: string | number | readonly string[] | undefined; }) => {
    return (
        <form 
        onSubmit={props.newItemSubmitHandler}
        className="todoInput">
        <input
          className="input"
          type="text"
          onChange={props.handleItemInput}
          value={props.pendingItem}
          placeholder="Add an item"
      />
      <button type="submit" name="submit" value="submit">
        add
      </button>
    </form>
  );
};

export default InputField;


// const [input, setInput] = useState('');
// const [tasks, setTasks] = useState([]);
// // functions are usually camel cased in JS
// // and you shouldnt name the parameter input, when theres another variable called input               
// function handleNewTaskInput(newInput: string) {
//     setInput(newInput);
// }
// function handleNewTask() {
//     // you wanna use a immutable array method like .concat which returns a new array
//     // you should always pass new values to state updaters
//     setTasks(tasks.concat(input));
//     // this is going to log the old array before you updated it
//     // since state updates in react dont happen immediately 
//     console.log(tasks); 
// }