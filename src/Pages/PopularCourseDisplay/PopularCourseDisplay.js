import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const PopularCourseDisplay = ({ course }) => {
    const { _id, title, image, detail, rating, price, enrolled } = course;
    return (
        <div data-aos="zoom-in-up">
            <div className="card w-96 bg-base-100 shadow-xl h-[570px]">
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
                        <div className='flex items-center gap-1'>
                            <p>{rating}</p>
                            <div className='flex gap-2'>
                                <FaStar className='text-amber-300'></FaStar>
                                <FaStar className='text-amber-300'></FaStar>
                                <FaStar className='text-amber-300'></FaStar>
                                <FaStar className='text-amber-300'></FaStar>
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
                    <div className="card-actions mt-2">
                        <Link to={`/course/${_id}`}>
                            <button type="button" className="px-20 py-3 font-semibold rounded bg-amber-500 text-white hover:bg-amber-600">Show Detail</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularCourseDisplay;