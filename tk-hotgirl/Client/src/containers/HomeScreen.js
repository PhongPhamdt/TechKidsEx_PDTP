import React, { Component } from 'react';
import axios from '../axios';
import NavBar from '../component/NavBar';
import MainContent from '../component/MainContent';
class HomeScreen extends Component {
    state  = {
        image:[],
        searchString: "",
        username:"",
        id:""
      }
      componentDidMount(){
        axios
        .get('/api/images')
        .then(
          data => {
            this.setState({
              image : data.data
            });
    
            console.log(data)}
          )
        .catch(err => console.log("aa" +err));  
      }
    
      _onSearchChanged = text => this.setState({searchString :text});
    render() {
        
        const  displayedImages = this.state.image.filter(img => img.title.includes(this.state.searchString) ||img.description.includes(this.state.searchString));
       
        return (
            <div>
            <NavBar onLogin={this.props.onLogin} username={this.props.username} onSearchChanged = {this._onSearchChanged} />
            <MainContent  images = {displayedImages}/>
            </div>
        );
    }
}

export default HomeScreen;