import React, { Component } from 'react';
import './app.css';
import TasksList from '../tasks-list';

export default class App extends Component {
    constructor() {
        super();
        this.state = {tasks: [
            {text: "Начать приложение ToDo", important: false, done: true},
            {text: "Тестировать приложение ToDo", important: true, done: false},
            {text: "Доработать приложение ToDo", important: true, done: false}
        ]};
    }
    render() {
        return (
            <div className="app">
                <div className="header">
                    <h1>My Tasks to Do</h1>
                    <input type="text" placeholder="Put New Task Here"/>
                    <button className="add btn btn-outline-secondary">Add</button>
                </div>
                <TasksList tasks={ this.state.tasks } />
                <div className="footer">
                    <p>2 items done, 3 more to do</p>
                    <input type="text" placeholder="Find Task"/>
                    <button className="btn btn-outline-secondary">Find</button>

                    <div className="bnt-group ">
                        <button className="btn btn-info">Done</button>
                    <button className="btn btn-outline-secondary">Active</button>
                    <button className="btn btn-outline-secondary">Finished</button>
                    <button className="btn btn-outline-secondary">Delete All</button>
                    </div>
                </div>
            </div>
        );
    }
}