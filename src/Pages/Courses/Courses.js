import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaStar, FaVideo, FaBook, FaCertificate } from 'react-icons/fa';

const Courses = () => {
    const courseDetail = useLoaderData();
    const { title, detail, overview, rating, enrolled, author, sections, published_date, lectures,  total_length, video_length, article_number, certificate, content } = courseDetail;
    return (
        <div>
            <div className='bg-gray-800 text-white'>
                <h1>{title}</h1>
                <p>{detail}</p>
                <div className='flex gap-5 items-center'>
                    <p>Bestseller</p>
                    <div className='flex items-center gap-2'>
                        <FaStar></FaStar>
                        <p>{rating}</p>
                    </div>
                    <p>{enrolled} Students</p>
                </div>
                <p>Created By {author}</p>
                <div>

                    <p>Publish Date {published_date}</p>
                </div>
            </div>
            <div>
                <h2>Course Overview</h2>
                <div>
                    {
                        overview.map(item =>
                            <ul>
                                <li>{item}</li>
                            </ul>
                        )
                    }
                </div>
                <div className='flex gap-3'>
                    <div className='border p-5 flex flex-col gap-5 items-center'>
                        <FaVideo></FaVideo>
                        <p>{video_length} hours of video</p>
                    </div>
                    <div className='border p-5 flex flex-col gap-5 items-center'>
                        <FaBook></FaBook>
                        <p>{article_number} articles + resources</p>
                    </div>
                    <div className='border p-5 flex flex-col gap-5 items-center'>
                        <FaCertificate></FaCertificate>
                        <p>Certificate {certificate}</p>
                    </div>
                </div>
                <div>
                    <h2>Course Content</h2>
                    <div className='flex'>
                        <p>{sections} sections</p>
                        <p>{lectures} lectures</p>
                        <p>{total_length} total length</p>
                    </div>
                        {
                            content.map(contentList => 
                              <ul>
                                <li>
                                    {contentList}
                                </li>
                              </ul>  
                                )
                        }
                </div>
            </div>
        </div>
    );
};

export default Courses;