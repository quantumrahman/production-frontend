import { Avatar } from '@heroui/react';
import { FaRegUser } from 'react-icons/fa6';

export default function UserAvatar({ src, size }) {
    return (
        <Avatar size={size}>
            <Avatar.Image alt="user image" src={src} />
            <Avatar.Fallback>
                <FaRegUser size={16} className="text-black/60" />
            </Avatar.Fallback>
        </Avatar>
    );
}
