import { z } from "zod"

export const MessageSchema = z.object({
  content: z.string().min(1, "Message content is required"),
})

export type Message = z.infer<typeof MessageSchema>
