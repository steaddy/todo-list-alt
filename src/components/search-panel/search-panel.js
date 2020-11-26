import React, { Component } from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {
    render() {
        return (
            <div className="search-panel">
                <input type="text" placeholder="Find Task"/>
                <button className="btn btn-outline-secondary">Find</button>
            </div>
        );
    }
}