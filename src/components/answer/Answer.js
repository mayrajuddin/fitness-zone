import React from 'react';
// question and answer 

const Answer = () => {
    return (
        <div className='mt-4'>
            <div className='border rounded p-4 mb-3'>
                <h3 className='text-capitalize border-bottom pb-3 fs-t'>1. how does react work? </h3>
                <p className='fs-md-5 fs'>React is a declarative, efficient, and flexible JavaScript library for building user interfaces. 'V' denotes the view in MVC. ReactJS is an open-source, component-based front end library responsible only for the view layer of the application.</p>
            </div>
            <div className='border rounded p-4 mb-3'>
                <h3 className='text-capitalize border-bottom pb-3 fs-t'>2. difference between props and state </h3>
                <p className='fs-md-5 fs'>The state is a set of variables that determine the current condition of the component. The state of a component is internal, i.e., defined inside the component and changeable only within the component. Any change in state renders the component again.</p>
                <p className='fs-md-5 fs'>Props is short for properties. It is the set of attributes that are passed from a parent component to a child component. These can be data variables or functions.</p>
            </div>
            <div className='border rounded p-4'>
                <h3 className='text-capitalize border-bottom pb-3 fs-t'>3.What is useEffect used for? </h3>
                <p className='fs-md-5 fs'>The useEffect Hook allows you to perform side effects in your components.
                    Some examples of side effects are: fetching data, directly updating the DOM, and timers.
                    useEffect accepts two arguments. The second argument is optional.</p>
            </div>
        </div>
    );
};

export default Answer;