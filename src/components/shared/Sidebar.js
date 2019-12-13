import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import UserData from "./sidebarComponents/UserData";
import fire from "../../firebase";

const links = [
    {src: '/', icon: 'fa-dollar', name: 'Giełda'},
    {src: '/', icon: 'fa-money', name: 'Portfel'},
    {src: '/', icon: 'fa-user', name: 'Moje konto'},
    {src: '/login', icon: 'fa-power-off', name: 'Wyloguj'}
]

export default class Sidebar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div className={'sidebar'}>
            <div className={'logo'}>
                LOGO
            </div>
            <UserData/>
            <div className={'links'}>
                {links.map((item, index) => {
                    return <Link to={item.src}>
                        <div className={'link'}>
                            <i className={'fa ' + item.icon}/> {item.name}
                        </div>
                    </Link>
                })}
            </div>
        </div>
    }
}
