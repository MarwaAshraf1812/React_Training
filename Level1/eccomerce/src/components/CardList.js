import React from 'react';
import CategoryCard from './CategoryCard';
import SubCategoryCard from './SubCategoryCard';
import Products from './Products';

const CardList = ({ items, type }) => {
    if (!items || !Array.isArray(items)) {
        return <div>No items available</div>;
    }

    let CardComponent;
    switch (type) {
        case 'category':
            CardComponent = CategoryCard;
            break;
        case 'subcategory':
            CardComponent = SubCategoryCard;
            break;
        case 'products':
            CardComponent = Products;
            break;
        default:
            CardComponent = () => <div>Invalid card type</div>;
    }

    return (
        <div className="d-flex flex-wrap justify-content-center">
            {items.map((item, index) => (
                <CardComponent key={index} {...{ [type]: item }} />
                
            ))}
        </div>
    );
};

export default CardList;
