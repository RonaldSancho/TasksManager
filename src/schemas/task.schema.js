import zod from 'zod'

export const createTaskSchema = zod.object({
    title: zod.string({
        required_error: 'Title is required'
    }),
    description: zod.string({
        required_error: 'Description must be a string'
    }),
    date: zod.string().datetime().optional(),
})