import React from 'react';

const Blog03 = () => {
    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase sm:text-center">
                September 20, 2022
                </p>
                <div className="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-2xl">
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
                <div className="mb-10 sm:text-center">
                    <a href="/" aria-label="Author" className="inline-block mb-1">
                        <img
                            alt="avatar"
                            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                            className="object-cover w-10 h-10 rounded-full shadow-sm"
                        />
                    </a>
                    <div>
                        <a
                            href="/"
                            aria-label="Author"
                            className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
                        >
                            Vasile Melinte
                        </a>
                        <p className="text-sm font-medium leading-4 text-gray-600">Author</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog03;