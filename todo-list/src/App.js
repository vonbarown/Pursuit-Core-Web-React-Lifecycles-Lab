import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import TodoForm from './components/todoForm';

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
      const newItem =  todoItem;
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


    // this.delete = (e) => {
    //   e.preventDefault();
    //   let newArr = [];
    //   for (let i of this.state.allToDos) {
    //     newArr.push(i);
    //   }

    //   for (let i = 0; i < newArr.length; i++) {
    //     if (newArr[i].toDo === event.target.id) {
    //       console.log("hi")
    //       newArr.splice(i, 1)
    //     }
    //   }

    //   this.setState({
    //     allToDos: newArr
    //   })

    // }
  }


  
  
  render() {
    console.log(this.state);
    
    return (
      <div className="App">
        <button onClick={this.notify}>Notify !</button>
        <ToastContainer />


        <h3>Todo List</h3>
        <TodoForm
          handleSubmit={this.handleSubmit}
          handleNewTodo = {this.handleNewTodo}
        />
      </div>
    );
  }
}

export default App;
