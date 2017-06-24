import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header>
                <a href="#" className="header__logo">Healthy Life</a>
                <nav className="header__nav">
                    <a href="#" onClick={ () => { this.props.nav('main') }}>Login</a>
                    <a href="#">Sign up</a>
                    <a href="#" onClick={ () => { this.props.nav('about') }}>About</a>
                </nav>
            </header>
        );
    }
}

export default Header;