import React, { Component } from 'react';
import './app.css';
import TasksList from '../tasks-list';
import TasksFilter from '../tasks-filter/';
import SearchPanel from '../search-panel';

export default class App extends Component {
    constructor() {
        super();
        this.state = {tasks: [
            {text: "Начать приложение ToDo", important: false, done: true, id: 1},
            {text: "Тестировать приложение ToDo", important: true, done: false, id: 2},
            {text: "Доработать приложение ToDo", important: true, done: false, id: 3}
        ]};
        this.deleteId = id => {
            this.setState(({ tasks }) => {
                let idx = tasks.findIndex(el => el.id === id);
                let before = tasks.slice(0, idx);
                let after = tasks.slice(idx + 1);
                return {tasks: [...before, ...after]};
            })
        };
    }
    render() {
        return (
            <div className="app">
                <div className="header">
                    <h1>My Tasks to Do</h1>
                    <input type="text" placeholder="Put New Task Here"/>
                    <button className="add btn btn-outline-secondary">Add</button>
                </div>
                <TasksList tasks={ this.state.tasks }
                onDelete={ this.deleteId }
                />
                <div className="footer">
                    <p>2 items done, 4 more to do</p>
                    <SearchPanel/>
                    <TasksFilter/>
                </div>
            </div>
        );
    }
}