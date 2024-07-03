import React from 'react';

const SubCategoryCard = ({ subcategory }) => {
    return (
        <div className="card" style={{ width: '18rem', margin: '10px' }}>
            <div className="card-body">
                <h5 className="card-title">{subcategory.name}</h5>
                <p className="card-text">{subcategory.description}</p>
            </div>
        </div>
    );
};

export default SubCategoryCard;
