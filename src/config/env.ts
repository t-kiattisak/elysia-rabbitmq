import "dotenv/config"

export const config = {
  RABBITMQ_URL: process.env.RABBITMQ_URL || "amqp://guest:guest@localhost:5672",
  QUEUE_NAME: process.env.QUEUE_NAME || "task_queue",
}
