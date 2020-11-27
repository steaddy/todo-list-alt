import React, {Component} from 'react';
import './task.css';

export default class Task extends Component {

    render() {
        let {text, done, important, onDelete, onToggleDone, onToggleImportant} = this.props;
        let classNames = "view list-group-item ";
        if (done) classNames += "done ";
        if (important) classNames += "important ";
        return (
            <div className={ classNames }>
                {/*<input className="toggle" type="checkbox"/>*/}
                <label>
                        <span className="description"
                              onClick={ onToggleDone }
                        >{ text }</span>
                    {/*<span className="description">Active task</span>*/}
                    {/*<span className="created">created 5 minutes ago</span>*/}
                </label>
                <button className="icon icon-edit btn btn-outline-success float-right">
                    <i className="fa fa-pencil"/>
                </button>
                <button
                    className="icon icon-delete btn btn-outline-danger float-right"
                    onClick={ onDelete }
                ><i className="fa fa-trash-o"/>
                </button>
                <button className="icon icon-important btn btn-outline-success float-right"
                        onClick={ onToggleImportant }
                >
                    <i className="fa fa-exclamation"/>
                </button>
            </div>
        );
    }
}