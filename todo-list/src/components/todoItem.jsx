import React from 'react';
import { toast } from 'react-toastify';


class TodoItem extends React.Component {
    constructor(props) {
        super(props)

        console.log('constructor hit');
    }
    componentDidMount() {
        toast.success(`New Todo added: ${this.props.todo}`);
    }
    componentWillUnmount() {
        toast.error(`New Todo delete ${this.props.todo}`);
    }

    render() {
        return (
            <li className='item' >
                <p> {this.props.todo} <button value={this.props.counter} onClick={this.props.handleDelete}>-</button></p>
            </li>
        )
    }
}

export default TodoItem;