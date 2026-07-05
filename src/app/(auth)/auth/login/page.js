import LoginForm from '@/components/ui/LoginForm';

export default function LoginPage() {
    return (
        <div className="flex min-h-screen w-full items-center justify-center">
            <div className="flex h-screen w-full flex-2 items-center justify-center">
                <LoginForm />
            </div>
            <div className="hidden h-screen w-full bg-[url('/images/login.webp')] bg-cover bg-center bg-no-repeat md:block md:flex-1"></div>
        </div>
    );
}
