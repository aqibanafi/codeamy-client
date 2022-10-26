import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const RightSideCourse = ({course}) => {
    const { _id, title, image, detail, rating, price, enrolled } = course;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl h-[550px]">
                <div>
                    <figure className="px-10 pt-10">
                        <img src={image} alt="Shoes" className="rounded-xl bg-cover max-h-44" />
                    </figure>
                </div>
                <div className="card-body items-center text-center">
                    <div>
                        <h2 className="card-title mb-5">{title}</h2>
                        <p>{detail}</p>
                    </div>
                    <div className='flex gap-10'>
                        <div className='flex items-center gap-2'>
                            <p>{rating}</p>
                            <div>
                                <FaStar className='text-amber-300'></FaStar>
                            </div>
                        </div>
                        <div>
                            <p>Enrolled: {enrolled}</p>
                        </div>
                    </div>
                    <div>
                        <p>Price: $ <span className='text-xl font-bold'>{price}</span></p>
                    </div>
                    <div className="card-actions">
                        <Link to={`/course/${_id}`}>
                            <button className="btn bg-amber-600 text-white hover:bg-amber-800">Buy Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightSideCourse;