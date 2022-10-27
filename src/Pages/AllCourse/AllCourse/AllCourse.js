import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LeftSideCourse from '../LeftSideCourse/LeftSideCourse';
import RightSideCourse from '../RightSideCourse/RightSideCourse';

const AllCourse = () => {
    const allCourse = useLoaderData();
    return (
        <div className='mt-20'>
            <h1 className='text-4xl font-bold text-center mb-12 text-amber-500'>Our All Courses</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 mx-5 lg:mx-20 my-20'>
                <div className='md:col-span-0 lg:col-span-2'>
                    <LeftSideCourse></LeftSideCourse>
                </div>
                <div className='md:col-span-0 lg:col-span-10'>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                        {
                            allCourse.map(course => <RightSideCourse key={course._id} course={course}></RightSideCourse>)
                        }

                    </div>
                </div>

            </div>
        </div>

    );
};

export default AllCourse;