import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PremiumAccessForm = () => {
    const courseData = useLoaderData();
    const { title, detail } = courseData;
    return (
        <div className=' bg-white container mx-auto'>
            <h1 className='text-3xl font-bold text-white text-center mb-3 pt-10'>Purchase Course: <span className='text-amber-500 text-4xl'>{title}</span></h1>
            <p className='font-medium text-center text-black'>{detail}</p>
            <div className='mb-20'>
                <section className="p-6 bg-white dark:text-gray-50">
                    <form novalidate="" action="" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
                        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-amber-800">
                            <div className="space-y-2 col-span-full lg:col-span-1">
                                <p className="font-medium">Personal Inormation</p>
                            </div>
                            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                                <div className="col-span-full sm:col-span-3">
                                    <label for="firstname" className="text-sm">First name</label>
                                    <input id="firstname" type="text" placeholder="First name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label for="lastname" className="text-sm">Last name</label>
                                    <input id="lastname" type="text" placeholder="Last name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label for="email" className="text-sm">Email</label>
                                    <input id="email" type="email" placeholder="Email" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                                </div>
                                <div className="col-span-full">
                                    <label for="address" className="text-sm">Address</label>
                                    <input id="address" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                                </div>
                                <div className="col-span-full sm:col-span-2">
                                    <label for="city" className="text-sm">City</label>
                                    <input id="city" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                                </div>
                                <div className="col-span-full sm:col-span-2">
                                    <label for="state" className="text-sm">State / Province</label>
                                    <input id="state" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                                </div>
                                <div className="col-span-full sm:col-span-2">
                                    <label for="zip" className="text-sm">ZIP / Postal</label>
                                    <input id="zip" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                                </div>
                            </div>
                        </fieldset>
                        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-amber-800">
                            <div className="space-y-2 col-span-full lg:col-span-1">
                                <p className="font-medium">Profile</p>
                            </div>
                            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                                <div className="col-span-full sm:col-span-3">
                                    <label for="username" className="text-sm">Username</label>
                                    <input id="username" type="text" placeholder="Username" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label for="website" className="text-sm">Website</label>
                                    <input id="website" type="text" placeholder="https://" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                                </div>
                                <div className="col-span-full">
                                    <label for="bio" className="text-sm">Bio</label>
                                    <textarea id="bio" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"></textarea>
                                </div>
                                <div className="col-span-full">
                                    <label for="bio" className="text-sm">Photo</label>
                                    <div className="flex items-center space-x-2">
                                        <img src="https://source.unsplash.com/30x30/?random" alt="" className="w-10 h-10 rounded-full dark:bg-gray-500 dark:bg-gray-700" />
                                        <button type="button" className="px-4 py-2 border rounded-md dark:border-gray-100">Change</button>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </section>
                <div className='flex justify-center mt-10'>
                    <button className="btn btn-wide bg-amber-700 text-white hover:bg-amber-900">Complete Order</button>
                </div>
            </div>
        </div>
    );
};

export default PremiumAccessForm;