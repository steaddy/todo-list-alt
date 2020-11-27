import React, { Component } from 'react';
import './add-task.css';

export default class AddTask extends Component {
    constructor() {
        super();
    }

    render() {
        let { addNewTask } = this.props;
        return (
            <div className="add-task">
                <input type="text" placeholder="Put New Task Here"/>
                <button className="add btn btn-outline-secondary"
                onClick={ addNewTask }
                >Add</button>
            </div>);
    }
}