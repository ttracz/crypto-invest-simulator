import React, {Component} from 'react'
import fire from "../firebase";
import {Link} from "react-router-dom";

export default class Register extends Component {

    constructor(props) {
        super(props);

        sessionStorage.removeItem('loggedIn')

        this.state = {
            username: '',
            password: '',
        }

        this.onChangeUsername = this.onChangeUsername.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
    }

    onChangeUsername(e) {
        this.setState({username: e.target.value})
    }

    onChangePassword(e) {
        this.setState({password: e.target.value})
    }

    onLogin() {
        let ref = fire.database().ref('users/' + this.state.username)
        ref.on('value', (snapshot) => {
            let data = snapshot.val()
            if (data === null) {
                alert('Nie ma takiego użytkownika')
            } else {
                if (data.password !== this.state.password) {
                    alert('Błędne hasło!')
                } else {
                    sessionStorage.setItem('loggedIn', this.state.username)
                    window.location.replace('/')
                }
            }
        })
    }

    render() {

        const {username, password} = this.state;

        return <div className={'register'}>
            <div className={'container'}>

                <label>Nazwa użytkownika:</label>
                <input type={'text'} className={'form-control'} value={username} onChange={this.onChangeUsername}/>
                <label>Hasło:</label>
                <input type={'password'} className={'form-control'} value={password} onChange={this.onChangePassword}/>
                <div className={'buttonContainer'}>
                    <button className={'btn btn-success'} onClick={() => this.onLogin()}>Zaloguj</button>
                    <p><Link to={'/register'}>Zarejestruj się</Link></p>
                </div>

            </div>
        </div>

    }
}
