import React, {Component} from 'react';
import Avatar from './Avatar';
import UserName from './UserName';
import Bio from './Bio';

class Userprofil extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: this.props.name,
            age: this.props.age,
            gender: this.props.gender,
            username: '',
            bio: ''
        };
    }

    setData = (e) => {
        e.preventDefault();
        this.setState({
            username: this.refs.username.value,
            bio: this.refs.bio.value
        });
        this.refs.formulir.reset();
    }

    render(){
        return(
            <div class="row">
                <div class="col s12 m12 l6">
                    <ul class="collection">
                        <li class="collection-item avatar">
                            <Avatar />
                            <span class="title"><b><u>User Profil</u></b></span>
                                <p><UserName username={this.state.username} />
                                <Bio bio={this.state.bio}/>
                                </p>
                            <a href="#!" class="secondary-content btn-floating waves-effect waves-light red"><i class="material-icons">edit</i></a>
                        </li>
                    </ul>
                </div>

                <div class="col s12 m12 l6">
                    <form ref='formulir'>
                        <div class="input-field">
                            <label>
                                <b>Username</b><br />
                                <input type="text" ref='username' placeholder="Username" class="validate"></input><br />
                                <b>Bio</b><br />
                                <textarea ref='bio' cols="70" rows="7" class="materialize-textarea" placeholder="Bio"></textarea><br />
                                <button class="btn waves-effect waves-light" type="submit" name="action" onClick={this.setData}>
                                    Kirim
                                    <i class="material-icons right">send</i>
                                </button>
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Userprofil;
