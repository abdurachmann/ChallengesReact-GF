import React, { Component } from 'react';

class UserName extends Component{
    render(){
        return(
            <p>Username : {this.props.username}</p>
        );
    }
}

export default UserName;