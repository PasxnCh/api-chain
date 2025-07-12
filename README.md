# 🔗 API Chain

## Overview

โปรเจกต์นี้ใช้ Node.js + Express เพื่อสร้าง API สองตัว:

- **API1** (`localhost:3001`): รับ request จากผู้ใช้ → ส่งต่อไปยัง API2 → ตอบกลับผลลัพธ์
- **API2** (`localhost:3002`): ตอบกลับข้อความ "Hello World from API2"

ทั้งหมด deploy ผ่าน Docker Compose และมีการพิมพ์ logs ให้เห็นทั้งฝั่ง API1 และ API2

---

## How to Deploy

### 1. Clone Repository
```bash
git clone https://github.com/PasxnCh/api-chain.git
cd api-chain
```
### 2. Build & Start Containers
```
docker-compose up --build
```
### 3. Verify Startup Logs
- API1:
```
[API1] Listening at http://localhost:3001
```
- API2:
```
[API2] Listening at http://localhost:3002
```
## How to Test

### Test API Chain via API1
```
curl http://localhost:3001/api1
```
Expected Response:
```
API1 says: Hello World from API2
```
### Directly test API2 (optional)
```
curl http://localhost:3002/api2
