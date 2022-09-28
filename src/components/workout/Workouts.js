import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import './Workouts.css'

const Workouts = () => {
    const [exercises, setExercises] = useState([])
    useEffect(() => {
        fetch('activity.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, [])
    // console.log(exercises);
    return (
        <div className='row'>
            {
                exercises.map(exercise => <Cart exercise={exercise} key={exercise.id}></Cart>)
            }
        </div>
    );
};

export default Workouts;