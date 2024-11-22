import { z } from 'zod'

export const EmailPasswordSchema = z.object({
  email: z
    .string({
      message: 'Invalid email address',
    })
    .email({
      message: 'Invalid email address',
    }),
  password: z
    .string({
      message: 'Too short, minimum 8 characters',
    })
    .min(8, {
      message: 'Too short, minimum 8 characters',
    }),
})

export type EmailPassword = z.infer<typeof EmailPasswordSchema>
