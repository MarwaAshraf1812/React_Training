import React from 'react';

const CategoryCard = ({ category }) => {
    return (
        <div className="card" style={{ width: '18rem', margin: '10px' }}>
            {/* <img src={category.image} className="card-img-top" alt={category.name} /> */}
            <div className="card-body">
                <h5 className="card-title">{category.name}</h5>
                <p className="card-text">{category.description}</p>
            </div>
        </div>
    );
};

export default CategoryCard;
