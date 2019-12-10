import React from 'react'

const TodoForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <input type="text" onChange={props.handleNewTodo} />
        </form>
    )

}

export default TodoForm;