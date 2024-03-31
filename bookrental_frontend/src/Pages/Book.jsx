import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import BookDisplay from '../Components/BookDisplay/BookDisplay';

const Book = () => {
    const {data_product} = useContext(ShopContext);
    const {bookId} = useParams();
    const book = data_product.find((e)=> e.id === Number(bookId));

    return (
        <div>
            <Breadcrum book={book}/>
            <BookDisplay book={book}/>
        </div>

    )
}

export default Book;