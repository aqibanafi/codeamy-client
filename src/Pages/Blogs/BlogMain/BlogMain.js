import React from 'react';
import { Link } from 'react-router-dom';

const BlogMain = () => {
    return (
        <div className='mt-12 mb-20'>
            <h1 className='text-5xl font-bold text-center text-amber-500 mb-20'>Latest Blogs</h1>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 text-white'>
                <article className="flex flex-col bg-amber-600">
                    <Link rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                        <img alt="" className="object-cover w-full h-80 dark:bg-gray-500" src="https://i.ibb.co/5BbgpCR/What-is-CORS.webp" />
                    </Link>
                    <div className="flex flex-col flex-1 p-6">
                        <Link rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></Link>
                        <h3 className="flex-1 py-2 text-2xl font-semibold leading-snug mb-5">what is cors?</h3>
                        <p>CORS stands for Cross-Origin Resource Sharing . It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.</p>
                        <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-white">
                            <span>June 1, 2022</span>
                            <span>2.1K views</span>
                        </div>
                        <div className='flex justify-center mt-12'>
                            <Link to='/blog01'><button className="btn bg-white text-amber-800 hover:bg-amber-400 hover:text-black">Read More</button></Link>
                        </div>
                    </div>
                </article>

                <article className="flex flex-col bg-amber-600">
                    <Link rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                        <img alt="" className="object-cover w-full h-80 dark:bg-gray-500" src="https://i.ibb.co/3sTXscT/1-Jb-Do7-U0l62v-YMfm1-Wxn-A1g.png" />
                    </Link>
                    <div className="flex flex-col flex-1 p-6">
                        <Link rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></Link>
                        <h3 className="flex-1 py-2 text-2xl font-semibold leading-snug">Why are you using firebase? What other options do you have to implement authentication?</h3>
                        <p>Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together.</p>
                        <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-white">
                            <span>August 1, 2022</span>
                            <span>4.2K views</span>
                        </div>
                        <div className='flex justify-center mt-12'>
                            <Link to='/blog02'><button className="btn bg-white text-amber-800 hover:bg-amber-400 hover:text-black">Read More</button></Link>
                        </div>
                    </div>
                </article>

                <article className="flex flex-col bg-amber-600">
                    <Link rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                        <img alt="" className="object-cover w-full h-80 dark:bg-gray-500" src="https://i.ibb.co/YXMjtrz/maxresdefault.jpg" />
                    </Link>
                    <div className="flex flex-col flex-1 p-6">
                        <Link rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></Link>
                        <h3 className="flex-1 py-2 text-2xl font-semibold leading-snug">How does the private route work?</h3>
                        <p>The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.</p>
                        <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-white">
                            <span>September 20, 2022</span>
                            <span>4K views</span>
                        </div>
                        <div className='flex justify-center mt-12'>
                            <Link to='/blog03'><button className="btn bg-white text-amber-800 hover:bg-amber-400 hover:text-black">Read More</button></Link>
                        </div>
                    </div>
                </article>

                <article className="flex flex-col bg-amber-600">
                    <Link rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                        <img alt="" className="object-cover w-full h-80 dark:bg-gray-500" src="https://i.ibb.co/pd4yhCP/nodejs-use-cases-cover-image.png" />
                    </Link>
                    <div className="flex flex-col flex-1 p-6">
                        <Link rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></Link>
                        <h3 className="flex-1 py-2 text-2xl font-semibold leading-snug">What is Node? How does Node work?</h3>
                        <p>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
                        <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-white">
                            <span>Octaber 25, 2022</span>
                            <span>3.9K views</span>
                        </div>
                        <div className='flex justify-center mt-12'>
                            <Link to='/blog04'><button className="btn bg-white text-amber-800 hover:bg-amber-400 hover:text-black">Read More</button></Link>
                        </div>
                    </div>
                </article>
            </div>
        </div>

    );
};

export default BlogMain;