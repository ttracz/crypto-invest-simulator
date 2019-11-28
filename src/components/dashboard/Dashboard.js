import React, {Component} from 'react'
import Header from "../shared/Header";
import Sidebar from "../shared/Sidebar";
import * as axios from "axios";

export default class Dashboard extends Component {

    constructor(props) {
        super(props)

        this.state = {
            data: []
        }
    }

    componentDidMount() {
        this.getMarket()
    }

    getMarket() {
        axios({
            method: 'get',
            url: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=pln&order=market_cap_desc&per_page=100&page=1&sparkline=false',
        }).then(response => {
            this.setState({data: response.data})
        });
    }

    render() {

        const data = this.state.data

        return <div className={'dashboard'}>
            <Header/>
            <Sidebar/>

            <div className={'content'}>
                <div className={'currencyList row'}>
                    {data.map((item, index) => {
                        return <div className={'col-lg-2'}>
                            <div className={'currencyItem'}>
                                <div className={'header'}>
                                    <img src={item.image} className={'img-fluid'}/>
                                    <div className={'name'}>{item.symbol.toUpperCase()}</div>
                                    <span className={'fullName'}> {item.name}</span>
                                </div>
                                <div className={'currentPrice'}>
                                    Aktualna cena: <span>{item.current_price}</span>
                                </div>
                                <div className={'marketCap'}>
                                    Market cap: <span>{item.market_cap}</span>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    }
}
