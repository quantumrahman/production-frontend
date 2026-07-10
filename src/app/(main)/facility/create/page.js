import HeadingSection from '@/components/features/CommonSections/HeadingSection';
import CreateSection from '@/components/features/CreatePage/CreateSection';

export default function CreateFacilityPage() {
    return (
        <div className="w-full px-5 md:px-10">
            <HeadingSection
                title={'Create Facility'}
                paragraph={
                    'Add venue details and make it available for booking.'
                }
            />
            <CreateSection />
        </div>
    );
}
