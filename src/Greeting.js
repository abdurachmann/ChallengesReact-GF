import React, {Component} from 'react';
import './App.css';

class Greeting extends Component {
    render() {
        return(
            <div class="card transparent">
                <div class="card-content black-text">
                    <span class="card-title"><b><u>Greeting</u></b></span>
                        <p>
                            Nama: {this.props.name} <br />
                            Umur: {this.props.age} <br />
                            Jenis Kelamin: {this.props.gender} <br />
                        </p>
                </div>
            </div>            
        )
    }
}

export default Greeting;