import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Hero from '../../images/hero.jpg'
import BlogMain from '../Blogs/BlogMain/BlogMain';
import PopularCourseDisplay from '../PopularCourseDisplay/PopularCourseDisplay';


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
                                    <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                                        <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                                            Sign up for updates
                                        </h3>
                                        <form>
                                            <div className="mb-1 sm:mb-2">
                                                <label
                                                    htmlFor="firstName"
                                                    className="inline-block mb-1 font-medium"
                                                >
                                                    Full Name
                                                </label>
                                                <input
                                                    placeholder="John Sins"
                                                    required
                                                    type="text"
                                                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                                    id="firstName"
                                                    name="firstName"
                                                />
                                            </div>
                                            <div className="mb-1 sm:mb-2">
                                                <label
                                                    htmlFor="lastName"
                                                    className="inline-block mb-1 font-medium"
                                                >
                                                    Email
                                                </label>
                                                <input
                                                    placeholder="john.doe@example.org"
                                                    required
                                                    type="text"
                                                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                                    id="lastName"
                                                    name="lastName"
                                                />
                                            </div>
                                            <div className="mb-1 sm:mb-2">
                                                <label
                                                    htmlFor="email"
                                                    className="inline-block mb-1 font-medium"
                                                >
                                                    Password
                                                </label>
                                                <input
                                                    placeholder="*******"
                                                    required
                                                    type="text"
                                                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                                    id="email"
                                                    name="email"
                                                />
                                            </div>
                                            <div className="mt-4 mb-2 sm:mb-4">
                                                <button
                                                    type="submit"
                                                    className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-amber-600 hover:bg-amber-800 focus:shadow-outline focus:outline-none"
                                                >
                                                    Sign Up
                                                </button>
                                            </div>
                                            <p className="text-xs text-gray-600 sm:text-sm">
                                                We respect your privacy. Unsubscribe at any time.
                                            </p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-wrap justify-center mt-12 mb-12'>
                {
                    coursesCategory.map(category => <Link to={`/courses-categories/${category.id}`} className='px-20 py-20 mr-10 bg-amber-600 text-white text-3xl font-bold text-center flex flex-col justify-around gap-5'> <img className='h-24 w-24' src={category.image} alt="" /> {category.name}</Link>)
                }
            </div>
            <div className='mt-20'>
                <h1 className='text-4xl font-bold text-center text-amber-500 mb-20'>Popular Courses</h1>
                {
                    useEffect(() => {
                        fetch('http://localhost:5000/latest-course')
                            .then(res => res.json())
                            .then(courses => setPopularCourse(courses))
                    }, [])
                }
                {
                    popularCourse.map(course => <PopularCourseDisplay course={course}></PopularCourseDisplay>)
                }
            </div>
            <div className='mb-20'>
                <h1 className='text-4xl font-bold text-center text-amber-500 mb-20'>Latest Blogs</h1>
                <div>
                    <BlogMain></BlogMain>
                </div>
            </div>
        </div>

    );
};

export default Home;