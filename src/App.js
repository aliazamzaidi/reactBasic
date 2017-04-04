import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Component/Header'
import Home from './Component/Home'

class App extends Component {
  onAlert(){
    alert('hi')
  }
  render() {
    var user = {
      name:'Ali',
      age: 24,
      height: 5.2,
      hobbies: ['gaming','computer','playing','tv']
    }
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <Header></Header>
            <br/>
            <p>Hello! World</p>
            {2 + 3}
            <br/>
            <br/>
            <Home name={'Ali Azam'} details={user} alert={this.onAlert}>
               this is child element of Home Component
            </Home>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
