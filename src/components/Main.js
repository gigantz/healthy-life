import React, { Component } from 'react';
import Calculator from './Calculator';

class Main extends Component {

    state = {
        calc: false
    }

    constructor(props) {
        super(props);
        this.showCalc = this.showCalc.bind(this);
    }

    showCalc() {
        const { calc } = this.state;

        this.setState({
            calc: !calc
        })
    }

    render() {
        return (
            <div className="intro-text">
                <h1>Colories Calculator</h1>
                <span>How many colories should I eat per day to lose weight?</span>
                <Calculator show={ this.state.calc }/>
            </div>
        )
    }
}

export default Main;