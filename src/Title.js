import React, {Component} from 'react';
import './Title.css'
import logo from './logo.svg'

export class Title extends Component {
    render() {
        return (
            <div className="Title-bar">
                <img src={logo} className="Title-logo" alt="logo" />
                <h1>DataCheck</h1>
            </div>
        );
    }
}
