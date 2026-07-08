export default function HeadingSection({ title, paragraph }) {
    return (
        <section className="w-full border-b border-black/5 pt-[126px] pb-[63px] transition-all duration-200 ease-linear md:pt-[158px] md:pb-[79px]">
            <div className="mx-auto w-full max-w-7xl space-y-4 text-center">
                <h1 className="text-[32px] leading-tight font-semibold text-gray-950 transition-all duration-200 ease-linear md:text-[44px] lg:text-[56px]">
                    {title}
                </h1>
                <p className="text-base text-black/60 transition-all duration-200 ease-linear">
                    {paragraph}
                </p>
            </div>
        </section>
    );
}
