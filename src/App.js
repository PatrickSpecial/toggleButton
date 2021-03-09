import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

export default class App extends React.Component {
  constructor(){
    super();
    this.state={
      isToggleOn: true
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.setState(state =>({
      isToggleOn: !state.isToggleOn
    }));
  }
  render(){
    if(this.state.isToggleOn){ 
    return(
      <div className="container">
        <button className="btn btn-lg btn-success text-center" onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
        <h1 className="text text-danger"><b>We have light</b></h1>
      </div>
    )
  }else{
    return(
      <div className="container">
        <button className="btn btn-lg btn-danger text-center" onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
        <h1 className="text text-success"><b>We don't have light</b></h1>
      </div>
    )
  }
  }
}