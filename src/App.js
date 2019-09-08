import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as actionCreator from './store/actionCreator/actions'
import {connect} from 'react-redux'

class App extends React.Component {
  render(){
    return (
      <div className="App">
      {this.props.loading &&  <img src={logo} className="App-logo" alt="logo" />}
       <div><span>Age :{this.props.age}</span></div>
        <button onClick={this.props.ageIncrease}>Age Up </button> 
        <button onClick={this.props.ageDecrease}>Age Down </button>
        <button onClick={this.props.getData}>Get Data</button>
     
        <hr/>
        <div>Data</div>
        <div>
          <ul>
            {
              this.props.data.map(el => (
                <li>
                  {el.username}
                </li>
              ))
            }
          </ul>
        </div>
      
        
      </div>
    );
  }
 
}

const mapStateToProps = (state)=>{
  return{
    age: state.age,
    loading : state.loading,
    data: state.data
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    ageIncrease : () => dispatch(actionCreator.ageChange()),
    ageDecrease :()=> dispatch(actionCreator.ageDown()),
    getData : ()=> dispatch(actionCreator.apiFetch())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);

