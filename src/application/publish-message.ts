import { Message, MessageSchema } from "../domain/message"
import { RabbitMQService } from "../infrastructure/rabbitmq"

export class PublishMessageUseCase {
  private rebbitMQService = new RabbitMQService()

  async execute(data: Message) {
    const parsedData = MessageSchema.parse(data)
    await this.rebbitMQService.connect()
    await this.rebbitMQService.publish("task_queue", JSON.stringify(parsedData))
  }
}
