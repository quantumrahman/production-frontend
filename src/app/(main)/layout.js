import Footer from '@/components/shared/footer';

export const metadata = {
    title: 'SportNest - Online sport booking website',
    description: '',
};

export default function MainLayout({ children }) {
    return (
        <div className="min-h-screen w-full">
            <main className="w-full">{children}</main>
            <Footer />
        </div>
    );
}
