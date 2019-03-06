import React, { Component } from 'react';
import './Header.css';
import { Title } from './Title';
import { Navbar } from './Navbar';

class Header extends Component {
    render() {
        return (
            <div className="Header-bar">
                <Title/>
                <Navbar/>
            </div>
        )
    }
}

export default Header;
