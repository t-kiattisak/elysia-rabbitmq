import Elysia, { t } from "elysia"
import { PublishMessageUseCase } from "../application/publish-message"

const publishMessageUseCase = new PublishMessageUseCase()

export const producerController = new Elysia().post(
  "/publish",
  async ({ body }) => {
    await publishMessageUseCase.execute(body)
    return { success: true, message: "Message published!" }
  },
  {
    body: t.Object({
      content: t.String({ minLength: 1 }),
    }),
  }
)
