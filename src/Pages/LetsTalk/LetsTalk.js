import React from 'react';

const LetsTalk = () => {
    return (
        <div className='mb-20'>
            <div className="grid max-w-screen-xl grid-cols-1 gap-12 px-8 py-16 mx-auto rounded-lg items-center md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-slate-100 text-black">
                <div className="flex flex-col justify-between">
                    <div className="space-y-2">
                        <h2 className="text-4xl text-amber-700 font-bold leading-tight lg:text-5xl">Let's talk!</h2>
                        <div className=" text-amber-500">Share what you want to say...</div>
                    </div>
                    <img src="https://i.ibb.co/y8vDqFq/letstalk.png" alt="" className="" />
                </div>
                <form novalidate="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div>
                        <label for="name" className="text-sm">Full name</label>
                        <input id="name" type="text" placeholder="" className="w-full p-3 rounded bg-amber-700" />
                    </div>
                    <div>
                        <label for="email" className="text-sm">Email</label>
                        <input id="email" type="email" className="w-full p-3 rounded bg-amber-700" />
                    </div>
                    <div>
                        <label for="message" className="text-sm">Message</label>
                        <textarea id="message" rows="3" className="w-full p-3 rounded bg-amber-700"></textarea>
                    </div>
                    <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-amber-600 text-white hover:bg-amber-800">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default LetsTalk;