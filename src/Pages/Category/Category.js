import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryCourses from '../CategoryCourses/CategoryCourses';

const Category = () => {
    const courses = useLoaderData();
    return (
        <div>
            <div>
                <h1>Total Course: {courses.length}</h1>
                <h1>{courses.name}</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    courses.map(course => <CategoryCourses key={course.id} course={course}></CategoryCourses>)
                }
            </div>
        </div>
    );
};

export default Category;