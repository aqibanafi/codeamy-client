import React from 'react';
import {FaCheckSquare } from 'react-icons/fa';

const Blog02 = () => {
    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <p className="font-medium">
                August 1, 2022
                </p>
                <div>
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
                    <span className='flex items-center'>
                    <FaCheckSquare className='text-lg items-center mr-3'></FaCheckSquare>
                    Analytics – Google Analytics for Firebase offers free, unlimited reporting on as many as 500 separate events. Analytics presents data about user behavior in iOS and Android apps, enabling better decision-making about improving performance and app marketing.
                    </span>
                    <span className='flex items-center'>
                    <FaCheckSquare className='text-lg items-center mr-3'></FaCheckSquare>
                    Authentication – Firebase Authentication makes it easy for developers to build secure authentication systems and enhances the sign-in and onboarding experience for users. This feature offers a complete identity solution, supporting email and password accounts, phone auth, as well as Google, Facebook, GitHub, Twitter login and more.
                    </span>
                    <span className='flex items-center'>
                    <FaCheckSquare className='text-sm items-center mr-3'></FaCheckSquare>
                    Cloud messaging – Firebase Cloud Messaging (FCM) is a cross-platform messaging tool that lets companies reliably receive and deliver messages on iOS, Android and the web at no cost.
                    </span>
                    <span className='flex items-center'>
                    <FaCheckSquare className='text-lg items-center mr-3'></FaCheckSquare>
                    Realtime database – the Firebase Realtime Database is a cloud-hosted NoSQL database that enables data to be stored and synced between users in real time. The data is synced across all clients in real time and is still available when an app goes offline.
                    </span>
                    <img className='mt-12 mb-12' src="https://i.ibb.co/3sTXscT/1-Jb-Do7-U0l62v-YMfm1-Wxn-A1g.png" alt="" />
                    <span className='text-2xl font-bold mt-5'>Firebase Alternatives:</span>
                    <span>
                        <ul className='mt-5'>
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
            </div>
        </div>
    );
};

export default Blog02;