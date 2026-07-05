import z from 'zod';

const registerValidationSchema = z.object({
    name: z
        .string()
        .min(1, {
            error: 'Name is required',
        })
        .trim(),
    photo: z
        .string()
        .min(1, {
            error: 'Photo is required',
        })
        .trim()
        .pipe(
            z.url({
                error: 'Please enter a valid url',
            })
        ),
    email: z
        .string()
        .min(1, {
            error: 'Email is required',
        })
        .trim()
        .lowercase()
        .pipe(
            z.email({
                error: 'Please enter a vaild email address',
            })
        ),
    password: z
        .string()
        .min(1, {
            error: 'Password is required',
        })
        .min(8, {
            error: 'Password must be at least 8 characters',
        })
        .regex(/[A-Z]/, {
            error: 'Password must contain at least one uppercase letter',
        })
        .regex(/[a-z]/, {
            error: 'Password must contain at least one lowercase letter',
        }),
});

export default registerValidationSchema;
