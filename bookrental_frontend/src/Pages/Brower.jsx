import React, { useContext } from 'react'
import './CSS/Brower.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/down.png'
import Item from '../Components/Item/Item.jsx'

const Brower = () => {
    const {data_product} = useContext(ShopContext);
    return (
        <div className='brower'>
            <div className="brower-indexSort">
                <p>
                    <span>Showing 1-22</span> out of 36 product
                </p>
                <div className="brower-sort">
                    Sort by <img src="" alt=""/>
                </div>
            </div>
            <div className="brower-products">
                {data_product.map((item, i) => {
                    if (data_product == null) {
                        return null
                    } else {
                        return <Item key={i} id={item.id} title={item.title} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                    }
                })}
            </div>
            <div className='brower-loadmore'>
                Explore More
            </div>
        </div>
    )
}

export default Brower