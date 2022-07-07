import Header from './src/Componentes/Header'
import './App.css';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <>
      <BrowserRouter>
        <Route path="/" exact component={Header}/>
      </BrowserRouter>
      </>
    );
  }
}

export default App;
