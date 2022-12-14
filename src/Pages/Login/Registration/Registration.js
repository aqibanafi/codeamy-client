import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import Logo from '../../../logo.png'
import reader from '../../../asset/112454-form-registration.json'
import Lottie from "lottie-react";

const Registration = () => {
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);
    const { createUser, updateUserProfile, verifyEmail, googleProviderLogin, githubProviderLogin } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                navigate('/login')
                handleUpdateUserProfile(name, photoURL);
                handleEmailVerification();
                toast.success('Verification sent! Please verify your email address')
                toast.success("Successfully Created Account!")
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            });
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }

    const handleEmailVerification = () => {
        verifyEmail()
            .then(() => { })
            .catch(error => console.error(error));
    }

    const handleAccepted = event => {
        setAccepted(event.target.checked)
    }

    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignUp = () => {
        googleProviderLogin(googleProvider)
        .then(result => {
            const user = result.user;
            toast.success("Successfully Signed up!")
        })
        .catch(error => {
            setError(error)
            console.error(error)
        })
    }

    const githubProvider = new GithubAuthProvider()

    const handleGithubSignUp = () => {
        githubProviderLogin(githubProvider)
        .then(result => {
            const user = result.user;
            toast.success("Successfully Signed up!")
        })
        .catch(error => {
            setError(error)
            console.error(error)
        })
    }

    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-center'>
                <div className="w-full flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                    <div className="w-full max-w-md space-y-8">
                        <div>
                            <img
                                className="mx-auto h-12 w-auto"
                                src={Logo}
                                alt="Your Company"
                            />
                            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                                Please Registration To Get Admission
                            </h2>
                            <p className="mt-2 text-center text-sm text-gray-600">
                                Or{' '}
                                <Link to='/trial' className="font-medium text-amber-500 hover:text-amber-700">
                                    start your 14-day free trial
                                </Link>
                            </p>
                        </div>
                        <div>
                            <p className='mb-5 font-bold text-center'>Sign up with</p>
                            <div className='flex flex-wrap justify-center gap-5'>
                                <Link onClick={handleGoogleSignUp}>
                                    <div className='px-16 py-3 rounded-lg bg-slate-200'>
                                        <FaGoogle className='text-amber-500 font-bold text-2xl'></FaGoogle>
                                    </div>
                                </Link>
                                <Link onClick={handleGithubSignUp}>
                                    <div className='px-16 py-3 rounded-lg bg-slate-200'>
                                        <FaGithub className='text-amber-500 font-bold text-2xl'></FaGithub>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div>
                            <p className='text-center text-gray-400'>Or Continue with</p>
                        </div>
                        <form onSubmit={handleSubmit} className="mt-8 space-y-6" action="#" method="POST">
                            <input type="hidden" name="remember" defaultValue="true" />
                            <div className="-space-y-px rounded-md shadow-sm">
                                <div>
                                    <label htmlFor="email-address" className="sr-only">
                                        Full Name
                                    </label>
                                    <input
                                        name="name"
                                        type="text"
                                        autoComplete="name"
                                        required
                                        className="mb-5 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                        placeholder="Full name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email-address" className="sr-only">
                                        Email address
                                    </label>
                                    <input
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="mb-5 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                        placeholder="Email address"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email-address" className="sr-only">
                                        Photo URL
                                    </label>
                                    <input
                                        name="photoURL"
                                        type="text"
                                        autoComplete="photo"
                                        className="mb-5 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                        placeholder="Photo URL"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="sr-only">
                                        Password
                                    </label>
                                    <input
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                        placeholder="*******"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <div onClick={handleAccepted} className="flex items-center">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                        Accept <Link to='/termsnconditions' className='text-amber-500'>Terms & Conditions</Link>
                                    </label>
                                </div>

                                <div className="text-sm">
                                    <div href="#" className="font-normal">
                                        Already Sign Up? Please <Link to='/login' className='text-amber-500'>Sign in</Link>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className='text-red-600'>{error}</p>
                            </div>
                            <div>
                                <button
                                    disabled={!accepted}
                                    type="submit"
                                    className="group relative flex w-full justify-center rounded-md border border-transparent bg-amber-600 py-2 text-white font-bold hover:bg-amber-800"
                                >
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    </span>
                                    Sign Up
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='w-3/5'>
                    <Lottie animationData={reader} loop={true}></Lottie>
                </div>
            </div>

        </div>
    );
};

export default Registration;