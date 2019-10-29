import React, { Component } from 'react';

import './App.css';
import ContactForm from './ContactForm';

class App extends Component {
  render() {
    return (
      <div className="App">
          <header className="App-header">
            
            <h1 className="App-title">Welcome to Contact Page</h1>
          </header>
          <div className="Contact"></div>
          <ContactForm  / >
      </div>
    );
  }
}

export default App;
