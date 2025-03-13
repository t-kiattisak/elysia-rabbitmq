# 🚀 ElysiaJS + RabbitMQ

A simple and scalable RabbitMQ integration using ElysiaJS.

## ⚡ Setup & Run

### 1️⃣ Install Dependencies

```sh
bun install
```

### 2️⃣ Start RabbitMQ (via Docker)

```sh
docker-compose up -d
```

### 3️⃣ Start Server

```sh
bun run src/server.ts
```

---

## 📌 API Endpoints

### ➤ **Publish Message**

#### 📍 Endpoint

```http
POST /publish
```

#### 📥 Request Body

```json
{
  "content": "Hello RabbitMQ!"
}
```

#### 📤 Response

```json
{
  "success": true,
  "message": "Message published!"
}
```

#### 🛠 **Test with cURL**

```sh
curl -X POST http://localhost:3000/publish \
     -H "Content-Type: application/json" \
     -d '{"content":"Hello RabbitMQ!"}'
```

---

🔥 **Ready to scale with RabbitMQ! 🚀**
