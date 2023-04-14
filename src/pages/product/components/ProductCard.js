import React from 'react';
import '../style/ProductCard.css';
import { Link } from '../../../../node_modules/react-router-dom/dist/index';

const ProductCard = (props) => {
    const watchNow = (x) => {
        props.watch(props.id);
    }
    return (
        <div className='product-card'>
            <div className='card-top'>
                <img src={props.img} alt='product-card'/>
            </div>
            <div className='card-info'>
                <h4 className='title'>{props.name}</h4>
                <p className='info'>{props.desc}</p>
                {/* how to call events in react */
                /* or --> () => {watchNow("hi")} if I want to send params} */
                /* onClick={watchNow} */}
                <button><Link to={'/product-details/' + props.id}>Watch Now</Link></button>
            </div>
        </div>
    );
};

export default ProductCard;