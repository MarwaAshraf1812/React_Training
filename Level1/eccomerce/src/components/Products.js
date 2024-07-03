import React from 'react';

const Products = ({ product }) => {
    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="card" style={{ width: '20rem', margin: '20px' }}>
            {/* <img src={product.image} className="card-img-top" alt={product.name} /> */}
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
            </div>
        </div>
    );
};

export default Products;
