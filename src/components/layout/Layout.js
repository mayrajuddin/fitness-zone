import React from 'react';
import './Layout.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faUserTie } from '@fortawesome/free-solid-svg-icons';
import Workouts from '../workout/Workouts';

const Layout = () => {
    return (
        <div className='activity-container'>
            <div className='activity'>
                <div className='top-header'>
                    <h1> UtRA-Active-club</h1>
                </div>
                <h3>Select today's exercise</h3>
                <div>
                    <Workouts></Workouts>
                </div>
            </div>
            <div className='details'>
                <div className='px-3 details-child'>
                    <div className='py-3 d-flex align-items-center'>
                        <span className='me-3 fs-1'><FontAwesomeIcon icon={faUserTie}></FontAwesomeIcon></span>
                        <div className=''>
                            <h5>Mayraj Uddin</h5>
                            <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
                            <span className='ms-1'> Mirsarai, Bangladesh</span>
                        </div>
                    </div>
                    <div className='mb-3 cc pd rounded parson-detail d-flex justify-content-between'>
                        <span>58kg</span>
                        <span >5.3 height</span>
                        <span>22yrs age</span>
                    </div>
                    <p className='fs-5 text-capitalize fw-bold'> Add a break</p>
                    <div className='mb-4 cc rounded break pd d-flex justify-content-between'>
                        <button>5<small>min</small></button>
                        <button>10<small>min</small></button>
                        <button>15<small>min</small></button>
                        <button>30<small>min</small></button>
                    </div>
                    <h5>Exercise Details</h5>
                    <div className='mb-4 cc rounded pd d-flex justify-content-between'>
                        <span>Exercise time</span>
                        <span className='px-4'>30min</span>
                    </div>
                    <div className='mb-4 cc rounded pd d-flex justify-content-between'>
                        <span>Break time</span>
                        <span className='px-4'>30min</span>
                    </div>
                    <button className='w-100 py-3 btn  btn-primary rounded'>Activity Completed</button>
                </div>
            </div>
        </div>
    );
};

export default Layout;