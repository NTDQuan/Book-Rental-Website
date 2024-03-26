import React from 'react';
import { Grid } from '@mui/material';
import ProductCard from '../Components/ProductCard/ProductCard';

const products = [
    { id: 1, name: 'Product 1', image: '/product1.jpg', price: 10000 },
    { id: 2, name: 'Product 2', image: '/product2.jpg', price: 10000 },
    // Add more products to the array as needed
];

function ShopPage() {
    return(
        <div className="ShopPage-content">
            <div className="product-list-container">
                <div className="product-list">
                    {products.map((product) => (
                        <ProductCard title={product.title} image={product.image} price={product.price} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ShopPage;