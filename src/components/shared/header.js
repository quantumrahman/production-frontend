'use client';

import Link from 'next/link';
import useUser from '@/hooks/useUser';
import Avatar from '../ui/Avatar';
import ClickAwayListener from '@mui/material/ClickAwayListener';

import { useState } from 'react';
import { authClient } from '@/lib/authClient';
import { MdLogout, MdClose } from 'react-icons/md';
import { HiMenuAlt4 } from 'react-icons/hi';

export default function Header() {
    const { session, isPending, refetch, error } = useUser();

    const [profileOpen, setProfileOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLogout = async () => {
        await authClient.signOut();
        refetch();
    };

    return (
        <div className="fixed top-0 left-0 z-30 w-full bg-transparent px-5 pt-2 md:px-10 md:pt-6">
            <header className="relative mx-auto flex h-[55px] w-full max-w-[800px] items-center justify-between rounded-xl bg-gray-100 px-5 md:px-6 md:py-2">
                <h1 className="text-xl font-bold tracking-tight text-gray-950 uppercase">
                    SportNest
                </h1>
                <nav className="hidden items-center justify-center gap-5 md:flex">
                    <Link
                        href={'/'}
                        className="text-base font-medium text-gray-950 transition-colors duration-200 ease-linear hover:text-gray-950/60"
                    >
                        Home
                    </Link>
                    <Link
                        href={'/facilities'}
                        className="text-base font-medium text-gray-950 transition-colors duration-200 ease-linear hover:text-gray-950/60"
                    >
                        Facilities
                    </Link>
                    {session ? (
                        <ClickAwayListener
                            onClickAway={() => setProfileOpen(false)}
                        >
                            <div className="relative">
                                <button
                                    onClick={() =>
                                        setProfileOpen((prev) => !prev)
                                    }
                                    className="group flex h-9 w-9 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-black/20 p-px transition-colors duration-200 ease-linear hover:border-black/30"
                                >
                                    <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full transition-colors duration-200 ease-linear group-hover:bg-black/5">
                                        <Avatar
                                            size={'md'}
                                            src={session?.user?.image}
                                        />
                                    </div>
                                </button>
                                <div
                                    className={`top-13 right-0 z-30 w-[200px] rounded-xl bg-gray-100 ${profileOpen ? 'absolute' : 'hidden'}`}
                                >
                                    <nav className="flex flex-col gap-y-2 px-4 py-2">
                                        <button
                                            onClick={() =>
                                                setProfileOpen((prev) => !prev)
                                            }
                                            className="w-fit"
                                        >
                                            <Link
                                                href={'/bookings'}
                                                className="font-medium text-gray-950 transition-colors duration-200 ease-linear hover:text-gray-950/60"
                                            >
                                                Bookings
                                            </Link>
                                        </button>
                                        <button
                                            onClick={() =>
                                                setProfileOpen((prev) => !prev)
                                            }
                                            className="w-fit"
                                        >
                                            <Link
                                                href={'/facility/create'}
                                                className="font-medium text-gray-950 transition-colors duration-200 ease-linear hover:text-gray-950/60"
                                            >
                                                Add facility
                                            </Link>
                                        </button>
                                        <button
                                            onClick={() =>
                                                setProfileOpen((prev) => !prev)
                                            }
                                            className="w-fit"
                                        >
                                            <Link
                                                href={'/manage/my/facilities'}
                                                className="font-medium text-gray-950 transition-colors duration-200 ease-linear hover:text-gray-950/60"
                                            >
                                                Manage facilities
                                            </Link>
                                        </button>
                                    </nav>
                                    <div className="mb-2 h-px w-full bg-black/5"></div>
                                    <button
                                        onClick={() => {
                                            (handleLogout(),
                                                setProfileOpen(
                                                    (prev) => !prev
                                                ));
                                        }}
                                        className="flex w-fit cursor-pointer items-center justify-center gap-1 px-4 pb-2 text-base font-medium text-red-600 transition-colors duration-200 ease-linear hover:text-red-500"
                                    >
                                        <MdLogout size={16} />
                                        <span>Log out</span>
                                    </button>
                                </div>
                            </div>
                        </ClickAwayListener>
                    ) : (
                        <>
                            <Link
                                href={'/auth/login'}
                                className="text-base font-medium text-gray-950 transition-colors duration-200 ease-linear hover:text-gray-950/60"
                            >
                                Login
                            </Link>
                        </>
                    )}
                </nav>
                <ClickAwayListener onClickAway={() => setMenuOpen(false)}>
                    <div className="block md:hidden">
                        <button
                            onClick={() => setMenuOpen((prev) => !prev)}
                            className="flex h-fit w-fit cursor-pointer items-center justify-center text-gray-950 md:hidden"
                        >
                            {menuOpen ? (
                                <MdClose size={22} />
                            ) : (
                                <HiMenuAlt4 size={22} />
                            )}
                        </button>
                        <div
                            className={`top-15 left-0 w-full rounded-xl bg-gray-100 p-5 ${menuOpen ? 'absolute' : 'hidden'}`}
                        >
                            <nav className="flex flex-col gap-y-5">
                                <Link
                                    href={'/'}
                                    className="w-fit text-base font-medium text-gray-950 transition-colors duration-200 ease-linear hover:text-gray-950/60"
                                >
                                    Home
                                </Link>
                                <Link
                                    href={'/facilities'}
                                    className="w-fit text-base font-medium text-gray-950 transition-colors duration-200 ease-linear hover:text-gray-950/60"
                                >
                                    Facilities
                                </Link>
                                {session ? (
                                    <>
                                        <Link
                                            href={'/bookings'}
                                            className="w-fit text-base font-medium text-gray-950 transition-colors duration-200 ease-linear hover:text-gray-950/60"
                                        >
                                            Bookings
                                        </Link>
                                        <Link
                                            href={'/facility/create'}
                                            className="w-fit text-base font-medium text-gray-950 transition-colors duration-200 ease-linear hover:text-gray-950/60"
                                        >
                                            Add facility
                                        </Link>
                                        <Link
                                            href={'/manage/my/facilities'}
                                            className="w-fit text-base font-medium text-gray-950 transition-colors duration-200 ease-linear hover:text-gray-950/60"
                                        >
                                            Manage facilities
                                        </Link>
                                    </>
                                ) : (
                                    <Link
                                        href={'/auth/login'}
                                        className="w-fit text-base font-medium text-gray-950 transition-colors duration-200 ease-linear hover:text-gray-950/60"
                                    >
                                        Login
                                    </Link>
                                )}
                            </nav>
                            {session && (
                                <>
                                    <div className="my-5 h-px w-full bg-black/5"></div>
                                    <div className="w-full">
                                        <div className="flex items-center gap-3">
                                            <div className="group flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-black/10 p-px">
                                                <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-black/5">
                                                    <Avatar size={'md'} />
                                                </div>
                                            </div>
                                            <div className="w-fit">
                                                <span className="text-base font-medium text-gray-950">
                                                    {session?.user?.name}
                                                </span>
                                                <p className="text-sm text-gray-950/60">
                                                    {session?.user?.email}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="my-5 h-px w-full bg-black/5"></div>
                                    <button
                                        onClick={() => {
                                            (handleLogout(),
                                                setMenuOpen((prev) => !prev));
                                        }}
                                        className="flex w-fit cursor-pointer items-center justify-center gap-1 text-base font-medium text-red-600 transition-colors duration-200 ease-linear hover:text-red-500"
                                    >
                                        <MdLogout size={16} />
                                        <span>Log out</span>
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </ClickAwayListener>
            </header>
        </div>
    );
}
