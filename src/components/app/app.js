import React, { Component } from 'react';
import './app.css';
import TasksList from '../tasks-list';
import TasksFilter from '../tasks-filter/';
import SearchPanel from '../search-panel';
import AddTask from '../add-task';
import TasksCount from '../tasks-counter';

export default class App extends Component {
    constructor() {
        super();
        this.taskCount = 100;

        this.makeNewTask = (text) => {
                return {
                    text: text,
                    important: false,
                    done: false,
                    id: this.taskCount++
                };
        };

        this.state = {
            tasks: [
                this.makeNewTask("Начать приложение ToDo"),
                this.makeNewTask("Тестировать приложение ToDo"),
                this.makeNewTask("Доработать приложение ToDo")
            ]
        };

        this.deleteId = id => {
            this.setState(({ tasks }) => {
                let idx = tasks.findIndex(el => el.id === id);
                let before = tasks.slice(0, idx);
                let after = tasks.slice(idx + 1);
                return {tasks: [...before, ...after]};
            })
        };


        this.addNewTask = (text) => {
            this.setState(({ tasks }) => {
                return {tasks: [...tasks, this.makeNewTask("Empty Task Here")]};
            })
        };

        this.onToggleDone = (id) => {
            this.setState(({ tasks }) => {
                let idx = tasks.findIndex(el => el.id === id);
                let before = tasks.slice(0, idx);
                let updatedEl = {...tasks[idx], done: !tasks[idx].done};
                let after = tasks.slice(idx + 1);
                return {tasks: [...before, updatedEl, ...after]};
            })
        };

        this.onToggleImportant = (id) => {
            this.setState(({ tasks }) => {
                let idx = tasks.findIndex(el => el.id === id);
                let before = tasks.slice(0, idx);
                let updatedEl = {...tasks[idx], important: !tasks[idx].important};
                let after = tasks.slice(idx + 1);
                return {tasks: [...before, updatedEl, ...after]};
            })
        };
    }





    render() {
        let doneTasks = this.state.tasks.filter(el => el.done).length;
        let tasksToDo = this.state.tasks.length - doneTasks;
        return (
            <div className="app">
                <div className="header">
                    <h1>My Tasks to Do</h1>
                    <AddTask addNewTask = { this.addNewTask }/>
                </div>
                <TasksList tasks={ this.state.tasks }
                           onDelete={ this.deleteId }
                           onToggleDone={ this.onToggleDone }
                           onToggleImportant={ this.onToggleImportant }
                />
                <div className="footer">
                    <TasksCount
                        doneTasks={ doneTasks }
                        tasksToDo={ tasksToDo }
                    />
                    <SearchPanel/>
                    <TasksFilter/>
                </div>
            </div>
        );
    }
}