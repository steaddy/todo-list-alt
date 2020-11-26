import React, {Component} from 'react';
import Task from '../task'
import './tasks-list.css';

export default class TasksList extends Component {

    render() {
        let tasks = this.props.tasks.map(el => {
            let { id, ...itemProps } = el;
            return  <li id={ id }>
                        <Task { ...itemProps }/>
                    </li>;
        })
        return (
            <ul className="tasks-list list-group">
                {  tasks }
            </ul>
        );
    }
}