import React, { Component } from 'react';
import rachman from './rachman.png';

class Avatar extends Component{
    render(){
        return(
            <img src={rachman} class="circle" alt="logo" />
        );
    }
}

export default Avatar;