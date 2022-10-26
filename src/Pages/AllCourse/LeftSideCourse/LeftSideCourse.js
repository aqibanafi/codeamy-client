import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideCourse = () => {
    const [name, setName] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(course => setName(course))
    }, [])
    return (
        <div>
            <h1 className='text-3xl font-bold text-center mb-8 text-amber-500'>Course Name</h1>
            {
                name.map(courseName =>
                    <div>
                        <ul className='flex items-center gap-10 border p-3 mb-2 bg-slate-200 hover:bg-amber-600 hover:text-white'>
                            <Link to={`/course/${courseName._id}`}><li className='font-medium text-lg'>{courseName.title}</li></Link>
                        </ul>
                    </div>)
            }
        </div>
    );
};

export default LeftSideCourse;