import React, { Component } from 'react';
import CarouselScreen from './container/CarouselScreen';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="app-container">
          <CarouselScreen />
        </div>
      </div>
    );
  }
}

export default App;
