import React, { Component } from 'react';
import axios from '../axios';
import NavBar from '../component/NavBar';
import GirlImage from '../component/GirlImage';
class DetailScreen extends Component {
    state  = {
        // image:[],
       
      }
      componentDidMount(){
        axios
        .get(`/api/images/${this.props.match.params.imageId}`)
        .then(
          data => {
            this.setState({
              image : data.data
            });
    
            console.log(data)}
          )
        .catch(err => console.log("aa" +err));  
      }
    render() {
        return (
            <div>
            <NavBar onLogin={this._onLogin} username={this.state.username} onSearchChanged = {this._onSearchChanged} />
                <div className="main-content  container">
                    <div className="row">
                        <div className="col-8 mr-auto ml-auto">
                            {this.state.image ? < GirlImage img = {this.state.image}/>:''}
                        </div> 
                    </div>
                </div>
            </div>
        );
    }
}

export default DetailScreen;