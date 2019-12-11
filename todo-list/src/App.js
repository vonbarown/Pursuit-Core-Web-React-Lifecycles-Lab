import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
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
      const { list, todoItem } = this.state;
      const newItem = { todoItem };
      this.setState({
        list: [...list, newItem],
      });
    };
  

    this.handleNewTodo = e => {
      this.setState({
        todoItem: e.target.value
      })
    };

    this.handleDelete = e => {
      let arr = [];
      for (let i of this.state.list) {
      
        arr.push(i);
      }

      for (let i = 0; i < arr.length; i++) {
          arr.splice(i, 1)
      }
      this.setState({
        list: arr
      })
    }
  }

  
  render() {
    console.log(this.state);

    const {list} =this.state

    const listItems = list.map(el => {
      return (
        <TodoItem
          key={el.todoItem}
          todo={el.todoItem}
          handleDelete ={this.handleDelete}
        />
      );
    });
    
    return (
      <div className="App">
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
