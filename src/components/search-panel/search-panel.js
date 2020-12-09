import React, { Component } from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {
    constructor() {
        super();
        this.state = {
            term: ''
        }
    }
    render() {
        let { onSearchChange } = this.props;
        return (
            <div className="search-panel d-flex">
                <input type="text" placeholder="Find Task" className="form-control"
                       value={ this.state.term }
                onChange={ e => {
                    let term = e.target.value;
                    this.setState({term})
                    onSearchChange(term);
                } }
                />
            </div>
        );
    }
}