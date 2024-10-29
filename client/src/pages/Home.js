import React from 'react';
import ProductCard from '../components/Product';

const Home = () => {
    // Example product data (you can fetch this from an API later)
    const products = [
        { id: 1, name: 'Product 1', price: 29.99, image: 'link_to_image' },
        { id: 2, name: 'Product 2', price: 39.99, image: 'link_to_image' },
    ];

    return (
        <div>
            <h1>Welcome to the Ecommerce Store</h1>
            <div className="product-list">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Home;