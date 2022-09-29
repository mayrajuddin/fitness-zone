import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import './Workouts.css'

const Workouts = (props) => {
    // console.log(props);
    const [exercises, setExercises] = useState([])
    useEffect(() => {
        fetch('activity.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, [])
    return (
        <div className='row'>
            {
                exercises.map(exercise => <Cart exercise={exercise} key={exercise.id} addTime={props.addTime}></Cart>)
            }
        </div>
    );
};

export default Workouts;