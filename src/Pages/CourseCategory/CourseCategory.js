import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseCategory = () => {
    const coursesCategory = useLoaderData();
    return (
        <div>
            {
                coursesCategory.map(category => <div>{category.name}</div>)
            }
        </div>
    );
};

export default CourseCategory;