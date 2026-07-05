'use client';

import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import registerValidationSchema from '@/validators/registerValidationSchema';

export default function RegisterForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(registerValidationSchema),
    });

    const handleOnSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="mx-auto w-full max-w-[500px] px-5 md:px-10">
            <div className="flex flex-col items-center justify-center gap-y-4">
                <h1 className="text-center text-[32px] leading-[36px] font-semibold text-white">
                    Create your free account
                </h1>
                <p className="text-center text-sm text-gray-400">
                    Find, book, and play at the best venues near you. No hidden
                    fees.
                </p>
            </div>
            <div className="mt-12 w-full">
                <button className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-gray-900 py-2.5 transition-colors duration-200 ease-linear hover:border-gray-800 hover:bg-gray-900">
                    <FcGoogle size={20} />
                    <span className="text-base font-medium text-white">
                        Continue with Google
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
                        <div className="flex items-center justify-center gap-x-4">
                            <label htmlFor="name" className="block w-full">
                                <input
                                    id="name"
                                    type="text"
                                    aria-label="input"
                                    role="input"
                                    autoComplete="off"
                                    placeholder="Your name"
                                    {...register('name')}
                                    className={`w-full rounded-2xl border-2 px-4 py-3 text-base font-medium text-white caret-white transition-all duration-200 ease-linear outline-none placeholder:font-extralight placeholder:text-gray-50/50 ${errors.name?.message ? 'border-red-500 bg-red-500/10' : 'border-transparent bg-gray-900/50 focus:border-white'}`}
                                />
                                <span className="my-1 block h-4 text-xs text-red-400">
                                    {errors && errors.name?.message}
                                </span>
                            </label>
                            <label htmlFor="photo" className="block w-full">
                                <input
                                    id="photo"
                                    type="text"
                                    aria-label="input"
                                    role="input"
                                    autoComplete="off"
                                    placeholder="Photo url"
                                    {...register('photo')}
                                    className={`w-full rounded-2xl border-2 px-4 py-3 text-base font-medium text-white caret-white transition-all duration-200 ease-linear outline-none placeholder:font-extralight placeholder:text-gray-50/50 ${errors.photo?.message ? 'border-red-500 bg-red-500/10' : 'border-transparent bg-gray-900/50 focus:border-white'}`}
                                />
                                <span className="my-1 block h-4 text-xs text-red-400">
                                    {errors && errors.photo?.message}
                                </span>
                            </label>
                        </div>
                        <label htmlFor="email" className="block w-full">
                            <input
                                id="email"
                                type="text"
                                aria-label="input"
                                role="input"
                                autoComplete="off"
                                placeholder="Email address"
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
                Already have an account?{' '}
                <Link
                    href={'/auth/login'}
                    className="font-medium transition-colors duration-200 ease-linear hover:text-green-500 hover:underline"
                >
                    Login
                </Link>
            </p>
        </div>
    );
}
