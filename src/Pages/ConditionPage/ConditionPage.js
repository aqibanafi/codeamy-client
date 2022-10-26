import React from 'react';
import { Link } from 'react-router-dom';

const ConditionPage = () => {
    return (
        <div>
            <section className="dark:bg-white dark:text-black">
                <div className="container max-w-5xl px-4 py-12 mx-auto">
                    <div className="grid gap-4 mx-4 sm:grid-cols-12">
                        <div className="col-span-12 sm:col-span-3">
                        <button className="flex flex-row items-center mb-5 text-amber-500 font-bold hover:text-amber-900 space-x-1">
                            <svg className="fill-stroke" width="20" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.91681 7H11.0835" stroke="currentColor" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2.91681 7L5.25014 9.33333" stroke="currentColor" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2.91681 7.00002L5.25014 4.66669" stroke="currentColor" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <Link to='/'><p className="text-sm leading-none">Home</p></Link>
                        </button>
                            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-amber-500">
                                <h3 className="text-3xl font-semibold">Terms and Conditions</h3>
                            </div>
                        </div>
                        <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-amber-500">
                                    <h3 className="text-xl font-semibold tracking-wide">What Data We Get </h3>
                                    <time className="text-xs tracking-wide uppercase dark:text-gray-400">Oct 2022</time>
                                    <p className="mt-3">We collect certain data from you directly, like information you enter yourself, data about your consumption of content, and data from third-party platforms you connect with Udemy. We also collect some data automatically, like information about your device and what parts of our Services you interact with or spend time using. All data listed in this section is subject to the following processing activities: collecting, recording, structuring, storing, altering, retrieving, encrypting, pseudonymizing, erasing, combining, and transmitting.</p>
                                </div>
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-amber-500">
                                    <h3 className="text-xl font-semibold tracking-wide">How We Get Data About You</h3>
                                    <time className="text-xs tracking-wide uppercase dark:text-gray-400">Jul 2022</time>
                                    <p className="mt-3">We use cookies, which are small text files stored by your browser, to collect, store, and share data about your activities across websites, including on Udemy. They allow us to remember things about your visits to Udemy, like your preferred language, and to make the site easier to use. To learn more about cookies, visit https://cookiepedia.co.uk/all-about-cookies. We may also use clear pixels in emails to track deliverability and open rates.
                                        <br /> <br />
                                        Udemy and service providers acting on our behalf (like Google Analytics and third-party advertisers) use server log files and automated data collection tools like cookies, tags, scripts, customized links, device or browser fingerprints, and web beacons (together, “Data Collection Tools“) when you access and use the Services. These Data Collection Tools automatically track and collect certain System Data and Usage Data (as detailed in Section 1) when you use the Services. In some cases, we tie data gathered through those Data Collection Tools to other data that we collect as described in this Privacy Policy.</p>
                                </div>
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-amber-500">
                                    <h3 className="text-xl font-semibold tracking-wide">What We Use Your Data For</h3>
                                    <time className="text-xs tracking-wide uppercase dark:text-gray-400">Jan 2022</time>
                                    <p className="mt-3">We use your data to do things like provide our Services, communicate with you, troubleshoot issues, secure against fraud and abuse, improve and update our Services, analyze how people use our Services, serve personalized advertising, and as required by law or necessary for safety and integrity. We retain your data for as long as it is needed to serve the purposes for which it was collected.</p>
                                </div>
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-amber-500">
                                    <h3 className="text-xl font-semibold tracking-wide">Who We Share Your Data With</h3>
                                    <time className="text-xs tracking-wide uppercase dark:text-gray-400">Jan 2022</time>
                                    <p className="mt-3">We share certain data about you with instructors, other students, companies performing services for us, Udemy affiliates, our business partners, analytics and data enrichment providers, your social media providers, companies helping us run promotions and surveys, and advertising companies who help us promote our Services. We may also share your data as needed for security, legal compliance, or as part of a corporate restructuring. Lastly, we can share data in other ways if it is aggregated or de-identified or if we get your consent.</p>
                                </div>
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-amber-500">
                                    <h3 className="text-xl font-semibold tracking-wide">Security</h3>
                                    <time className="text-xs tracking-wide uppercase dark:text-gray-400">Sep 2022</time>
                                    <p className="mt-3">We use appropriate security based on the type and sensitivity of data being stored. As with any internet-enabled system, there is always a risk of unauthorized access, so it’s important to protect your password and to contact us if you suspect any unauthorized access to your account.</p>
                                </div>
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-amber-500">
                                    <h3 className="text-xl font-semibold tracking-wide">Your Rights</h3>
                                    <time className="text-xs tracking-wide uppercase dark:text-gray-400">Nov 2022</time>
                                    <p className="mt-3">You have certain rights around the use of your data, including the ability to opt out of promotional emails, cookies, and collection of your data by certain third parties. You can update or terminate your account from within our Services, and can also contact us for individual rights requests about your personal data. Parents who believe we’ve unintentionally collected personal data about their underage child should contact us for help deleting that information.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ConditionPage;