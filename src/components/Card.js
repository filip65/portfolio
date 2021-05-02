import React from 'react'
import '../css/card.css'

function Card({info}) {   
    const {name, img, link} = info; 

    return (
        <a className="card" href={link} target="_blank" rel="noreferrer">
            <img src={`./img/${img}`} alt=""/>
            <p> <span className="code">{`<`}</span> {name} <span className="code">{`/>`}</span> </p>
        </a>
    )
}

export default Card
