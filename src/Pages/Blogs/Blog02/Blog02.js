import React from 'react';
import {FaCheckSquare } from 'react-icons/fa';

const Blog02 = () => {
    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase sm:text-center">
                August 1, 2022
                </p>
                <div className="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-2xl">
                    <div className="mb-4">
                        <p
                            aria-label="Article"
                            className="inline-block max-w-lg font-sans text-3xl font-extrabold leading-none tracking-tight text-black transition-colors duration-200 hover:text-deep-purple-accent-700 sm:text-4xl"
                        >
                            Why are you using firebase? What other options do you have to implement authentication?
                        </p>
                    </div>
                    <p className="text-base text-gray-700 md:text-lg">
                    Google Firebase is a Google-backed application development software that enables developers to develop iOS, Android and Web apps. Firebase provides tools for tracking analytics, reporting and fixing app crashes, creating marketing and product experiment.
                    <br /> <br />
                    Firebase offers a number of services, including: <br />
                    <span className='flex'>
                    <FaCheckSquare className='text-4xl items-center'></FaCheckSquare>
                    Analytics – Google Analytics for Firebase offers free, unlimited reporting on as many as 500 separate events. Analytics presents data about user behavior in iOS and Android apps, enabling better decision-making about improving performance and app marketing.
                    </span>
                    <span className='flex'>
                    <FaCheckSquare className='text-5xl items-center'></FaCheckSquare>
                    Authentication – Firebase Authentication makes it easy for developers to build secure authentication systems and enhances the sign-in and onboarding experience for users. This feature offers a complete identity solution, supporting email and password accounts, phone auth, as well as Google, Facebook, GitHub, Twitter login and more.
                    </span>
                    <span className='flex'>
                    <FaCheckSquare className='text-2xl items-center'></FaCheckSquare>
                    Cloud messaging – Firebase Cloud Messaging (FCM) is a cross-platform messaging tool that lets companies reliably receive and deliver messages on iOS, Android and the web at no cost.
                    </span>
                    <span className='flex'>
                    <FaCheckSquare className='text-4xl items-center'></FaCheckSquare>
                    Realtime database – the Firebase Realtime Database is a cloud-hosted NoSQL database that enables data to be stored and synced between users in real time. The data is synced across all clients in real time and is still available when an app goes offline.
                    </span>
                    <span className='text-2xl font-bold'>Firebase Alternatives:</span>
                    <span>
                        <ul className='mt-10'>
                            <li className='flex items-center gap-5'><FaCheckSquare></FaCheckSquare>Kuzzle</li>
                            <li className='flex items-center gap-5'><FaCheckSquare></FaCheckSquare>Pubnub</li>
                            <li className='flex items-center gap-5'><FaCheckSquare></FaCheckSquare>Kumulos</li>
                            <li className='flex items-center gap-5'><FaCheckSquare></FaCheckSquare>Appwrite</li>
                            <li className='flex items-center gap-5'><FaCheckSquare></FaCheckSquare>Deployd</li>
                            <li className='flex items-center gap-5'><FaCheckSquare></FaCheckSquare>NHost</li>
                            <li className='flex items-center gap-5'><FaCheckSquare></FaCheckSquare>AWS Amplify</li>
                        </ul>
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

export default Blog02;