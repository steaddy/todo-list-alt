import React, { Component } from 'react';
import './add-task.css';

export default class AddTask extends Component {
    constructor() {
        super();
        this.state = { label: '' };

        this.onLabelChange = (e) => {
            this.setState( { label: e.target.value } );
        }
    }

    render() {
        let { addNewTask } = this.props;
        return (
            <form className="add-task d-flex"
            onSubmit={ (e) => {
                e.preventDefault();
                addNewTask(this.state.label);
                this.state.label = '';
            } }
            >
                <input className="form-control" type="text" placeholder="Put New Task Here"
                onChange = { this.onLabelChange }
                       value={ this.state.label }
                />
                <button className="add btn btn-outline-secondary">Add</button>
            </form>);
    }
}