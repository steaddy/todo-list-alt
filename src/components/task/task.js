import React, {Component} from 'react';
import './task.css';

export default class Task extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="view list-group-item">
                {/*<input className="toggle" type="checkbox"/>*/}
                    <label>
                        <span className="description">Completed task</span>
                        <span className="description">Active task</span>
                        <span className="created">created 5 minutes ago</span>
                    </label>
                    <button className="icon icon-edit btn btn-outline-secondary btn-sm float-right">
                        <i className="fa fa-pencil"/>
                    </button>
                    <button className="icon icon-delete btn btn-outline-secondary btn-sm float-right">
                        <i className="fa fa-trash-o" />
                    </button>
                    <button className="icon icon-important btn btn-outline-secondary btn-sm float-right">
                        <i className="fa fa-exclamation"/>
                    </button>
            </div>
        );
    }
}