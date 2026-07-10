'use client';

import SelectDropdown from './SelectDropdown.js';
import facilityValidationSchema from '@/validators/facilityValidationSchema.js';

import { facilityType } from '@/constants/facilityType.js';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import useUser from '@/hooks/useUser.js';

export default function CreateForm() {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(facilityValidationSchema),
    });
    const { session } = useUser();

    const handleOnSubmit = (form) => {
        console.log(form);
    };

    return (
        <form onSubmit={handleSubmit(handleOnSubmit)}>
            <div className="flex w-full flex-col items-center justify-center sm:flex-row sm:gap-4">
                <label htmlFor="name" className="w-full">
                    <input
                        id="name"
                        type="text"
                        {...register('name')}
                        placeholder="Facility name"
                        className={`w-full rounded-xl border px-4 py-3 text-base font-normal text-gray-950 caret-gray-950 outline-none placeholder:text-gray-500 ${errors.name?.message ? 'border-red-500' : 'border-black/10'}`}
                    />
                    <span className="my-1 block h-4 text-xs font-medium text-red-400">
                        {errors && errors.name?.message}
                    </span>
                </label>
                <Controller
                    name="facility_type"
                    control={control}
                    render={({ field }) => (
                        <SelectDropdown
                            options={facilityType}
                            value={field.value}
                            onChange={field.onChange}
                            placeholder={'Select type'}
                            errors={errors}
                        />
                    )}
                />
            </div>
            <div className="flex w-full flex-col items-center justify-center sm:flex-row sm:gap-4">
                <label htmlFor="location" className="w-full">
                    <input
                        id="location"
                        type="text"
                        {...register('location')}
                        placeholder="Location"
                        className={`w-full rounded-xl border px-4 py-3 text-base font-normal text-gray-950 caret-gray-950 outline-none placeholder:text-gray-500 ${errors.location?.message ? 'border-red-500' : 'border-black/10'}`}
                    />
                    <span className="my-1 block h-4 text-xs font-medium text-red-400">
                        {errors && errors.location?.message}
                    </span>
                </label>
                <label htmlFor="price_per_hour" className="w-full">
                    <input
                        id="price_per_hour"
                        type="text"
                        {...register('price_per_hour')}
                        placeholder="Price per hour"
                        className={`w-full rounded-xl border px-4 py-3 text-base font-normal text-gray-950 caret-gray-950 outline-none placeholder:text-gray-500 ${errors.price_per_hour?.message ? 'border-red-500' : 'border-black/10'}`}
                    />
                    <span className="my-1 block h-4 text-xs font-medium text-red-400">
                        {errors && errors.price_per_hour?.message}
                    </span>
                </label>
            </div>
            <div className="flex w-full flex-col items-center justify-center sm:flex-row sm:gap-4">
                <label htmlFor="capacity" className="w-full">
                    <input
                        id="capacity"
                        type="text"
                        {...register('capacity')}
                        placeholder="Capacity"
                        className={`w-full rounded-xl border px-4 py-3 text-base font-normal text-gray-950 caret-gray-950 outline-none placeholder:text-gray-500 ${errors.capacity?.message ? 'border-red-500' : 'border-black/10'}`}
                    />
                    <span className="my-1 block h-4 text-xs font-medium text-red-400">
                        {errors && errors.capacity?.message}
                    </span>
                </label>
                <label htmlFor="available_slots" className="w-full">
                    <input
                        id="available_slots"
                        type="text"
                        {...register('available_slots')}
                        placeholder="Available slots e.g. 6AM-8AM"
                        className={`w-full rounded-xl border px-4 py-3 text-base font-normal text-gray-950 caret-gray-950 outline-none placeholder:text-gray-500 ${errors.available_slots?.message ? 'border-red-500' : 'border-black/10'}`}
                    />
                    <span className="my-1 block h-4 text-xs font-medium text-red-400">
                        {errors && errors.available_slots?.message}
                    </span>
                </label>
            </div>
            <div className="flex w-full flex-col items-center justify-center">
                <label htmlFor="image" className="w-full">
                    <input
                        id="image"
                        type="text"
                        {...register('image')}
                        placeholder="Facility thumbnail"
                        className={`w-full rounded-xl border px-4 py-3 text-base font-normal text-gray-950 caret-gray-950 outline-none placeholder:text-gray-500 ${errors.image?.message ? 'border-red-500' : 'border-black/10'}`}
                    />
                    <span className="my-1 block h-4 text-xs font-medium text-red-400">
                        {errors && errors.image?.message}
                    </span>
                </label>
                <label htmlFor="description" className="w-full">
                    <textarea
                        id="description"
                        type="text"
                        {...register('description')}
                        placeholder="Description"
                        rows={5}
                        className={`w-full rounded-xl border px-4 py-3 text-base font-normal text-gray-950 caret-gray-950 outline-none placeholder:text-gray-500 ${errors.description?.message ? 'border-red-500' : 'border-black/10'} resize-none`}
                    />
                    <span className="my-1 block h-4 text-xs font-medium text-red-400">
                        {errors && errors.description?.message}
                    </span>
                </label>
                <label htmlFor="owner_email" className="w-full">
                    <input
                        id="owner_email"
                        type="text"
                        placeholder="Owner email"
                        readOnly
                        defaultValue={session?.user?.email}
                        className={`w-full cursor-default rounded-xl border border-black/10 px-4 py-3 text-base font-normal text-gray-950 caret-gray-950 outline-none placeholder:text-gray-500`}
                    />
                    <span className="my-1 block h-4 text-xs font-medium text-red-400">
                        {/* {errors && errors.owner_email?.message} */}
                    </span>
                </label>
            </div>
            <div className="mt-5 flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
                <button
                    type="submit"
                    className="w-full cursor-pointer rounded-full bg-gray-950 px-4 py-3 text-base font-medium text-white transition-colors duration-200 ease-linear hover:bg-gray-800 sm:w-fit"
                >
                    Publish facility
                </button>
            </div>
        </form>
    );
}
