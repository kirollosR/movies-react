import React from 'react';
import ProductCard from './components/ProductCard';
import "./style/ProductList.css";
import {Data} from '../../core/data/movies'
import EmptyProduct from './components/EmptyProduct';

function productList() {
    // const moviesData = [];
    const moviesData = Data;

    const watchNow = (id) => {
        console.log("we clicked on video id = ", id)
    }

    // 1 way data binding (to send data to child)
    const displayMovies = () => {
        if(moviesData.length === 0){
            return <EmptyProduct/>;
        } else {
            return moviesData.map(item => {
                // conditional rendering
                return (
                    <ProductCard 
                        key={item.id} 
                        id = {item.id}
                        name={item.name} 
                        desc={item.description} 
                        img={item.image}
                        watch = {watchNow}
                    />
                );
            });
        }
    }

    
    

    return (
        <div className='product-list'>
            {
                displayMovies() 
            }
        </div>);
};

export default productList;