import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryCourses from '../CategoryCourses/CategoryCourses';

const Category = () => {
    const courses = useLoaderData();

    return (
        <div className='container mx-auto mt-20 mb-20'>
            <div>
                <h1 className='text-3xl font-bold text-center mb-10 text-amber-500'>Number of Courses: {courses.length}</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>
                {
                    courses.map(course => <CategoryCourses key={course.id} course={course}></CategoryCourses>)
                }
            </div>
        </div>
    );
};

export default Category;