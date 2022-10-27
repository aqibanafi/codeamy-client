import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import reader from '../../../asset/72874-user-profile-v2.json'
import Lottie from "lottie-react";
import Logo from '../../../logo.png'

const Login = () => {
    const [error, setError] = useState('');
    const [email, setEmail] = useState(null)
    const { signIn, setLoading, googleProviderLogin, githubProviderLogin, resetPassword } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                toast.success("Successfully Logged in!")
                setError('');
                if (user.emailVerified) {
                    navigate(from, { replace: true });
                }
                else {
                    toast.error('Your Email is not Verified! Please Verify Your Email Before Login')
                }
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    const getEmail = event => {
        event.preventDefault();
        setEmail(event.target.value)
    }

    const handleResetPassword = () => {
        resetPassword(email)
            .then(() => {
                toast.success("Password Reset Link Sent!")
            })
            .catch(error => {
                setError(error)
                console.error(error)
            })
    }

    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    const handleGoogleSignIn = () => {
        googleProviderLogin(googleProvider)
            .then(result => {
                toast.success("Successfully Logged in!")
                const user = result.user;
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error)
                console.error(error)
            })
    }

    const handleGithubSignIn = () => {
        githubProviderLogin(githubProvider)
            .then(result => {
                toast.success("Successfully Logged in!")
                const user = result.user;
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
                                Please Log in To Get All Access
                            </h2>
                            <p className="mt-2 text-center text-sm text-gray-600">
                                Or{' '}
                                <Link to='/trial' className="font-medium text-amber-500 hover:text-amber-700">
                                    start your 14-day free trial
                                </Link>
                            </p>
                        </div>
                        <div>
                            <p className='mb-3 font-bold'>Sign in with</p>
                            <div className='flex flex-wrap gap-5'>
                                <Link onClick={handleGoogleSignIn}>
                                    <div className='px-16 py-3 rounded-lg bg-slate-200'>
                                        <FaGoogle className='text-gray-600 font-bold'></FaGoogle>
                                    </div>
                                </Link>
                                <Link onClick={handleGithubSignIn}>
                                    <div className='px-16 py-3 rounded-lg bg-slate-200'>
                                        <FaGithub className='text-gray-600 font-bold'></FaGithub>
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
                                        Email address
                                    </label>
                                    <input
                                        name="email"
                                        onBlur={getEmail}
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="mb-5 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                        placeholder="Email address"
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
                                <div className="flex items-center justify-between">
                                    <div className='flex items-center'>
                                        <input
                                            id="remember-me"
                                            name="remember-me"
                                            type="checkbox"
                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                        />
                                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                            Remember me?
                                        </label>
                                    </div>

                                    <div>
                                        <Link onClick={handleResetPassword}><p><small>Forget Password?</small></p></Link>
                                    </div>
                                </div>
                                <div>
                                    <Link><p><small>Forget Password?</small></p></Link>
                                </div>

                                <div className="text-sm">
                                    <div href="#" className="font-normal">
                                        New to this website? Please <Link to='/registration' className='text-amber-500'>Register</Link>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className='text-red-600'>{error}</p>
                            </div>
                            <button
                                type="submit"
                                className="group relative flex w-full justify-center rounded-md border border-transparent bg-amber-600 py-2 text-white font-bold hover:bg-amber-800"
                            >
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                </span>
                                Log in
                            </button>
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

export default Login;