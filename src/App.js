import React, { Component } from 'react';

import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';

class App extends Component {
  state = {
    activePage: 'main'
  }

  changePage (page) {
    this.setState( { activePage: page } );
  }

  render() {
    const { activePage } = this.state;
    return (
      <div className="App">
        <Header nav={ this.changePage.bind(this) } />
        <div className="container">
          { activePage === 'main' && <Main /> }
          { activePage === 'about' && <About /> }
        </div>
      </div>
    );
  }
}

export default App;
