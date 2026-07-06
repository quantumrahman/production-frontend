import SectionHeading from '@/components/ui/SectionHeading';
import FacilityCard from '@/components/ui/FacilityCard';

export default function FeatureSection() {
    return (
        <section className="mx-auto w-full max-w-7xl px-5 pt-[40px] pb-[64px] transition-all duration-200 ease-linear md:px-10 md:pt-[156px] md:pb-[120px] lg:py-[120px]">
            <div className="flex w-full flex-col items-center justify-center gap-20">
                <SectionHeading
                    title={'Featured Facility'}
                    paragraph={
                        'Handpicked venues across Dhaka — rated by athletes like you'
                    }
                />
                <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <FacilityCard />
                    <FacilityCard />
                    <FacilityCard />
                    <FacilityCard />
                    <FacilityCard />
                    <FacilityCard />
                </div>
            </div>
        </section>
    );
}
