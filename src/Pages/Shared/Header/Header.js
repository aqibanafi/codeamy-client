import React, { useContext, useState } from 'react';
import { Link,  NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa';
import toast from 'react-hot-toast';
import ReactTooltip from "react-tooltip";
import Logo from '../../../logo.png'
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import ProfileTooltop from '../../ProfileTooltip/ProfileTooltop';


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const [isDarkMode, setDarkMode] = React.useState(false);

    const toggleDarkMode = (checked: boolean) => {
        setDarkMode(checked);
    };

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
                            <span class="ml-5 text-xl font-bold hidden md:block tracking-wide text-gray-100 uppercase">
                                Codeamy
                            </span>
                        </Link>
                        <ul class="flex items-center hidden space-x-8 lg:flex">
                            <li>
                                <NavLink
                                className={({ isActive }) =>
                                isActive  ? "bg-slate-100 py-3 px-3 rounded font-bold" : "text-white hover:text-black"
                                }
                                    to='/courses'
                                    aria-label="Our product"
                                    title="Our product"
                                    class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                                >
                                    Courses
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                className={({ isActive }) =>
                                isActive  ? "bg-slate-100 py-3 px-3 rounded font-bold" : "text-white hover:text-black"
                                }
                                    to='/blogs'
                                    aria-label="Our product"
                                    title="Our product"
                                    class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                                >
                                    Blogs
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                className={({ isActive }) =>
                                isActive  ? "bg-slate-100 py-3 px-3 rounded font-bold" : "text-white hover:text-black"
                                }
                                    to='/frequently-asked-questions'
                                    aria-label="Product pricing"
                                    title="Product pricing"
                                    class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                                >
                                    FAQ
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                className={({ isActive }) =>
                                isActive  ? "bg-slate-100 py-3 px-3 rounded font-bold" : "text-white hover:text-black"
                                }
                                    to='/aboutus'
                                    aria-label="About us"
                                    title="About us"
                                    class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                                >
                                    About us
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <>
                        <div className='flex gap-10'>
                            {
                                user?.uid ?
                                    <>
                                        <div className='flex items-center gap-5'>
                                            <span className='text-white font-bold text-xl hidden lg:block'>Welcome, {user?.displayName}</span>
                                            <Link to="/profile">
                                                {user?.photoURL ?
                                                    <div>
                                                        <Link to='/profile' data-tip data-for="registerTip"><img className='h-10 w-10 rounded-full' src={user?.photoURL}></img></Link>

                                                        <ReactTooltip id="registerTip" place="top" effect="solid">
                                                            <ProfileTooltop></ProfileTooltop>
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
                                        <Link to='/login'><button className="btn glass">Sign in</button></Link>
                                        <Link to='/registration'><button className="btn glass">Sign up</button></Link>
                                    </>
                            }
                        </div>
                    </>
                    <DarkModeSwitch
                        style={{ marginBottom: '2rem' }}
                        className='mt-5 hidden lg:block'
                        checked={isDarkMode}
                        onChange={toggleDarkMode}
                        size={30}
                    />
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
                                                <img src={Logo} alt="" />
                                                <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                                                    Codeamy
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
                                                    to='/courses'
                                                    aria-label="Our product"
                                                    title="Our product"
                                                    class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    Courses
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to='/blogs'
                                                    aria-label="Our product"
                                                    title="Our product"
                                                    class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    Blogs
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to='/frequently-asked-questions'
                                                    aria-label="Product pricing"
                                                    title="Product pricing"
                                                    class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    FAQ
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to='/aboutus'
                                                    aria-label="About us"
                                                    title="About us"
                                                    class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    About us
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to='/login'
                                                    aria-label="Sign in"
                                                    title="Sign in"
                                                    class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    Sign in
                                                </Link>

                                            </li>
                                            <li>
                                                <Link
                                                    to='/registration'
                                                    aria-label="Sign in"
                                                    title="Sign in"
                                                    class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    Sign up
                                                </Link>

                                            </li>
                                            <li>

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