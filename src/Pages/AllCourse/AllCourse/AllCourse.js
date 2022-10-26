import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LeftSideCourse from '../LeftSideCourse/LeftSideCourse';
import RightSideCourse from '../RightSideCourse/RightSideCourse';

const AllCourse = () => {
    const allCourse = useLoaderData();
    return (
        <div className='mt-20'>
            <h1 className='text-4xl font-bold text-center mb-12 text-amber-500'>Our All Courses</h1>
            <div className='grid grid-cols-1 lg:grid-cols-4 mb-20 gap-10'>
                <div className='col-span-3 p-3 lg:col-span-1 md:col-span-1'>
                    <LeftSideCourse></LeftSideCourse>
                </div>
                <div className='col-span-1 ml-24 md:ml-1 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10'>
                    {
                        allCourse.map(course => <RightSideCourse key={course._id} course={course}></RightSideCourse>)
                    }

                </div>
            </div>
        </div>

    );
};

export default AllCourse;