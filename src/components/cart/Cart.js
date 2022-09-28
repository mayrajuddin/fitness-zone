import React from 'react';
import './Cart.css'

const Cart = ({ exercise }) => {
    const { duration, img, name, age, details } = exercise
    return (
        <div className='col-12 gy-2 col-md-4 g-md-4' >
            <div className='card'>
                <img src={img} alt="" className='card-img-top' />
                <div className='card-body'>
                    <h5 className='card-title'>{name}</h5>
                    <p className='card-text'>{details}</p>
                    <h6>for age : {age}</h6>
                    <h6>duration : {duration}</h6>
                    <button className='btn btn-primary text-capitalize w-100 mt-2'>add to list </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;