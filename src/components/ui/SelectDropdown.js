'use client';

import useSelect from '@/hooks/useSelect';

export default function SelectDropdown({
    value = '',
    onChange,
    options,
    errors,
    placeholder,
}) {
    const { isOpen, close, toggle, dropdownRef } = useSelect();

    return (
        <div ref={dropdownRef} className="relative w-full">
            <div
                onClick={toggle}
                className={`w-full cursor-pointer rounded-xl border px-4 py-3 text-left text-base font-normal ${value ? ' text-gray-950' : ' text-gray-500'} ${errors.facility_type?.message ? 'border-red-500' : 'border-black/10'}`}
            >
                {value || placeholder}
            </div>
            {isOpen && (
                <ul className="absolute top-14 left-0 z-20 w-full overflow-hidden rounded-2xl border border-black/10 bg-white">
                    {options.map((option) => (
                        <li
                            key={option.id}
                            onClick={() => {
                                onChange(option.type);
                                close();
                            }}
                            className="cursor-pointer px-4 py-2 text-base font-normal text-gray-950 transition-colors duration-200 ease-linear hover:bg-gray-100"
                        >
                            {option.type}
                        </li>
                    ))}
                </ul>
            )}
            <span className="my-1 block h-4 text-xs text-red-400">
                {errors && errors.facility_type?.message}
            </span>
        </div>
    );
}
