import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaStar, FaVideo, FaBook, FaCertificate, FaCalendarTimes, FaLanguage, FaCheck, FaCheckSquare } from 'react-icons/fa';

const Courses = () => {
    const courseDetail = useLoaderData();
    const { title, detail, overview, language, rating, enrolled, author, sections, published_date, lectures, total_length, video_length, article_number, certificate, content } = courseDetail;
    return (
        <div>
            <div className='bg-gray-800 text-white p-5'>
                <div className='container mx-auto'>
                    <h1 className='text-3xl font-bold mb-5'>{title}</h1>
                    <p className='text-xl font-normal mb-2'>{detail}</p>
                    <div className='flex gap-5 items-center mb-2'>
                        <p className='bg-amber-400 p-1'>Bestseller</p>
                        <div className='flex items-center gap-2'>
                            <FaStar></FaStar>
                            <p>{rating}</p>
                        </div>
                        <p>{enrolled} Students</p>
                    </div>
                    <p className='mb-2'>Created By <span className='text-amber-500'>{author}</span></p>
                    <div className='flex gap-5'>
                        <div className='flex items-center gap-2'>
                            <FaCalendarTimes></FaCalendarTimes>
                            <p>Publish Date {published_date}</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <FaLanguage></FaLanguage>
                            <p>Language {language}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mx-auto mt-10'>
                <h2 className='text-2xl font-bold mb-5'>Course Overview</h2>
                <div className='mb-10'>
                    {
                        overview.map(item =>
                            <ul className='flex gap-5 mb-2 items-center'>
                                <FaCheck></FaCheck><li>{item}</li>
                            </ul>
                        )
                    }
                </div>
                <div className='flex gap-3 mb-10'>
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
                    <h2 className='text-2xl font-bold mb-5'>Course Content</h2>
                    <div className='flex'>
                        <p>{sections} sections</p>
                        <p>{lectures} lectures</p>
                        <p>{total_length} total length</p>
                    </div>
                    <div className='mt-5'>
                        {
                            content.map(contentList =>
                                <ul className='flex items-center gap-10 border p-3 mb-2 bg-slate-200 hover:bg-slate-400 hover:text-white'>
                                    <FaCheckSquare></FaCheckSquare>
                                    <li className='font-medium text-lg'>
                                        {contentList}
                                    </li>
                                </ul>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;