import FacilityCard from '@/components/ui/FacilityCard';

export default function FacilitiesSection() {
    return (
        <section className="mx-auto w-full max-w-7xl py-20">
            <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                <FacilityCard />
                <FacilityCard />
                <FacilityCard />
                <FacilityCard />
                <FacilityCard />
                <FacilityCard />
            </div>
        </section>
    );
}
