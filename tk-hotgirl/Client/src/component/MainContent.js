import React, { Component } from 'react';
import GirlImage from './GirlImage';
import { Link } from 'react-router-dom';    
class MainContent extends Component {
     
    render() {
        const allImage = this.props.images.map(img => 
            <div key={img._id} className="col-3">
                <Link to={`images/${img._id}`}>
                    <GirlImage  img={img}/>
                </Link>
            </div>)
           
        return (
            <div className="container">
                <div className="row">{allImage}</div>
            </div>
        );
    }
}

export default MainContent;