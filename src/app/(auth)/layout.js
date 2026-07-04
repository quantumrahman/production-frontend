import '../globals.css';

export const metadata = {
    title: 'SportNest - Authentication',
    description: 'Online sport booking facility',
};

export default function AuthLayout({ children }) {
    return <main className="min-h-screen w-full bg-gray-950">{children}</main>;
}
