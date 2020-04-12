import React, { Component } from 'react';

class Bio extends Component{
    render(){
        return(
            <p>Bio: {this.props.bio}</p>
        );
    }
}

export default Bio;