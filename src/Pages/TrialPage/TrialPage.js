import React from 'react';
import { Link } from 'react-router-dom';

const TrialPage = () => {
    return (
        <div className='mt-20 mb-20'>
            <div className="p-6 container md:w-2/3 xl:w-auto mx-auto  flex flex-col xl:items-stretch justify-between xl:flex-row">
                <div>
                    <button className="flex flex-row items-center mb-5 text-amber-500 font-bold hover:text-amber-900 space-x-1">
                        <svg className="fill-stroke" width="20" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.91681 7H11.0835" stroke="currentColor" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M2.91681 7L5.25014 9.33333" stroke="currentColor" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M2.91681 7.00002L5.25014 4.66669" stroke="currentColor" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <Link to='/'><p className="text-sm leading-none">Home</p></Link>
                    </button>
                </div>
                <div className="xl:w-1/2 md:mb-14 xl:mb-0 relative h-auto flex items-center justify-center">
                    <img src="https://i.ibb.co/6JpfgN0/subscribe.jpg" alt="Envelope with a newsletter" role="img" className="h-full xl:w-full lg:w-1/2 w-full " />
                </div>
                <div className="w-full xl:w-1/2 xl:pl-40 xl:py-28 ">
                    <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold leading-10 text-gray-800 mb-4 text-center xl:text-left md:mt-0 mt-4">Subscribe for 14 Days Trial</h1>
                    <p className="text-base leading-normal text-gray-600 text-center xl:text-left">Get 14 days free trial and pick our service so that you can make decision about our courses.</p>
                    <div className="flex items-stretch mt-12">
                        <input className="bg-gray-100 rounded-lg rounded-r-none text-base leading-none text-gray-800 p-5 w-4/5 border border-transparent focus:outline-none focus:border-gray-500" type="email" placeholder="Your Email" />
                        <button className="w-32 rounded-l-none bg-amber-600 hover:bg-amber-700 rounded text-base font-medium leading-none text-white p-5 uppercase focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700">subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrialPage;