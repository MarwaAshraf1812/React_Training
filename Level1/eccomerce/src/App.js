import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardList from './components/CardList';

const App = () => {
    const [categories, setCategories] = useState([]);
    const [subcategories, setSubcategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const categoriesResponse = await axios.get('http://127.0.0.1:8000/categories/');
                const subcategoriesResponse = await axios.get('http://127.0.0.1:8000/subcategories/'); 
                const productsResponse = await axios.get('http://127.0.0.1:8000/products/');

                setCategories(categoriesResponse.data);
                setSubcategories(subcategoriesResponse.data);
                setProducts(productsResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError(error.message);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container">
            <h1 className="my-4">Categories</h1>
            {error && <div className="alert alert-danger" role="alert">{error}</div>}
            <CardList items={categories} type="category" />

            <h1 className="my-4">Subcategories</h1>
            <CardList items={subcategories} type="subcategory" />

            <h1 className="my-4">Products</h1>
            <CardList items={products} type="products"/>
        </div>
    );
};

export default App;
