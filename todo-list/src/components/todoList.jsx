import React, { Component } from 'react';



class List extends Component {
    constructor() {
        super()

        console.log('constructor hit');


    }

    render() {
        return (
            <ul>
                {this.props.listItems}
            </ul>
        )
    }

}


export default List