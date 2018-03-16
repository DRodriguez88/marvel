import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className='logo'></div>
        <div className='bg bg-light p-2'>
          <h1 className='display-4 font-weight-bold'>Welcome to Marvel Finder!</h1>
          <p className='font-weight-bold'>Search the Marvel Universe.</p>
        </div>
      </div>
    );
  }
}

export default App;
