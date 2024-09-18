import React from 'react'
import './TitleBar.css'
import user_icon from '../../assets/user-icon3.png'

const TitleBar = () => {
    const title = 'Toy Critic';

    return (
        <nav className="container">
            <h3>{title}</h3>
            <ul>
                <li><img src={user_icon}/></li>
            </ul>
           
        </nav>
    )
}

export default TitleBar