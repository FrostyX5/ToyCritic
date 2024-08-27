import React from 'react'
import './TitleBar.css'

const TitleBar = () => {
    const title = 'Toy Critic';

    return (
        <div className="container">
            <h3>{title}</h3>
        </div>
    )
}

export default TitleBar