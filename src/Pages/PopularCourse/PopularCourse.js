import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PopularCourseDisplay from '../PopularCourseDisplay/PopularCourseDisplay';


const PopularCourse = () => {
    const courseList = useLoaderData();

    return (
        <div>
            {
                courseList.map(course => <PopularCourseDisplay key={course.id} course={course}></PopularCourseDisplay>)
            }
        </div>
    );
};

export default PopularCourse;