import React, { Component } from 'react';

class SearchField extends Component {
    _handleTextChange = (event) => {
        console.log(event.target.value);
        this.props.onSearchChanged(event.target.value);}
    render() {
        return (
            <form className="col-3">
                <input onChange={this._handleTextChange} className="form-control" placeholder="search"/>
            </form>
            
        );
    }
}

export default SearchField;