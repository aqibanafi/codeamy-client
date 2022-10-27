import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const PopularCourseDisplay = ({ course }) => {
    const { _id, title, image, detail, rating, price, enrolled } = course;
    return (
        <div>
            <div className='flex flex-col justify-between p-5 shadow-xl rounded-xl h-full' data-aos="fade-up">
                <div>
                    <img className='h-72 mb-10 rounded-lg' src={image} alt="" />
                </div>
                <div>
                    <p className='text-2xl font-bold mb-3'>{title}</p>
                </div>
                <div className='mb-3'>
                    <p className='font-medium'>{detail.slice(0, 100)}</p>
                </div>
                <div className='flex justify-between p-x-10'>
                    <div className='flex items-center gap-3'>
                        <FaStar className='text-amber-400'></FaStar>
                        <p>{rating}</p>
                    </div>
                    <div>
                        <p>Enrolled</p>
                        <p>{enrolled}</p>
                    </div>
                </div>
                <div className='mb-10 flex justify-center'>
                    <p className='font-bold'>Price: $<span className='text-2xl text-amber-500 ml-3'>{price}</span></p>
                </div>
                <div className='flex justify-center'>
                    <Link to={`/course/${_id}`}>
                        <button type="button" className="px-20 py-3 font-semibold rounded bg-amber-500 text-white hover:bg-amber-600">Show Detail</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PopularCourseDisplay;