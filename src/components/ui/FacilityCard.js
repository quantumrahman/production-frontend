import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';

export default function FacilityCard({ data }) {
    return (
        <article className="flex w-full flex-col items-center justify-center gap-6">
            <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-gray-100">
                <span className="absolute top-4 right-4 z-10 rounded-full bg-black px-2 py-1 text-sm text-white">
                    Football
                </span>
            </div>
            <div className="w-full space-y-1">
                <h3 className="text-xl leading-tight font-semibold text-gray-950">
                    Green Football Turf Arena
                </h3>
                <div className="flex w-full items-center justify-between space-y-1">
                    <p className="text-base text-black/60">Gulshan, Dhaka</p>
                    <p className="text-lg font-semibold text-black">$500</p>
                </div>
                <Link
                    href={'/'}
                    className="inline-flex items-center justify-center gap-2 text-base leading-snug text-black/60 underline transition-colors duration-200 ease-linear hover:text-black"
                >
                    Book Now
                    <FaArrowRight size={12} />
                </Link>
            </div>
        </article>
    );
}
