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
            ],
            term: '',
            filter: 'done'
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
                return {tasks: [...tasks, this.makeNewTask(text)]};
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

        this.search = (tasks, term) => {
            if(term.length === 0) return tasks;
            return tasks.filter(el => el.text.toLowerCase().indexOf(term.toLowerCase()) > -1);
        }

        this.onSearchChange = (term) => {
            this.setState({ term });
        }

        this.onFilterChange = (filter) => {
            this.setState({ filter });
        }

        this.filter = (tasks, filter) => {
            switch(filter) {
                case 'all':
                    return tasks;
                case 'active':
                    return tasks.filter(el => el.done === false);
                case 'done':
                    return tasks.filter(el => el.done === true);
                default:
                    return tasks;
            }
        }
    }





    render() {
        let { tasks, term, filter } = this.state;
        let visibleTasks = this.filter(this.search(tasks, term), filter);
        let doneTasks = tasks.filter(el => el.done).length;
        let tasksToDo = tasks.length - doneTasks;
        return (
            <div className="app">
                <div className="header">
                    <h1>My Tasks to Do</h1>
                    <AddTask addNewTask = { this.addNewTask }/>
                </div>
                <TasksList tasks={ visibleTasks }
                           onDelete={ this.deleteId }
                           onToggleDone={ this.onToggleDone }
                           onToggleImportant={ this.onToggleImportant }
                />
                <div className="footer">
                    <TasksCount
                        doneTasks={ doneTasks }
                        tasksToDo={ tasksToDo }
                    />
                    <SearchPanel onSearchChange={ this.onSearchChange }/>
                    <TasksFilter
                        filter={ filter }
                        onFilterChange={this.onFilterChange}
                    />
                </div>
            </div>
        );
    }
}