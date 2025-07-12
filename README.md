# 🔗 API Chain

## 👨‍💻 Overview
โปรเจกต์นี้ประกอบด้วย API สองตัว:

- **API1** (Port 3001): รับ request จากผู้ใช้ แล้วส่งต่อไปยัง API2
- **API2** (Port 3002): ตอบกลับข้อความ "Hello World"

การเรียกใช้งานจะทำงานเป็น chain: ผู้ใช้เรียก API1 → API1 เรียก API2 → ส่งผลลัพธ์กลับไปยังผู้ใช้

---

## 🚀 How to Deploy

### 1. Clone Repository
```bash
git clone https://github.com/PasxnCh/api-chain.git
cd api-chain
```
### 2. Build and Start Containers
```bash
docker-compose up --build
```
- API1 จะรันที่ localhost http://localhost:3001/api1
- API2 จะรันที่ localhost http://localhost:3002/api2

 How to Test
Test API1 → API2 Chain
```
curl http://localhost:3001/api1
```
Expected response:
hello world from API2

📋 Logs
เมื่อเรียก API1:
- API1 log:
```
Request received on API1
Response from API2: hello world from API2
```
- API2 log:
```
Request received on API2
