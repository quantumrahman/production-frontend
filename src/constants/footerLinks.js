import { FaXTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa6';

export const usefulLinks = [
    {
        id: 1,
        label: 'Privacy policy',
        ref: '/',
    },
    {
        id: 2,
        label: 'Cookies policy',
        ref: '/',
    },
    {
        id: 3,
        label: 'Terms of use',
        ref: '/',
    },
];

export const socialLinks = [
    {
        id: 1,
        icon: <FaXTwitter />,
        ref: 'https://x.com/rrahmandev',
    },
    {
        id: 2,
        icon: <FaLinkedinIn />,
        ref: 'https://www.linkedin.com/in/rakibulrahman',
    },
    {
        id: 3,
        icon: <FaGithub />,
        ref: 'https://github.com/quantumrahman',
    },
];
