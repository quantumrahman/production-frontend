'use client';

import { useState, useRef, useEffect } from 'react';

export default function useSelect() {
    const [isOpen, setIsOpen] = useState(false);

    const dropdownRef = useRef(null);

    const open = () => {
        setIsOpen(true);
    };

    const close = () => {
        setIsOpen(false);
    };

    const toggle = () => {
        setIsOpen((prev) => !prev);
    };

    useEffect(() => {
        const handleClick = (e) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target)
            ) {
                close();
            }
        };

        document.addEventListener('mousedown', handleClick);

        return () => document.removeEventListener('mousedown', handleClick);
    }, []);

    return { isOpen, open, close, toggle, dropdownRef };
}
