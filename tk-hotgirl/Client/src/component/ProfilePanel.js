import React, { Component } from 'react';

class ProfilePanel extends Component {

    render() {
        const display =this.props.username ?(
            <div>
                <span className = "navbar-text">welcome ,{this.props.username}</span>
            </div>
        ):(
            <div>
            <button className = "btn btn-primary btn-block" onClick={this.props.onLogin}>Login</button>
            </div>
        );
        return (
            <div className="col-3 profile_panel">
                {display}
            </div>
        );
    }
}

export default ProfilePanel;