
import './Cart.css'

const Cart = (props) => {
    const { duration, img, name, age, details } = props.exercise;
    const { addTime } = props
    // console.log(addTime);
    return (
        <div className='col-12 gy-2 col-md-4 g-md-4' >
            <div className='card'>
                <img src={img} alt="" className='card-img-top' />
                <div className='card-body'>
                    <h5 className='card-title'>{name}</h5>
                    <p className='card-text'>{details ? details.slice(0, 60) + (' ...') : 'details not found'}</p>
                    <h6 className='text-capitalize'>for age : {age}</h6>
                    <h6 className='text-capitalize'>duration : {duration}</h6>
                    <button className='btn btn-primary text-capitalize w-100 mt-2' onClick={() => addTime(props.exercise)}>add to list </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;