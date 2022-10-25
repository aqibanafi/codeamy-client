import React from 'react';

const Blog01 = () => {
    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <p className='font-medium'>
                    June 1, 2022
                </p>
                <div className="">
                    <div className="mb-4">
                        <p
                            aria-label="Article"
                            className="inline-block max-w-lg font-sans text-3xl font-extrabold leading-none tracking-tight text-black transition-colors duration-200 hover:text-deep-purple-accent-700 sm:text-4xl"
                        >
                            what is cors?
                        </p>
                    </div>
                    <p className="text-base text-gray-700 md:text-lg">
                        Node.js is an open-source and cross-platform runtime used when executing JavaScript code on the server-side. One of the popular Node.js server frameworks is Express. Implementing CORS in Node.js helps you access numerous functionalities on the browser.
                        <br /> <br />
                        <img className='mb-10' src="https://i.ibb.co/5BbgpCR/What-is-CORS.webp" alt="" />
                        Today, there are many applications that depend on APIs to access different resources. Some of the popular APIs include weather, time, and fonts. There are also servers that host these APIs and ensure that information is delivered to websites and other end points. Therefore, making cross-origin calls, is a popular use case for the modern web application.
                        <br /> <br />
                        Let’s say accessing images, videos, iframes, or scripts from another server. This means that the website is accessing resources from a different origin or domain. When building an application to serve up these resources with Express, a request to such external origins may fail. This is where CORS comes in to handle cross-origin requests.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog01;