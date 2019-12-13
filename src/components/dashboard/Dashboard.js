import React, {Component} from 'react'
import Header from "../shared/Header";
import Sidebar from "../shared/Sidebar";
import * as axios from "axios";
import fire from "../../firebase";
import CurrencyItem from "./dashboardComponents/CurrencyItem";

export default class Dashboard extends Component {

    constructor(props) {
        super(props)

        this.state = {
            data: [],
            loading: true
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
            this.setState({data: response.data, loading: false})
        });
    }

    render() {

        const {data, loading} = this.state

        return <div className={'dashboard'}>

            <Header/>
            <Sidebar/>

            <div className={'content'}>
                <div className={'currencyList row'}>
                    {loading ?
                        <div className="col-12 loader"
                             style={{textAlign: 'center', paddingTop: 150, paddingBottom: 50}}><i
                            className="fa fa-spinner fa-pulse fa-2x fa-fw"
                            style={{
                                color: '#58b13d'
                            }}> </i></div>
                        :
                        <>{data.map((item, index) => {
                            return <div className={'col-lg-2'}>
                                <CurrencyItem item={item}/>
                            </div>
                        })}</>}
                </div>
            </div>
        </div>
    }
}
