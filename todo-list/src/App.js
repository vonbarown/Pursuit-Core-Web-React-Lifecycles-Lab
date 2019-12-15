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
      todoItem: '',
      counter: 0
    }

    this.handleSubmit = (e) => {
      e.preventDefault();
      let { list, todoItem, counter } = this.state;
      const newItem = { todoItem, counter };
      this.setState({
        list: [...list, newItem],
        counter: counter + 1
      });
    };


    this.handleNewTodo = e => {
      this.setState({
        todoItem: e.target.value
      })
    };

    this.handleDelete = e => {
      let arr = this.state.list

      this.setState({
        list: arr.filter(el => el.counter !== Number(e.target.value))
      })
    }
  }


  render() {
    console.log(this.state);

    const { list } = this.state

    const listItems = list.map(el => {
      return (
        <TodoItem
          key={el.counter}
          counter={el.counter}
          todo={el.todoItem}
          handleDelete={this.handleDelete}
        />
      );
    });

    return (
      <div className="App">
        <ToastContainer />


        <h3>Todo List</h3>
        <TodoForm
          handleSubmit={this.handleSubmit}
          handleNewTodo={this.handleNewTodo}
        />

        <TodoList
          listItems={listItems}
        />

      </div>
    );
  }
}

export default App;
