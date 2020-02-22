import React from 'react'


const Card =(props) => {
    const style = {
        background:"lightgrey"
    }

 
    return (
            <div style={style} className="card">
              {props.children}
            </div>
        )
    }

export default Card;