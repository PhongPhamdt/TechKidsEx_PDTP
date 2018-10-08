import React, { Component } from 'react';
// import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import axios from './axios';
import HomeScreen from './containers/HomeScreen';
import DetailScreen from './containers/DetailScreen';
import {BrowserRouter ,Route} from 'react-router-dom';
class App extends Component {
  state={};
  _onLogin =() =>{
    axios.post("/api/auth" ,{
      username : "admin",
      password : "123456"
    })
    .then(res=>{
      // console.log(res.data.username);
      this.setState({
        username : res.data.username,
        id : res.data.id
      })
    }).catch(err => console.log(err));
  };

  render() {
   
    return (
      <div className="App">
        <BrowserRouter>
        <div>
          <Route exact path="/" render={(props)=>{
               return  <HomeScreen {...props} username = {this.state.username} onLogin = {this._onLogin}/>
          }}/>
          <Route path="/images/:imageId"  render={(props)=>{
            return  <DetailScreen {...props} username = {this.state.username} onLogin = {this._onLogin}/>
          }}/>
          </div>
        </BrowserRouter>
      </div> 
    );
  }
}

export default App;
