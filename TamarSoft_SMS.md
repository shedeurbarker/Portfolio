## 🚀 SMS API Integration Guide

This guide explains how to connect to the TamarSoft backend from other applications to send SMS. All requests require a **Bearer Token** (your Client API Key), which must be passed in the `Authorization` header.

---

### 1. 📱 Send SMS
Use this endpoint to send an SMS via the TamarSoft system. The cost will be deducted from your Clients Credits balance.

#### **Endpoint Details**
*   **URL**: `https://us-central1-tamarsoftllc.cloudfunctions.net/sendSms`
*   **Method**: `POST`
*   **Headers**:
    *   `Content-Type`: `application/json`
    *   `Authorization`: `Bearer YOUR_API_KEY`

#### **Request Body**
```json
{
  "recipient": ["233XXXXXXXXX"],
  "message": "Hello from your app via TamarSoft!",
}
```

#### **Code Example (Node.js / JavaScript)**
```javascript
const axios = require('axios');

async function sendSms() {
  try {
    const response = await axios.post(
      'https://us-central1-tamarsoftllc.cloudfunctions.net/sendSms',
      {
        recipient: ['233540000000'],
        message: 'Your verification code is 1234',
      },
      {
        headers: {
          'Authorization': 'Bearer YOUR_CLIENT_API_KEY',
          'Content-Type': 'application/json'
        }
      }
    );
    console.log('SMS Sent Successfully:', response.data);
  } catch (error) {
    console.error('Error sending SMS:', error.response ? error.response.data : error.message);
  }
}
```

#### **Code Example (cURL)**
```bash
curl -X POST https://us-central1-tamarsoftllc.cloudfunctions.net/sendSms \
  -H "Authorization: Bearer YOUR_CLIENT_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "recipient": ["233540000000"],
    "message": "Hello world",
  }'
```

---
