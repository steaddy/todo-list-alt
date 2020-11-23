import React, { Component } from 'react';
import Task from '../task'
import './tasks-list.css';

export default class TasksList extends Component {

    render() {
        return (
            <ul className="tasks-list list-group">
                <li><Task /></li>
                <li><Task /></li>
                <li><Task /></li>
            </ul>
        );
    }
}