import { RabbitMQService } from "../infrastructure/rabbitmq"

export class ConsumeMessageUseCase {
  private rabbitMQService = new RabbitMQService()

  async execute() {
    await this.rabbitMQService.connect()
    await this.rabbitMQService.consume("task_queue", (msg) => {
      console.log(`[Logic] processed message : ${msg}`)
    })
  }
}
