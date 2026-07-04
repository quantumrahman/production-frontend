'use client';

import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import loginValidationSchema from '@/validators/loginValidationSchema';

export default function LoginForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(loginValidationSchema),
    });

    const handleOnSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="mx-auto w-full max-w-[500px] px-5 lg:px-10">
            <h1 className="text-center text-[32px] leading-[36px] font-semibold text-white">
                Welcome back
            </h1>
            <div className="mt-12 w-full">
                <button className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-gray-900 py-2.5 transition-colors duration-200 ease-linear hover:border-gray-800 hover:bg-gray-900">
                    <FcGoogle size={20} />
                    <span className="text-base font-medium text-white">
                        Continue with Goolge
                    </span>
                </button>
            </div>
            <div className="my-5 flex w-full items-center justify-center gap-3">
                <div className="h-px w-full bg-gray-900"></div>
                <span className="text-sm font-medium text-gray-400">or</span>
                <div className="h-px w-full bg-gray-900"></div>
            </div>
            <div className="w-full">
                <form onSubmit={handleSubmit(handleOnSubmit)}>
                    <div className="w-full">
                        <label htmlFor="email" className="block w-full">
                            <input
                                id="email"
                                type="text"
                                aria-label="input"
                                role="input"
                                autoComplete="off"
                                placeholder="Enter email address"
                                {...register('email')}
                                className={`w-full rounded-2xl border-2 px-4 py-3 text-base font-medium text-white caret-white transition-all duration-200 ease-linear outline-none placeholder:font-extralight placeholder:text-gray-50/50 ${errors.email?.message ? 'border-red-500 bg-red-500/10' : 'border-transparent bg-gray-900/50 focus:border-white'}`}
                            />
                            <span className="my-1 block h-4 text-xs text-red-400">
                                {errors && errors.email?.message}
                            </span>
                        </label>
                        <label htmlFor="password" className="block w-full">
                            <input
                                id="password"
                                type="password"
                                aria-label="input"
                                role="input"
                                autoComplete="off"
                                placeholder="Password"
                                {...register('password')}
                                className={`w-full rounded-2xl border-2 px-4 py-3 text-base font-medium text-white caret-white transition-all duration-200 ease-linear outline-none placeholder:font-extralight placeholder:text-gray-50/50 ${errors.password?.message ? 'border-red-500 bg-red-500/10' : 'border-transparent bg-gray-900/50 focus:border-white'}`}
                            />
                            <span className="my-1 block h-4 text-xs text-red-400">
                                {errors && errors.password?.message}
                            </span>
                        </label>
                        <button className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-green-500 bg-green-500 py-2.5 transition-colors duration-200 ease-linear hover:border-green-600 hover:bg-green-600">
                            <span className="text-base font-medium text-white">
                                Continue
                            </span>
                        </button>
                    </div>
                </form>
            </div>
            <p className="mt-8 text-center text-sm text-gray-400">
                You have no account?{' '}
                <Link
                    href={'/auth/register'}
                    className="font-medium transition-colors duration-200 ease-linear hover:text-green-500 hover:underline"
                >
                    Register
                </Link>
            </p>
        </div>
    );
}
