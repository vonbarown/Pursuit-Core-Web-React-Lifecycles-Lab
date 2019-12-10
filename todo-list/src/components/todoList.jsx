import React, { Component } from 'react'
import TodoItem from './todoItem'
import TodoForm from './todoForm'

class List extends Component {
    constructor() {
        super()

        console.log('constructor hit');


    }

    render() {
        return (
            <ul>
                <TodoItem />
            </ul>
        )
    }

}


export default List