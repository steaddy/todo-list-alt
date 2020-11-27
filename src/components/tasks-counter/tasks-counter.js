import React, { Component } from 'react';
import './tasks-counter.css';

export default class TasksCounter extends Component {

    render() {
        let { tasksToDo,doneTasks } = this.props;
        return (
            <p className="tasks-counter"><b>{ doneTasks }</b> items done, <b>{ tasksToDo }</b> more to do</p>
        );
    }
}