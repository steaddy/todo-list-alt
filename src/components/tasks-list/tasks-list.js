import React, {Component} from 'react';
import Task from '../task'
import './tasks-list.css';

export default class TasksList extends Component {

    render() {
        let { tasks, onDelete, onToggleImportant, onToggleDone } = this.props;
        let tasksArr = tasks.map(el => {
            let { id, ...itemProps } = el;
            return  <li key={ id }>
                        <Task { ...itemProps }
                              onDelete = { () => onDelete(id) }
                              onToggleImportant={ () => onToggleImportant(id) }
                              onToggleDone={ () => onToggleDone(id) }
                        />
                    </li>;
        })
        return (
            <ul className="tasks-list list-group">
                {  tasksArr }
            </ul>
        );
    }
}