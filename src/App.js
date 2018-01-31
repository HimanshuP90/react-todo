import React, { Component } from 'react';
import './App.css';
import ColorFullTodo from './ColorFullTodo';
import Dropdowns from './Dropdowns';

class App extends Component {
  constructor(){
    super();
    this.state = {
      todos: [],
      currentTodo: ""
    };
  }

  onInputChnage = e => {
    this.setState({ currentTodo: e.target.value });
  }

  onClick = () => {
    let todosCopy = this.state.todos.slice();
    todosCopy.push(this.state.currentTodo);

    this.setState({ todos: todosCopy, currentTodo: ""});
  }

  deleteTodo = i => {
    let todosCopy = this.state.todos.slice();
    todosCopy.splice(i, 1);

    this.setState({ todos: todosCopy });
  }

  render() {
    {/* let bulletedTodos = this.state.todos.map((e, i) => {
          return (
            <div>
              <SingleToDo todo={e} delete={() => this.deleteTodo(i)} />
            </div>
            );
        });*/}
    return (
      <div>
      {/*  <input placeholder="Enter todo" value={this.state.currentTodo}
        onChange={this.onInputChnage}/>
      <button onClick={this.onClick}>Add!</button>
      <h1><DoubleClick  myProps="hello"/></h1>
      <br />
      {this.state.todos.length === 0 ? "No todos yet!" : <ul>{bulletedTodos}</ul> }
      <br /> */}
      {/*<ColorFullTodo />*/}
      <Dropdowns />
      </div>
    );
  }
}

export default App;
