import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryCourses from '../CategoryCourses/CategoryCourses';

const Category = () => {
    const courses = useLoaderData();
    return (
        <div>
            <div>
                <h1>Total Course: {courses.length}</h1>
            </div>
            {
                courses.map(course => <CategoryCourses key={course.id} course={course}></CategoryCourses>)
            }
        </div>
    );
};

export default Category;