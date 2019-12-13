import React, {Component} from 'react'
import fire from "../../../firebase";

export default class UserData extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: sessionStorage.getItem('loggedIn'),
            balance: '',
            currencies: []
        }
    }

    componentDidMount() {
        let ref = fire.database().ref('wallets/' + sessionStorage.getItem('loggedIn'))
        ref.on('value', (snapshot) => {
            let data = snapshot.val()
            console.log(data)
            sessionStorage.setItem('balance', data.balance)
            sessionStorage.setItem('currencies', JSON.stringify(data.currencies))
            this.setState({balance: data.balance, currencies: data.currencies})
        })
    }

    render() {

        const {username, balance, currencies} = this.state

        return <div className={'user'}>
            <div>Witaj <span className={'username'}>{username}</span></div>
            <div>Stan konta: <span className={'balance'}>{balance} PLN</span></div>
            <div>Twoje waluty:</div>
            {currencies !== undefined ? <div>
                {currencies.map((item, index) => {
                    return <div className={'currency isPresent'}>
                        <b>{item.name}</b>: {item.amount}
                    </div>
                })}
            </div> : <div className={'currency'}>Brak</div>}
        </div>
    }
}
