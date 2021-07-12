import React from 'react'

function Card({ title, content }) {
    return (
        <div style={{background: 'aqua', margin: '30px'}} >
            <h1>{title}</h1>
            <h2>{content}</h2>
        </div>
    )
}

export default Card
