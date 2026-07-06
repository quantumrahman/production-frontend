import Link from 'next/link';
import { usefulLinks, socialLinks } from '@/constants/footerLinks';

export default function Footer() {
    return (
        <div className="w-full bg-gray-950 px-5 md:px-10">
            <footer className="mx-auto w-full max-w-7xl space-y-10 pt-10">
                <div className="flex w-full flex-col items-center justify-between gap-y-10 md:flex-row">
                    <div className="flex flex-wrap items-center justify-center gap-5">
                        {usefulLinks.map((link) => (
                            <Link
                                key={link.id}
                                href={link.ref}
                                className="text-base text-gray-500 transition-colors duration-200 ease-linear hover:text-green-500"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        {socialLinks.map((link) => (
                            <Link
                                key={link.id}
                                href={link.ref}
                                className="block rounded-full bg-gray-900 p-2 text-white transition-colors duration-200 ease-linear hover:bg-green-500"
                            >
                                {link.icon}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="w-full border-t border-gray-900 py-4 text-center">
                    <span className="text-sm text-gray-500">
                        &copy; SportNest {new Date().getFullYear()}. All right
                        reserved
                    </span>
                </div>
            </footer>
        </div>
    );
}
