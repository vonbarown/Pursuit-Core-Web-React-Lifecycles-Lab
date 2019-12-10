import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import TodoForm from './components/todoForm';
import TodoItem from './components/todoItem';
import TodoList from './components/todoList'

class App extends Component {
  constructor() {
    super()


    this.state = {
      list: [],
      todoItem: ''
    }

    this.handleSubmit = (e) => {
      e.preventDefault();
      const { list,todoItem} = this.state;
      const newItem =  {todoItem};
      this.setState({
        list: [...list, newItem],
      });
      this.notify()
    };
    
    this.notify = () => toast("New Todo added");

    this.handleNewTodo = e => {
      this.setState({
        todoItem: e.target.value
      })
    };

  }


  
  
  render() {
    console.log(this.state);

    const {list} =this.state

    const listItems = list.map(el => {
      return (
        <TodoItem
          key={el.todoItem}
          todo = {el.todoItem}
        />
      );
    });
    
    return (
      <div className="App">
        <button onClick={this.notify}>Notify !</button>
        <ToastContainer />


        <h3>Todo List</h3>
        <TodoForm
          handleSubmit={this.handleSubmit}
          handleNewTodo = {this.handleNewTodo}
        />

        <TodoList
         listItems = {listItems}
        />
        
      </div>
    );
  }
}

export default App;
