import z from 'zod';

const facilityValidationSchema = z.object({
    name: z.string().min(1, { error: 'Facility name is required' }).trim(),
    facility_type: z.enum(
        [
            'Football Turf',
            'Cricket Turf',
            'Badminton Court',
            'Tennis Court',
            'Basketball Court',
            'Swimming Pool',
        ],
        { error: 'Facility type is required' }
    ),
    location: z.string().min(1, { error: 'Location is required' }).trim(),
    price_per_hour: z
        .string()
        .trim()
        .min(1, { error: 'Price per hour is required' })
        .transform((value) => Number(value))
        .pipe(
            z
                .number({ error: 'Price per hour must be a valid number' })
                .int({ error: 'Price per hour must be an integer value' })
                .min(1, { error: 'Price per hour must be at least 1' })
        ),
    capacity: z
        .string()
        .trim()
        .min(1, { error: 'Capacity is required' })
        .transform((value) => Number(value))
        .pipe(
            z
                .number({ error: 'Capacity must be a valid number' })
                .int({ error: 'Capacity must be an integer value' })
                .min(1, { error: 'Capacity must be at least 1' })
        ),
    available_slots: z
        .string()
        .min(1, { error: 'Available slots must be at least 1 slots' })
        .trim(),
    image: z.url({ error: 'Please provide a valid url' }),
    description: z
        .string()
        .min(1, { error: 'Description is required' })
        .max(500, { error: 'Description must be at least 500 characters' }),
});

export default facilityValidationSchema;
