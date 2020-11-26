import React, { Component } from 'react';
import './tasks-filter.css';

export default class TasksFilter extends Component {
    render() {
        return (
            <div className="bnt-group ">
                <button className="btn btn-info">Done</button>
                <button className="btn btn-outline-secondary">Active</button>
                <button className="btn btn-outline-secondary">Finished</button>
                <button className="btn btn-outline-secondary">Delete All</button>
            </div>
        );
    }
}