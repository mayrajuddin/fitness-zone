import './Layout.css';
import Workouts from '../workout/Workouts';
import Answer from '../answer/Answer';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell, faLocationDot, faUserTie } from '@fortawesome/free-solid-svg-icons';
import toast from 'react-hot-toast';

const Layout = () => {
    const [times, setTime] = useState([])
    const [breakTime, setBreakTime] = useState(0)

    const addTime = (value) => {
        const newtime = [...times, value]
        setTime(newtime)
    }
    let totalTime = 0;
    for (const time of times) {
        totalTime = totalTime + time.duration;

    }
    const addToBreak = (value) => {
        setBreakTime(value)
        localStorage.setItem('breakTime', value)
    }
    useEffect(() => {
        const getStoredTime = localStorage.getItem('breakTime', breakTime) ? localStorage.getItem('breakTime', breakTime) : 0;
        setBreakTime(getStoredTime)
    }, [breakTime])
    return (
        <div className='d-flex'>
            <div className='col-9'>
                <div className="activity">
                    <div className='top-header d-flex align-items-center'>
                        <span className='fs-3 me-2 text-primary '><FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon></span>
                        <h1> Fitness Zone</h1>
                    </div>
                    <h3>Select today's exercise</h3>
                    <Workouts addTime={addTime}></Workouts>
                    <Answer></Answer>
                </div>
            </div>
            <div className='details col-3 '>
                <div className='details-child mx-1 mx-md-3'>
                    <div className='py-3 text-center d-md-flex align-items-center'>
                        <span className='me-3 fs-1'><FontAwesomeIcon icon={faUserTie}></FontAwesomeIcon></span>
                        <div className=''>
                            <h5 className='fs-t'>Mayraj Uddin</h5>
                            <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
                            <span className='ms-1'> Mirsarai, Bangladesh</span>
                        </div>
                    </div>
                    <div className='mb-3 cc pd rounded parson-detail text-center d-md-flex justify-content-between'>
                        <span className='fs d-block mb-2'>58 <small>kg</small></span>
                        <span className='fs d-block mb-2' >5.3 <small>height</small></span>
                        <span className='fs d-block'>22 <small>yrs age</small></span>
                    </div>
                    <p className=' fs-md-5 text-capitalize fw-bold fs-t'> Add a break</p>
                    <div className='mb-4 cc rounded break pd text-center d-md-flex justify-content-between'>
                        <button className='mb-2 px-3 px-md-2' onClick={() => addToBreak(5)}>5<small>min</small></button>
                        <button className='mb-2 px-3 px-md-2' onClick={() => addToBreak(10)}>10<small>min</small></button>
                        <button className='mb-2 px-3 px-md-2' onClick={() => addToBreak(15)}>15<small>min</small></button>
                        <button className='mb-2 px-3 px-md-2' onClick={() => addToBreak(30)}>30<small>min</small></button>
                    </div>
                    <h5 className='fs-t text-center'>Exercise Details</h5>
                    <div className='mb-4 cc rounded pd text-center d-md-flex justify-content-between'>
                        <span className='d-block d-md-inline fs fs-md-5'>Exercise time</span>
                        <span className='px-4'> {totalTime} s</span>
                    </div>
                    <div className='mb-4 cc rounded pd text-center d-md-flex justify-content-between'>
                        <span className='d-block d-md-inline fs'>Break time</span>
                        <span className='px-md-4 text-center'>{breakTime}  minutes</span>
                    </div>
                    <button className='w-100 py-3 btn  btn-primary rounded fs-t' onClick={() => toast.success("Today Exercise Complete")}>Activity Completed</button>
                </div>
            </div>
        </div>
    );
};

export default Layout;