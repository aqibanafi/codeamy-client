import React from 'react';

const Blog04 = () => {
    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase sm:text-center">
                    Octaber 25, 2022
                </p>
                <div className="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-2xl">
                    <div className="mb-4">
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
                        <span className='text-xl font-bold mr-2'>Why Node?</span>
                        <span>
                            Per the Node.js homepage, Node “uses an event-driven, non-blocking I/O model.” In practice, this means that Node is built well to handle asynchronous JavaScript code to perform many asynchronous activities such as reading and writing to the file system, handling connections to database servers, or handling requests as a web server.
                            <br /> <br />
                            To handle asynchronous code, Node uses a callback-based system. Node functions and methods that will implement some asynchronous activity take a callback function. This callback will be called whenever the asynchronous operation has resolved. By convention, the first argument of this callback is an error placeholder. If an error occurred in the asynchronous operation occurred (trying to read a non-existent file, for example), the error argument will be an Error object, but it will be null if no error occurs.
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

export default Blog04;