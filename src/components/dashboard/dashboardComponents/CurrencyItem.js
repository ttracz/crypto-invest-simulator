import React, {Component} from 'react'
import fire from "../../../firebase";

export default class CurrencyItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            amount: 0,
        }

        this.onAmountChange = this.onAmountChange.bind(this)
    }

    onAmountChange(e) {
        this.setState({amount: e.target.value})
    }

    buyCoins(item) {
        let currencies = []

        if (sessionStorage.getItem('currencies') !== 'undefined') {
            currencies = JSON.parse(sessionStorage.getItem('currencies'))
        }

        if (sessionStorage.getItem('balance') - this.state.amount * item.current_price >= 0) {

            let isPresent = false;

            for (let i = 0; i < currencies.length; i++) {
                if (currencies[i].name === item.symbol) {
                    currencies[i].amount = parseFloat(this.state.amount) + parseFloat(currencies[i].amount)
                    isPresent = true;
                }
            }

            if (!isPresent) {
                currencies.push({name: item.symbol, amount: this.state.amount})
            }

            let balance = (sessionStorage.getItem('balance') - this.state.amount * item.current_price).toFixed(2)

            fire.database().ref('wallets/' + sessionStorage.getItem('loggedIn')).set({
                balance: balance,
                currencies: currencies
            }).then(() => {
                sessionStorage.setItem('currencies', JSON.stringify(currencies))
                sessionStorage.setItem('balance', balance)
                alert('Kupiono!')
            })
        } else {
            alert('Za mało środków!')
        }


    }

    render() {

        const item = this.props.item

        return <div className={'currencyItem'}>
            <div className={'header'}>
                <img src={item.image} className={'img-fluid'}/>
                <div className={'name'}>{item.symbol.toUpperCase()}</div>
                <span className={'fullName'}> {item.name.substr(0, 16)}</span>
            </div>
            <div className={'currentPrice'}>
                Aktualna cena: <span>{item.current_price}</span>
            </div>
            <div className={'marketCap'}>
                Market cap: <span>{item.market_cap}</span>
            </div>
            <div className={'max24h'}>
                Max 24h: <span>{item.high_24h}</span>
            </div>
            <div className={'min24h'}>
                Min 24h: <span>{item.low_24h}</span>
            </div>
            <div className={'buyRow'}>

                <input className={'form-control inputAmount'} type={'number'} onChange={this.onAmountChange}
                       name={'amount'}/>
                <button className={'btn btn-sm btn-success'}
                        onClick={() => this.buyCoins(item)}>
                    Kup
                </button>
            </div>
        </div>
    }
}
