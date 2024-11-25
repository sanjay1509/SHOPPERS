import React from 'react';
import './RelatedProducts.css';
import all_product from '../Assets/all_product';
import Item from '../Item/Item';

const RelatedProducts = () => {
    const randomIndices = [];
    const maxProducts = all_product.length; // Get the total number of products

    // Generate 4 unique random indices
    while (randomIndices.length < 4) {
        const randomIndex = Math.floor(Math.random() * maxProducts);
        if (!randomIndices.includes(randomIndex)) {
            randomIndices.push(randomIndex);
        }
    }

    return (
        <div className='relatedproducts'>
            <h1>Related Products</h1>
            <hr />
            <div className="relatedproducts-item">
                {randomIndices.map((randomIndex, index) => {
                    const item = all_product[randomIndex];
                    return (
                        <Item 
                            key={index} 
                            id={item.id} 
                            name={item.name} 
                            image={item.image} 
                            new_price={item.new_price} 
                            old_price={item.old_price} 
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default RelatedProducts;
