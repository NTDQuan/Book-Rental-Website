import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = (props) => {
    return (
        <div className='item'>
            <div className="item-image">
                <Link to={`/book/${props.id}`}><img src={props.image} alt=""/></Link>
            </div>
            <p>{props.title}</p>
            <div className='item-prices'>
                <div className='item-prices-new'>
                    {props.new_price}
                </div>
                <div className="item-prices-old">
                    {props.old_price}
                </div>
            </div>
        </div>
    )
}

export default Item