import React, { useState } from 'react';
import './Layout.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faUserTie } from '@fortawesome/free-solid-svg-icons';
import Workouts from '../workout/Workouts';
import Utilities from '../utilities/Utilities';

const Layout = () => {
    const [times, setTime] = useState([])
    const addTime = (value) => {
        const newtime = [...times, value]
        // console.log(newtime);
        setTime(newtime)
    }
    let totalTime = 0;
    for (const time of times) {
        totalTime = totalTime + time.duration;

    }
    return (
        <div className='row'>
            <div className='activity col-9 '>
                <div className='top-header'>
                    <h1> UtRA-Active-club</h1>
                </div>
                <h3>Select today's exercise</h3>
                <Workouts addTime={addTime}></Workouts>
            </div>
            <div className='details col-3 '>
                <div className='px-2 px-md-3 details-child'>
                    <div className='py-3 d-md-flex align-items-center'>
                        <span className='me-3 fs-1'><FontAwesomeIcon icon={faUserTie}></FontAwesomeIcon></span>
                        <div className=''>
                            <h5>Mayraj Uddin</h5>
                            <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
                            <span className='ms-1'> Mirsarai, Bangladesh</span>
                        </div>
                    </div>
                    <div className='mb-3 cc pd rounded parson-detail d-md-flex justify-content-between'>
                        <span>58 <small>kg</small></span>
                        <span >5.3 <small>height</small></span>
                        <span>22 <small>yrs age</small></span>
                    </div>
                    <p className=' fs-md-5 text-capitalize fw-bold'> Add a break</p>
                    <div className='mb-4 cc rounded break pd d-md-flex justify-content-between'>
                        <button className='mb-2'>5<small>min</small></button>
                        <button className='mb-2'>10<small>min</small></button>
                        <button className='mb-2'>15<small>min</small></button>
                        <button className='mb-2'>30<small>min</small></button>
                    </div>
                    <h5>Exercise Details</h5>
                    <div className='mb-4 cc rounded pd d-md-flex justify-content-between'>
                        <span>Exercise time</span>
                        <span className='px-4'> {totalTime}s</span>
                    </div>
                    <div className='mb-4 cc rounded pd d-md-flex justify-content-between'>
                        <span>Break time</span>
                        <span className='px-4'><Utilities time={3}></Utilities></span>
                    </div>
                    <button className='w-100 py-3 btn  btn-primary rounded'>Activity Completed</button>
                </div>
            </div>
        </div>
    );
};

export default Layout;