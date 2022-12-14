import React from 'react';
import { Link } from 'react-router-dom';

const Blog04 = () => {
    return (
        <div className='container mx-auto'>
            <div className="font-medium mt-12 mb-20">
                <button className="flex flex-row items-center mb-5 text-amber-500 font-bold hover:text-amber-900 space-x-1">
                    <svg className="fill-stroke" width="20" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.91681 7H11.0835" stroke="currentColor" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2.91681 7L5.25014 9.33333" stroke="currentColor" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2.91681 7.00002L5.25014 4.66669" stroke="currentColor" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <Link to='/blogs'><p className="text-sm leading-none">Back</p></Link>
                </button>
                <p className="font-medium mb-12">
                    Octaber 25, 2022
                </p>
                <div>
                    <div className="mb-10">
                        <p
                            aria-label="Article"
                            className="inline-block max-w-lg font-sans text-3xl font-extrabold leading-none tracking-tight text-black transition-colors duration-200 hover:text-deep-purple-accent-700 sm:text-4xl"
                        >
                            What is Node? How does Node work
                        </p>
                    </div>
                    <p className="text-base text-gray-700 md:text-lg">
                        <span className='text-xl font-bold mr-2'>JavaScript and Node.js:</span>
                        <span>Javascript has existed since 1995 and has since taken over as the dominant language for web development. For much of its life, JavaScript was used mainly for client-side scripting inside tags executing in web browsers. This limitation meant that developers were often working in many different languages and frameworks between the front-end (client-side) and backend (server-side) aspects of a web application.
                            <br /> <br />
                            Although there were other projects to bring JavaScript to server-side applications, the functionality took off with the launch of Node.js in 2009. Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. Node can, therefore, be used to write server-side applications with access to the operating system, file system, and everything else required to build fully-functional applications.
                            <br /> <br />
                            Node.js is written in C, C++, and JavaScript, and it is built on the open-source V8 JavaScript engine which also powers JS in browsers such as Google Chrome. As V8 supports new features in JavaScript, they are incorporated into Node.
                        </span>
                        <br /> <br />
                        <img className='mt-12 mb-12' src="https://i.ibb.co/pd4yhCP/nodejs-use-cases-cover-image.png" alt="" />
                        <span className='text-xl font-bold mr-2'>Why Node?</span>
                        <span>
                            Per the Node.js homepage, Node ???uses an event-driven, non-blocking I/O model.??? In practice, this means that Node is built well to handle asynchronous JavaScript code to perform many asynchronous activities such as reading and writing to the file system, handling connections to database servers, or handling requests as a web server.
                            <br /> <br />
                            To handle asynchronous code, Node uses a callback-based system. Node functions and methods that will implement some asynchronous activity take a callback function. This callback will be called whenever the asynchronous operation has resolved. By convention, the first argument of this callback is an error placeholder. If an error occurred in the asynchronous operation occurred (trying to read a non-existent file, for example), the error argument will be an Error object, but it will be null if no error occurs.
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog04;