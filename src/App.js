import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Component/Header'
import Home from './Component/Home'

class App extends Component {
  constructor(props){
    super(props);
    this.onchange = this.onchange.bind(this)
    this.state = {
      link: 'Link 1'
    }
  }
  onAlert(){
    alert('hi')
  }
  onchange(prevProp){
    this.setState({
      link: prevProp
    })
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
            <Header link={this.state.link}></Header>
            <br/>
            <p>Hello! World</p>
            {2 + 3}
            <br/>
            <br/>
            <Home name={'Ali Azam'} details={user} alert={this.onAlert} onchange={this.onchange}>
               this is child element of Home Component
            </Home>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
