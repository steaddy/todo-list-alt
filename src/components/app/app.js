import React, { Component } from 'react';
import './app.css';
import TasksList from '../tasks-list';

export default class App extends Component {

    render() {
        return (
            <div className="app">
                <div className="header">
                    <h1>My Tasks to Do</h1>
                    <input type="text" placeholder="Put New Task Here"/>
                    <button className="add btn btn-outline-secondary">Add</button>
                </div>
                <TasksList />
                <div className="footer">
                    <p>2 items done, 3 more to do</p>
                    <input type="text" placeholder="Find Task"/>
                    <button>Find</button>
                    <button>Done</button>
                    <button>Active</button>
                    <button>Finished</button>
                    <button>Delete All</button>
                </div>
            </div>
        );
    }
}