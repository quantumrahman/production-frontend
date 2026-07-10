export default function CreateForm() {
    return (
        <form>
            <div className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
                <label htmlFor="facility_name" className="block w-full">
                    <input
                        id="facility_name"
                        type="text"
                        aria-label="input"
                        role="input"
                        autoComplete="off"
                        placeholder="Facility name"
                        className={`w-full rounded-2xl border px-4 py-3 text-base font-normal text-gray-950 caret-gray-950 transition-all duration-200 ease-linear outline-none placeholder:font-light placeholder:text-gray-500 ${false ? 'border-red-500 bg-red-500/10' : 'border-black/10 bg-transparent focus:border-gray-950'}`}
                    />
                    <span className="my-1 block h-4 text-xs text-red-400">
                        {/* {errors && errors.email?.message} */}
                    </span>
                </label>
                <label htmlFor="facility_type" className="block w-full">
                    <input
                        id="facility_type"
                        type="text"
                        aria-label="input"
                        role="input"
                        autoComplete="off"
                        placeholder="Facility type"
                        className={`w-full rounded-2xl border px-4 py-3 text-base font-normal text-gray-950 caret-gray-950 transition-all duration-200 ease-linear outline-none placeholder:font-light placeholder:text-gray-500 ${false ? 'border-red-500 bg-red-500/10' : 'border-black/10 bg-transparent focus:border-gray-950'}`}
                    />
                    <span className="my-1 block h-4 text-xs text-red-400">
                        {/* {errors && errors.email?.message} */}
                    </span>
                </label>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
                <label htmlFor="location" className="block w-full">
                    <input
                        id="location"
                        type="text"
                        aria-label="input"
                        role="input"
                        autoComplete="off"
                        placeholder="Location"
                        className={`w-full rounded-2xl border px-4 py-3 text-base font-normal text-gray-950 caret-gray-950 transition-all duration-200 ease-linear outline-none placeholder:font-light placeholder:text-gray-500 ${false ? 'border-red-500 bg-red-500/10' : 'border-black/10 bg-transparent focus:border-gray-950'}`}
                    />
                    <span className="my-1 block h-4 text-xs text-red-400">
                        {/* {errors && errors.email?.message} */}
                    </span>
                </label>
                <label htmlFor="price_per_hour" className="block w-full">
                    <input
                        id="price_per_hour"
                        type="text"
                        aria-label="input"
                        role="input"
                        autoComplete="off"
                        placeholder="Price per hour"
                        className={`w-full rounded-2xl border px-4 py-3 text-base font-normal text-gray-950 caret-gray-950 transition-all duration-200 ease-linear outline-none placeholder:font-light placeholder:text-gray-500 ${false ? 'border-red-500 bg-red-500/10' : 'border-black/10 bg-transparent focus:border-gray-950'}`}
                    />
                    <span className="my-1 block h-4 text-xs text-red-400">
                        {/* {errors && errors.email?.message} */}
                    </span>
                </label>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
                <label htmlFor="capacity" className="block w-full">
                    <input
                        id="capacity"
                        type="text"
                        aria-label="input"
                        role="input"
                        autoComplete="off"
                        placeholder="Capacity"
                        className={`w-full rounded-2xl border px-4 py-3 text-base font-normal text-gray-950 caret-gray-950 transition-all duration-200 ease-linear outline-none placeholder:font-light placeholder:text-gray-500 ${false ? 'border-red-500 bg-red-500/10' : 'border-black/10 bg-transparent focus:border-gray-950'}`}
                    />
                    <span className="my-1 block h-4 text-xs text-red-400">
                        {/* {errors && errors.email?.message} */}
                    </span>
                </label>
                <label htmlFor="available_slots" className="block w-full">
                    <input
                        id="available_slots"
                        type="text"
                        aria-label="input"
                        role="input"
                        autoComplete="off"
                        placeholder="Available slots"
                        className={`w-full rounded-2xl border px-4 py-3 text-base font-normal text-gray-950 caret-gray-950 transition-all duration-200 ease-linear outline-none placeholder:font-light placeholder:text-gray-500 ${false ? 'border-red-500 bg-red-500/10' : 'border-black/10 bg-transparent focus:border-gray-950'}`}
                    />
                    <span className="my-1 block h-4 text-xs text-red-400">
                        {/* {errors && errors.email?.message} */}
                    </span>
                </label>
            </div>
            <label htmlFor="image" className="block w-full">
                <input
                    id="image"
                    type="text"
                    aria-label="input"
                    role="input"
                    autoComplete="off"
                    placeholder="Thumbnail url"
                    className={`w-full rounded-2xl border px-4 py-3 text-base font-normal text-gray-950 caret-gray-950 transition-all duration-200 ease-linear outline-none placeholder:font-light placeholder:text-gray-500 ${false ? 'border-red-500 bg-red-500/10' : 'border-black/10 bg-transparent focus:border-gray-950'}`}
                />
                <span className="my-1 block h-4 text-xs text-red-400">
                    {/* {errors && errors.email?.message} */}
                </span>
            </label>
            <label htmlFor="description" className="block w-full">
                <textarea
                    id="description"
                    type="text"
                    aria-label="input"
                    role="input"
                    autoComplete="off"
                    placeholder="Description"
                    rows={5}
                    className={`w-full resize-none rounded-2xl border px-4 py-3 text-base font-normal text-gray-950 caret-gray-950 transition-all duration-200 ease-linear outline-none placeholder:font-light placeholder:text-gray-500 ${false ? 'border-red-500 bg-red-500/10' : 'border-black/10 bg-transparent focus:border-gray-950'}`}
                />
                <span className="my-1 block h-4 text-xs text-red-400">
                    {/* {errors && errors.email?.message} */}
                </span>
            </label>
            <label htmlFor="email" className="block w-full">
                <input
                    id="email"
                    type="text"
                    aria-label="input"
                    role="input"
                    autoComplete="off"
                    placeholder="email"
                    readOnly
                    className={`w-full rounded-2xl border border-black/10 px-4 py-3 text-base font-medium text-gray-950 caret-gray-950 transition-all duration-200 ease-linear outline-none placeholder:font-light placeholder:text-gray-500`}
                />
                <span className="my-1 block h-4 text-xs text-red-400">
                    {/* {errors && errors.email?.message} */}
                </span>
            </label>
            <div className="mt-5 flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
                <button
                    type="submit"
                    className="w-full cursor-pointer rounded-full bg-gray-950 px-4 py-3 text-base font-medium text-white transition-colors duration-200 ease-linear hover:bg-gray-800 sm:w-fit"
                >
                    Publish facility
                </button>
                <button
                    type="button"
                    className="w-full cursor-pointer rounded-full border border-black/10 bg-transparent px-4 py-3 text-base font-medium text-gray-950 transition-colors duration-200 ease-linear hover:bg-gray-100 sm:w-fit"
                >
                    Cancel facility
                </button>
            </div>
        </form>
    );
}
