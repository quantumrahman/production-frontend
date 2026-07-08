import HeadingSection from '@/components/features/CommonSections/HeadingSection';
import FacilitiesSection from '@/components/features/FacilitiesPage/FacilitiesSection';

export default function Facilities() {
    return (
        <div className="w-full px-5 md:px-10">
            <HeadingSection
                title={'Browse Facilities'}
                paragraph={'Discover top-rated venues for every game.'}
            />
            <FacilitiesSection />
        </div>
    );
}
