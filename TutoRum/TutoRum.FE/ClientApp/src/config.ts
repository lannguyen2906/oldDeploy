import {z} from 'zod'

const configSchema = z.object({
    NEXT_PUBLIC_API_ENDPOINT: z.string()
})

const configProject = configSchema.safeParse({
    NEXT_PUBLIC_API_ENDPOINT: process.env.NEXT_PUBLIC_API_ENDPOINT
})

if(!configProject.success) {
    console.error('Invalid config', configProject.error.issues)
    throw new Error('Invalid config')
}

const envConfig = configProject.data
export default envConfig