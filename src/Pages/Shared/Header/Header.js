import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa';
import toast from 'react-hot-toast';
import ReactTooltip from "react-tooltip";
import UserProfile from '../../UserProfile/UserProfile';
import Logo from '../../../logo.png'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/')
            })
        toast.error("You Signed Out!")
            .catch(error => console.error(error))
    }

    return (
        <div class="bg-amber-700">
            <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div class="relative flex items-center justify-between">
                    <div class="flex items-center">
                        <Link
                            to='/'
                            aria-label="Company"
                            title="Company"
                            class="inline-flex items-center mr-8"
                        >
                            <img src={Logo} alt="" />
                            <span class="ml-5 text-xl font-bold tracking-wide text-gray-100 uppercase">
                                Codeamy
                            </span>
                        </Link>
                        <ul class="flex items-center hidden space-x-8 lg:flex">
                            <li>
                                <Link
                                    to='/courses'
                                    aria-label="Our product"
                                    title="Our product"
                                    class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                                >
                                    Courses
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/blogs'
                                    aria-label="Our product"
                                    title="Our product"
                                    class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                                >
                                    Blogs
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/frequently-asked-questions'
                                    aria-label="Product pricing"
                                    title="Product pricing"
                                    class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                                >
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/aboutus'
                                    aria-label="About us"
                                    title="About us"
                                    class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                                >
                                    About us
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <>
                        <div className='flex gap-10'>
                            {
                                user?.uid ?
                                    <>
                                        <div className='flex items-center gap-5'>
                                            <span className='text-white font-bold text-xl'>Hello, {user?.displayName}</span>
                                            <Link to="/profile">
                                                {user?.photoURL ?
                                                    <div>
                                                        <Link to='/profile' data-tip data-for="registerTip"><img className='h-10 w-10 rounded-full' src={user?.photoURL}></img></Link>

                                                        <ReactTooltip id="registerTip" place="top" effect="solid">
                                                            <UserProfile></UserProfile>
                                                        </ReactTooltip>
                                                    </div>
                                                    :
                                                    <FaUser></FaUser>
                                                }
                                            </Link>
                                        </div>

                                        <button onClick={handleLogOut} className="btn glass">Sign out</button>
                                    </>
                                    :
                                    <>
                                        <Link to='/login'><button className="btn glass">Login</button></Link>
                                        <Link to='/registration'><button className="btn glass">Sign up</button></Link>
                                    </>
                            }
                        </div>
                    </>
                    <div class="lg:hidden z-10">
                        <button
                            aria-label="Open Menu"
                            title="Open Menu"
                            class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                />
                            </svg>
                        </button>
                        {isMenuOpen && (
                            <div class="absolute top-0 left-0 w-full">
                                <div class="p-5 bg-white border rounded shadow-sm">
                                    <div class="flex items-center justify-between mb-4">
                                        <div>
                                            <Link
                                                to='/'
                                                aria-label="Company"
                                                title="Company"
                                                class="inline-flex items-center"
                                            >
                                                <svg
                                                    class="w-8 text-deep-purple-accent-400"
                                                    viewBox="0 0 24 24"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeMiterlimit="10"
                                                    stroke="currentColor"
                                                    fill="none"
                                                >
                                                    <rect x="3" y="1" width="7" height="12" />
                                                    <rect x="3" y="17" width="7" height="6" />
                                                    <rect x="14" y="1" width="7" height="6" />
                                                    <rect x="14" y="11" width="7" height="12" />
                                                </svg>
                                                <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                                                    Company
                                                </span>
                                            </Link>
                                        </div>
                                        <div>
                                            <button
                                                aria-label="Close Menu"
                                                title="Close Menu"
                                                class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                                                    <path
                                                        fill="currentColor"
                                                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <nav>
                                        <ul class="space-y-4">
                                            <li>
                                                <Link
                                                    to='/'
                                                    aria-label="Our product"
                                                    title="Our product"
                                                    class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    Product
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to='/'
                                                    aria-label="Our product"
                                                    title="Our product"
                                                    class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    Features
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to='/'
                                                    aria-label="Product pricing"
                                                    title="Product pricing"
                                                    class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    Pricing
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to='/'
                                                    aria-label="About us"
                                                    title="About us"
                                                    class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    About us
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to='/'
                                                    aria-label="Sign in"
                                                    title="Sign in"
                                                    class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    Sign in
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to='/'
                                                    class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                                    aria-label="Sign up"
                                                    title="Sign up"
                                                >
                                                    Sign up
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;