import React, {Component} from 'react'
import fire from "../firebase";
import {Link} from "react-router-dom";

export default class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            password: '',
            password2: ''
        }

        this.onChangeUsername = this.onChangeUsername.bind(this)
        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
        this.onChangePassword2 = this.onChangePassword2.bind(this)
    }

    onChangeUsername(e) {
        this.setState({username: e.target.value})
    }

    onChangeEmail(e) {
        this.setState({email: e.target.value})
    }

    onChangePassword(e) {
        this.setState({password: e.target.value})
    }

    onChangePassword2(e) {
        this.setState({password2: e.target.value})
    }

    onRegister() {

        fire.database().ref('users/' + this.state.username).set({
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }).then(() => {
            fire.database().ref('wallets/' + this.state.username).set({
                balance: 25000,
                currencies: {}
            }).then(() => {
                sessionStorage.setItem('loggedIn', this.state.username)
                window.location.replace('/')
            })
        })
    }

    render() {

        const {username, email, password, password2} = this.state;

        return <div className={'register'}>
            <div className={'container'}>

                <label>Nazwa użytkownika:</label>
                <input type={'text'} className={'form-control'} value={username} onChange={this.onChangeUsername}/>
                <label>E-mail:</label>
                <input type={'text'} className={'form-control'} value={email} onChange={this.onChangeEmail}/>
                <label>Hasło:</label>
                <input type={'password'} className={'form-control'} value={password} onChange={this.onChangePassword}/>
                <label>Hasło:</label>
                <input type={'password'} className={'form-control'} value={password2}
                       onChange={this.onChangePassword2}/>
                <div className={'buttonContainer'}>
                    <button className={'btn btn-success'} onClick={() => this.onRegister()}>Zarejestruj</button>
                    <p><Link to={'/login'}>Zaloguj się</Link></p>
                </div>
            </div>
        </div>

    }
}
