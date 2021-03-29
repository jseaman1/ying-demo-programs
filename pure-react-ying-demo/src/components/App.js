import React, { Component } from "react";
import "../styles/reset.css";
import "../styles/App.css";

import List from "./List";
import InputForm from "./InputForm";

class App extends Component {
  state = {
    list: [],
    pendingItem: ""
  };

  lastItemId = 0;

  newItemId = () => {
    const id = this.lastItemId;
    this.lastItemId += 1;
    return id;
  };

  toggleIsEditingAt = id => {
    console.log("isEditingAt", id);
    this.setState({
      list: this.state.list.map(item => {
        if (id === item.id) {
          return {
            ...item,
            isEditing: !item["isEditing"]
          };
        }
        return item;
      })
    });
  };

  removeItemAt = id => {
    this.setState({ list: this.state.list.filter(item => id !== item.id) });
  };

  handleItemInput = e => this.setState({ pendingItem: e.target.value });

  setNameAt = (name, id) => {
    this.setState({
      list: this.state.list.map(item => {
        if (id === item.id) {
          return {
            ...item,
            name
          };
        }
        return item;
      })
    });
  };

  newItemSubmitHandler = e => {
    e.preventDefault();
    const id = this.newItemId();
    this.setState({
      list: [
        {
          name: this.state.pendingItem,
          isEditing: false,
          id
        },
        ...this.state.list
      ],
      pendingItem: ""
    });
  };

  render() {
    return (
      <div className="wrapper">
        <div className="header">
          <h1> My To Do List</h1>
          <InputForm
          newItemSubmitHandler={this.newItemSubmitHandler}
          handleItemInput={this.handleItemInput}
          pendingItem={this.state.pendingItem}
          />
        </div>
        <List
          list={this.state.list}
          removeItemAt={this.removeItemAt}
          toggleIsEditingAt={this.toggleIsEditingAt}
          setNameAt={this.setNameAt}
        />
      </div>
    );
  }
}

export default App;
