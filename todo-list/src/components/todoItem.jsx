import React from 'react';
import { toast } from 'react-toastify';


class TodoItem extends React.Component {
    constructor(props) {
        super(props)

        console.log('constructor hit');
    }
    componentDidMount() {
        toast(`New Todo added: ${this.props.todo}`);
    }
    componentWillUnmount() {
        toast(`New Todo delete ${this.props.todo}`);
    }

    render() {
        return (
            <li className='item'>
                <p> {this.props.todo} <button onClick={this.props.handleDelete}>Delete</button></p>
            </li>
        )
    }
}

export default TodoItem;