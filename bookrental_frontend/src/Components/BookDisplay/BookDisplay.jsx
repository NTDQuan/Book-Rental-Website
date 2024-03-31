import React from 'react'
import './BookDisplay.css'

const BookDisplay = (props) => {
  const {book} = props;
  return (
    <div className='bookdisplay'>
      <div className='bookdisplay-left'>
        <div className="bookdisplay-img">
          <img src={book.image} alt="" className="bookdisplay-main-img" />
        </div>
      </div>
      <div className='bookdisplay-right'>
        <h1>{book.title}</h1>
        <div className="bookdisplay-right-prices">
          <div className="bookdisplay-right-price-old">${book.old_price}</div>
          <div className="bookdisplay-right-price-new">${book.new_price}</div>
        </div>
        <div className="bookdisplay-right-description">
          Demo description
        </div>
        <button>ADD TO CART</button>
      </div>
    </div>
  )
}

export default BookDisplay
