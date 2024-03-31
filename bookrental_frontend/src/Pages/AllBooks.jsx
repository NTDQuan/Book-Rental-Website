import React, { useContext } from 'react'
import './CSS/AllBook.css'
import { ShopContext } from '../Context/ShopContext.jsx'
import dropdown_icon from '../Components/Assets/down.png'
import Item from '../Components/Item/Item.jsx'

const AllBooks = () => {
    const {data_product} = useContext(ShopContext);
    return (
        <div className='allbook'>
            <div className="allbook-indexSort">
                <p>
                    <span>Showing 1-22</span> out of 36 product
                </p>
                <div className="allbook-sort">
                    Sort by <img src={dropdown_icon} alt=""/>
                </div>
            </div>
            <div className="allbook-products">
                {data_product.map((item, i) => {
                    if (data_product == null) {
                        return null
                    } else {
                        return <Item key={i} id={item.id} title={item.title} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                    }
                })}
            </div>
            <div className='allbook-loadmore'>
                Explore More
            </div>
        </div>
    )
}

export default AllBooks