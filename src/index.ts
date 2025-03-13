import { Elysia } from "elysia"
import { producerController } from "./interfaces/producer-controller"
import { startConsumer } from "./interfaces/consumer-controller"

const app = new Elysia()

app.use(producerController)
app.listen(3000, () => {
  console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
  )
  startConsumer()
})
