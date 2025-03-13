import amqplib, { ChannelModel, Channel } from "amqplib"
import { config } from "../config/env"

export class RabbitMQService {
  private connection: ChannelModel | null = null
  private channel: Channel | null = null

  async connect() {
    if (!this.connection) {
      this.connection = await amqplib.connect(config.RABBITMQ_URL)
      this.channel = await this.connection.createChannel()
    }
  }

  async publish(queue: string, message: string) {
    if (!this.channel) throw new Error("RabbitMQ Channel is not available!")
    await this.channel.assertQueue(queue, { durable: true })
    this.channel.sendToQueue(queue, Buffer.from(message), { persistent: true })
  }

  async consume(queue: string, callback: (msg: string) => void) {
    if (!this.channel) throw new Error("RabbitMQ Channel is not available!")
    await this.channel.assertQueue(queue, { durable: true })
    this.channel.consume(queue, (msg) => {
      if (msg) {
        callback(msg.content.toString())
        this.channel?.ack(msg)
      }
    })
  }
}
