import React, { Component } from 'react'
import './App.css'

import { connect } from 'react-redux';
import * as actionCreator from './store/actions/actions'
import logo from './logo.svg';

export class App extends Component {
  // constructor(props) {
    // super(props);
    // this.state = {
    //   age:21
    // }
  // }

  // onAgeUp = () => {
  //   this.setState({
  //     ...this.state,
  //     age: ++this.state.age
  //   })  
  // }
  
  // onAgeDown = () => {
  //   this.setState({
  //     ...this.state,
  //     age: --this.state.age
  //   })
  // }
  
  // reset = () => {
  //   this.setState({
  //     ...this.state,
  //     age: 0
      
      
  //   })
  // }
  render() {
    return (
      <div className='App'>
        <h1>Age : <span>{this.props.age}</span></h1>
        <button onClick={this.props.onAgeUp}>Age up</button>&nbsp;&nbsp;
        <button onClick={this.props.onAgeDown}>Age Down</button>&nbsp;&nbsp;
        {this.props.loading && <img src={logo} className="App-logo"/>}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    age: state.age,
    loading:state.loading
  }
}

const mapDispachToProps = (dispach) => {
  return {
    onAgeUp: () => dispach(actionCreator.ageUp(1)),
    onAgeDown : () => dispach(actionCreator.ageDown(1))
  }  
}

export default connect(mapStateToProps, mapDispachToProps)(App);

// Keep AgeUp async
// Keep AgeDown sync