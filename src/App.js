import React, { Component } from 'react';
// import Button from 'antd/lib/button';
//import { Button } from 'antd';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
   return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Click below to visit my website.
          </p>
          <a
            className="App-link"
            href="https://bijayapandey.com.np"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bijaya Pandey
          </a>
        </header>
      </div>
    );
    // return (
    //   <div className="App">
    //     <Button type="primary">Button</Button>
    //   </div>
    // );
  }
}
export default App;
