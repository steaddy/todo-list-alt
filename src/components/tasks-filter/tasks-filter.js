import React, { Component } from 'react';
import './tasks-filter.css';

export default class TasksFilter extends Component {
    constructor() {
        super();
        this.buttons = [
            {name: 'all', label: 'All'},
            {name: 'active', label: 'Active'},
            {name: 'done', label: 'Done'},
        ];
    }
    render() {
        let { filter, onFilterChange } = this.props;
        const buttons = this.buttons.map(( { label, name }) => {
            const clazz = (filter === name) ? 'btn-info' : 'btn-outline-secondary';
            return <button className={`btn ${clazz}`} key={ name }
                           onClick={()=> onFilterChange(name)}
            >{ label }</button>
        });
        return (
            <div className="btn-group tasks-filter">
                { buttons }
            </div>
        );
    }
}