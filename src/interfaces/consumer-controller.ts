import { ConsumeMessageUseCase } from "../application/consume-message"

const consumeMessageUseCase = new ConsumeMessageUseCase()

export const startConsumer = async () => {
  await consumeMessageUseCase.execute()
}
