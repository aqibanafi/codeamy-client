import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Hero from '../../images/hero-image.jpg'
import AskedQuestions from '../AskedQuestions/AskedQuestions';
import BlogMain from '../Blogs/BlogMain/BlogMain';
import LetsTalk from '../LetsTalk/LetsTalk';
import PopularCourseDisplay from '../PopularCourseDisplay/PopularCourseDisplay';
import AboutUs from '../AboutUS/AboutUs';
import reader from '../../asset/72264-certificate.json'
import Lottie from "lottie-react";


const Home = () => {
    const coursesCategory = useLoaderData();
    const [popularCourse, setPopularCourse] = useState([])

    return (
        <div className='relative'>
            <div>
                <div className="relative">
                    <img
                        src={Hero}
                        className="absolute inset-0 object-cover w-full h-full"
                        alt=""
                    />
                    <div className="relative bg-gray-900 bg-opacity-75">
                        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                            <div className="flex flex-col items-center justify-between xl:flex-row">
                                <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                                        Take The First Step <br className="hidden md:block" />
                                        To Khowledge{' '}
                                        <span className="text-teal-accent-400">With Us</span>
                                    </h2>
                                    <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                                        Codeamy is an online learning and teaching marketplace with over 185000 courses. 40 million students. Learn programming. data science and more.
                                    </p>
                                    <Link
                                        to='/login'
                                        aria-label=""
                                        className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
                                    >
                                        <button className="btn btn-warning px-20 text-white hover:bg-amber-800">Login</button>
                                    </Link>
                                </div>
                                <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                                    <Lottie animationData={reader} loop={true}></Lottie>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center mt-12 mb-12'>
                {
                    coursesCategory.map(category => <Link to={`/courses-categories/${category.id}`} className='px-10 py-10 bg-orange-400 text-white text-3xl font-bold text-center flex flex-wrap items-center justify-around gap-5' data-aos="zoom-in"> <img className='h-24 w-24' src={category.image} alt="" /> {category.name}</Link>)
                }
            </div>
            <div className='container mx-auto mt-20'>
                <h1 className='text-5xl font-bold text-center text-amber-500 mb-20'>Popular Courses</h1>
                {
                    useEffect(() => {
                        fetch('https://codeamy-server-side.vercel.app/latest-course')
                            .then(res => res.json())
                            .then(courses => setPopularCourse(courses))
                    }, [])
                }
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 data-aos="fade-right"'>
                    {
                        popularCourse.map(course => <PopularCourseDisplay course={course}></PopularCourseDisplay>)
                    }
                </div>
            </div>
            <div className='mb-20'>
                <div>
                    <BlogMain></BlogMain>
                </div>
            </div>
            <div>
                <AskedQuestions></AskedQuestions>
            </div>
            <div>
                <LetsTalk></LetsTalk>
            </div>
            <div>
                <AboutUs></AboutUs>
            </div>
        </div >

    );
};

export default Home;