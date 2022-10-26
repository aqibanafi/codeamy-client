import React from 'react';
import { Link } from 'react-router-dom';

const Blog03 = () => {
    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <button className="flex flex-row items-center mb-5 text-amber-500 font-bold hover:text-amber-900 space-x-1">
                    <svg className="fill-stroke" width="20" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.91681 7H11.0835" stroke="currentColor" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2.91681 7L5.25014 9.33333" stroke="currentColor" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2.91681 7.00002L5.25014 4.66669" stroke="currentColor" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <Link to='/blogs'><p className="text-sm leading-none">Back</p></Link>
                </button>
                <p className="font-medium">
                    September 20, 2022
                </p>
                <div>
                    <div className="mb-4">
                        <p
                            aria-label="Article"
                            className="inline-block max-w-lg font-sans text-3xl font-extrabold leading-none tracking-tight text-black transition-colors duration-200 hover:text-deep-purple-accent-700 sm:text-4xl"
                        >
                            How does the private route work?
                        </p>
                    </div>
                    <p className="text-base text-gray-700 md:text-lg">
                        Steps for writing public and private routes in React app using React Router
                        <br /> <br />
                        When developing a React Application with Authentication, we might require public and private routes. Let's first see what they are?
                        <br /> <br />
                        <img className='mt-12 mb-20' src="https://i.ibb.co/YXMjtrz/maxresdefault.jpg" alt="" />
                        <span className='text-xl font-bold mr-2'>Public Routes:</span>
                        <span>Public routes are Log in, SignUp, Forgot Password, Reset Password. In simple words, These routes can be accessed before login into the App.</span>
                        <br /> <br />
                        <span className='text-xl font-bold mr-2'>Private Routes:</span>
                        <span>Private Routes vary based on the Apps, For example, Dashboard, User Profile, App Settings, Home etc. In simple words, These routes can be accessed only after login.
                            <br /> <br />
                            The constraints for Public and Private routes are that Public routes should not be accessed after login and Private routes should not be accessible before login.
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog03;