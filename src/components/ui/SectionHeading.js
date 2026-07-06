export default function SectionHeading({ title, paragraph }) {
    return (
        <div className="flex w-full flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-[32px] leading-tight font-semibold text-gray-950 transition-all duration-200 ease-linear md:text-[44px] lg:text-[56px]">
                {title}
            </h2>
            <p className="text-base text-black/60 transition-all duration-200 ease-linear">
                {paragraph}
            </p>
        </div>
    );
}
