import zod from 'zod'

export const resgiterSchema = zod.object({
    userName: zod.string({
        required_error: 'Username is required'
    }),
    email: zod.string({
        required_error: 'Email is required'
    }).email({
        message: 'Invalid email'
    }),
    password: zod.string({
        required_error: 'Password is required'
    }).min(6,{
        message: 'Password must be least 6 character'
    }),
})

export const loginSchema = zod.object({
    email: zod.string({
        required_error: 'Email is required'
    }).email({
        message: 'Invalid email'
    }),
    password: zod.string({
        required_error: 'Password is required'
    }).min(6,{
        message: 'Password must be least 6 character'
    }),
})