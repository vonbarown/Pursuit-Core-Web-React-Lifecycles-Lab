import React from 'react'

class TodoItem extends React.Component {
    constructor(props) {
        super(props)

        console.log('constructor hit');

    }

    render() {
        return (
            <li>
                <p> {this.props.todo} <button onClick={props.delete}>Delete</button></p>
            </li>
        )
    }
}

export default TodoItem;