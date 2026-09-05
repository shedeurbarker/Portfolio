# 📱 TamarSoft SMS API Integration Guide

Welcome to the **TamarSoft SMS API**. This guide provides comprehensive documentation for integrating SMS messaging, delivery reporting, and balance checks into your applications.

---

## 🔐 Authentication

All API requests require authentication using a **Bearer Token** (your Client API Key). Include your key in the `Authorization` header of every HTTP request:

```http
Authorization: Bearer YOUR_CLIENT_API_KEY
```

> **Note:** Keep your API key secret and secure. Never expose it in client-side / browser code.

---

## 🌐 Base URL

All endpoints are hosted on Google Cloud Functions:

```
https://us-central1-tamarsoftllc.cloudfunctions.net
```

---

## 🖥️ Client SMS Web Portal (No-Code Dashboard)

Prefer a visual interface over API calls? TamarSoft provides an interactive web portal where you can monitor your SMS credits, browse sent message logs, and inspect real-time delivery reports.

* **Web Portal URL:** [https://tamarsoftllc.web.app/sms_portal](https://tamarsoftllc.web.app/sms_portal)
* **Direct Auto-Login Link:**
  ```
  https://tamarsoftllc.web.app/sms_portal?key=YOUR_CLIENT_API_KEY
  ```

### What You Can Do in the Web Portal:
1. **Live Balance & Credits:** Monitor your live SMS balance, remaining credits, and rate per page.
2. **Sent Message History:** Browse, search, and filter all sent messages.
3. **Interactive Delivery Reports:** Click **"Delivery Report"** on any message to view a real-time status modal showing every recipient (`Number — Status — Date/Time — Log ID`).
4. **Instant Re-checks:** Refresh carrier delivery receipts live with a single click.

---

## 📑 Table of Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/sendSms` | Send SMS to one or more recipients |
| `GET` | `/getDeliveryReport` | Check delivery report & status for a sent message |
| `GET` | `/getSmsBalance` | Check your account SMS balance and available credits |
| `GET` | `/getSmsHistory` | Retrieve your account overview and sent SMS history |

---

## 1. 📤 Send SMS

Send single or bulk SMS messages to recipients. The cost per message page is automatically deducted from your account balance.

- **URL:** `https://us-central1-tamarsoftllc.cloudfunctions.net/sendSms`
- **Method:** `POST`
- **Headers:**
  - `Content-Type: application/json`
  - `Authorization: Bearer YOUR_CLIENT_API_KEY`

### Request Body Parameters

| Field | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `recipient` | `array` or `string` | **Yes** | Phone number(s) to send to. Supports an **array of strings** (e.g. `["0245349574", "0248621614"]`) or a **comma-separated string** (e.g. `"0245349574, 0248621614"`). Max 200 recipients per request. |
| `message` | `string` | **Yes** | The text message content to be sent |

> 📌 **Flexible Input Formats:**
> - **Array:** `["233245349574", "233248621614"]` *(Recommended)*
> - **Comma-separated string:** `"233245349574, 233248621614"`
> - **Single number string:** `"233245349574"` or `["233245349574"]`
> - Automatic sanitization removes whitespace, hyphens, and parentheses.

### Example 1: Array of Recipients

```json
{
  "recipient": [
    "233245349574",
    "233248621614",
    "233201234567"
  ],
  "message": "Important update: Scheduled maintenance tonight at 10 PM."
}
```

### Example 2: Comma-Separated String

```json
{
  "recipient": "0245349574, 0248621614, 0201234567",
  "message": "Hello! This is a broadcast announcement."
}
```

### Example 3: Single Recipient

```json
{
  "recipient": ["233245349574"],
  "message": "Hello! Your verification code is 482910."
}
```

### Success Response (`200 OK`)

```json
{
  "status": "success",
  "message": "SMS sent successfully",
  "balance": 98.45,
  "messageId": "8EA23B4B-C0C4-410B-84E3-CD67BE39C7E0"
}
```

> 💡 **Tip:** Save the returned `messageId` in your database to query delivery reports later.

---

## 2. 📊 Check Delivery Report

Retrieve the real-time delivery status for a specific message using its `messageId`.

- **URL:** `https://us-central1-tamarsoftllc.cloudfunctions.net/getDeliveryReport`
- **Method:** `GET`
- **Headers:**
  - `Authorization: Bearer YOUR_CLIENT_API_KEY`

### Query Parameters

| Parameter | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `id` (or `messageId`) | `string` | **Yes** | The `messageId` returned when the SMS was sent |

### Example Request URL

```http
GET https://us-central1-tamarsoftllc.cloudfunctions.net/getDeliveryReport?id=8EA23B4B-C0C4-410B-84E3-CD67BE39C7E0
```

### Success Response (`200 OK`)

```json
{
  "status": "success",
  "report": [
    {
      "_id": 60711577,
      "recipient": "233245349574",
      "message": "testing many numbers at once.",
      "sender": "TamarSoft",
      "status": "DELIVERED",
      "date_sent": "2026-09-05 12:45:10",
      "campaign_id": "0D939EB0-F717-4F40-92C3-4EEA3367BAC3",
      "retries": 0
    },
    {
      "_id": 60711578,
      "recipient": "233240214327",
      "message": "testing many numbers at once.",
      "sender": "TamarSoft",
      "status": "DELIVERED",
      "date_sent": "2026-09-05 12:45:10",
      "campaign_id": "0D939EB0-F717-4F40-92C3-4EEA3367BAC3",
      "retries": 0
    },
    {
      "_id": 60711579,
      "recipient": "233209141666",
      "message": "testing many numbers at once.",
      "sender": "TamarSoft",
      "status": "DELIVERED",
      "date_sent": "2026-09-05 12:45:10",
      "campaign_id": "0D939EB0-F717-4F40-92C3-4EEA3367BAC3",
      "retries": 0
    }
  ]
}
```

> 📌 **Note:** `report` is returned as an **array of delivery objects** (one object per recipient number). If a single recipient was sent, the array contains one object.

### Report Fields Breakdown (Per Recipient)

| Field | Type | Description |
| :--- | :--- | :--- |
| `_id` | `number` | Unique provider delivery log identifier |
| `recipient` | `string` | The recipient phone number |
| `message` | `string` | The message text that was sent |
| `sender` | `string` | The Sender ID displayed on recipient's handset |
| `status` | `string` | The current delivery state (see status values below) |
| `date_sent` | `string` | Date and time the message was dispatched |
| `campaign_id` | `string` | The original `messageId` associated with this broadcast |
| `retries` | `number` | Number of carrier retries performed |

### Delivery Status Values

| Status | Description | Action / Meaning |
| :--- | :--- | :--- |
| `DELIVERED` | Handset confirmed receipt | Message successfully received by the recipient |
| `SENT` / `PENDING` | In transit | Dispatched to carrier network, awaiting handset confirmation |
| `UNDELIVERED` | Delivery failed | Network issue, invalid number, or powered-off handset |
| `FAILED` | Provider rejected | Rejected by network carrier |
| `EXPIRED` | Timeout | Handset remained unreachable until message expired |

### ⏱️ Polling & Delivery Checking Best Practices

1. **Wait Before Polling:** Carrier delivery receipts usually take 5 to 30 seconds to arrive. We recommend waiting at least **5 seconds** after sending before querying for the initial delivery report.
2. **Exponential Backoff:** If statuses are `SENT` or `PENDING`, check again at 15s, 30s, and 60s. Avoid polling in a continuous tight loop.
3. **Cache Final Statuses:** Once all messages reach a terminal state (`DELIVERED`, `UNDELIVERED`, `FAILED`, `EXPIRED`), update your local database and stop polling.

---

## 🛠️ Standalone Delivery Report Checker Script

Clients can run this standalone Node.js script to check delivery reports for single or bulk recipients directly from the terminal.

### Node.js CLI Delivery Checker (`check-delivery.js`)

Save the following as `check-delivery.js`:

```javascript
const axios = require('axios');

const API_KEY = process.env.TAMARSOFT_API_KEY || 'YOUR_CLIENT_API_KEY';
const MESSAGE_ID = process.argv[2] || 'YOUR_MESSAGE_ID_HERE';

async function checkDelivery(messageId) {
  if (!messageId || messageId === 'YOUR_MESSAGE_ID_HERE') {
    console.error('⚠️  Usage: node check-delivery.js <MESSAGE_ID>');
    process.exit(1);
  }

  console.log(`🔍 Checking delivery report for Message ID: ${messageId}...\n`);

  try {
    const response = await axios.get('https://us-central1-tamarsoftllc.cloudfunctions.net/getDeliveryReport', {
      params: { id: messageId },
      headers: {
        'Authorization': `Bearer ${API_KEY}`
      }
    });

    const reports = Array.isArray(response.data.report)
      ? response.data.report
      : (response.data.report ? [response.data.report] : []);

    console.log(`📊 Delivery Reports Found: ${reports.length}\n`);

    reports.forEach((item, index) => {
      console.log(`--- [Recipient ${index + 1}/${reports.length}] ---`);
      console.log(`Phone:     ${item.recipient}`);
      console.log(`Status:    ${item.status}`);
      console.log(`Sender ID: ${item.sender}`);
      console.log(`Date Sent: ${item.date_sent}`);
      console.log(`Log ID:    ${item._id}`);
      console.log(`Retries:   ${item.retries}`);
    });

    console.log('\n--------------------------------------------------');
    console.log('Full JSON Response:\n', JSON.stringify(response.data, null, 2));
  } catch (error) {
    console.error('\n❌ Failed to retrieve report:');
    if (error.response) {
      console.error(`HTTP Status: ${error.response.status}`);
      console.error('Details:', error.response.data);
    } else {
      console.error(error.message);
    }
  }
}

checkDelivery(MESSAGE_ID);
```

**Run via command line:**
```bash
node check-delivery.js 0D939EB0-F717-4F40-92C3-4EEA3367BAC3
```

---

## 3. 💳 Check SMS Balance & Credits

Check your current SMS account balance, remaining credits, and rate per SMS.

- **URL:** `https://us-central1-tamarsoftllc.cloudfunctions.net/getSmsBalance`
- **Method:** `GET`
- **Headers:**
  - `Authorization: Bearer YOUR_CLIENT_API_KEY`

### Success Response (`200 OK`)

```json
{
  "status": "success",
  "balance": 50.00,
  "credits": 1000.00,
  "costPerSms": 0.05
}
```

---

## 4. 📜 Get SMS History

Retrieve your sent message logs, total broadcasts, and account summary programmatically.

- **URL:** `https://us-central1-tamarsoftllc.cloudfunctions.net/getSmsHistory`
- **Method:** `GET`
- **Headers:**
  - `Authorization: Bearer YOUR_CLIENT_API_KEY`

### Success Response (`200 OK`)

```json
{
  "status": "success",
  "client": {
    "id": "client_12345",
    "name": "Acme Corp",
    "smsBalance": 98.45,
    "credits": 1969.00,
    "smsRate": 0.05,
    "senderId": "Acme"
  },
  "history": [
    {
      "id": "doc_id_abc123",
      "senderId": "Acme",
      "message": "testing many numbers at once.",
      "recipient": ["233245349574", "233240214327", "233209141666"],
      "charge": 0.15,
      "pages": 1,
      "messageId": "0D939EB0-F717-4F40-92C3-4EEA3367BAC3",
      "status": "success",
      "date": "2026-09-05T12:45:10.123Z"
    }
  ]
}
```

---

## 💻 Code Examples

### Node.js / JavaScript (Axios)

```javascript
const axios = require('axios');

const API_KEY = 'YOUR_CLIENT_API_KEY';
const BASE_URL = 'https://us-central1-tamarsoftllc.cloudfunctions.net';

const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Authorization': `Bearer ${API_KEY}`,
    'Content-Type': 'application/json'
  }
});

// 1. Send SMS
async function sendSms(recipients, message) {
  try {
    const response = await client.post('/sendSms', {
      recipient: recipients,
      message: message
    });
    console.log('Send SMS Result:', response.data);
    return response.data.messageId;
  } catch (error) {
    console.error('Error sending SMS:', error.response?.data || error.message);
  }
}

// 2. Check Delivery Report
async function getDeliveryReport(messageId) {
  try {
    const response = await client.get('/getDeliveryReport', {
      params: { id: messageId }
    });
    console.log('Delivery Report:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching report:', error.response?.data || error.message);
  }
}

// 3. Check Balance
async function getBalance() {
  try {
    const response = await client.get('/getSmsBalance');
    console.log('Balance:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching balance:', error.response?.data || error.message);
  }
}

// 4. Get SMS History
async function getHistory() {
  try {
    const response = await client.get('/getSmsHistory');
    console.log('SMS History:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching history:', error.response?.data || error.message);
  }
}
```

---

### cURL

#### Send SMS
```bash
curl -X POST https://us-central1-tamarsoftllc.cloudfunctions.net/sendSms \
  -H "Authorization: Bearer YOUR_CLIENT_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "recipient": ["233245349574"],
    "message": "Hello from TamarSoft SMS API!"
  }'
```

#### Check Delivery Report
```bash
curl -X GET "https://us-central1-tamarsoftllc.cloudfunctions.net/getDeliveryReport?id=8EA23B4B-C0C4-410B-84E3-CD67BE39C7E0" \
  -H "Authorization: Bearer YOUR_CLIENT_API_KEY"
```

#### Check Balance
```bash
curl -X GET https://us-central1-tamarsoftllc.cloudfunctions.net/getSmsBalance \
  -H "Authorization: Bearer YOUR_CLIENT_API_KEY"
```

#### Get SMS History
```bash
curl -X GET https://us-central1-tamarsoftllc.cloudfunctions.net/getSmsHistory \
  -H "Authorization: Bearer YOUR_CLIENT_API_KEY"
```

---

## ⚠️ Error Responses & Status Codes

| HTTP Code | Description | Example Cause |
| :--- | :--- | :--- |
| `200` | OK | Request succeeded |
| `400` | Bad Request | Missing required parameters (`recipient`, `message`, or `id`) |
| `401` | Unauthorized | Missing or invalid API key |
| `402` | Payment Required | Insufficient SMS balance for sending |
| `403` | Forbidden | SMS service is not enabled for your account |
| `405` | Method Not Allowed | Incorrect HTTP method used |
| `500` | Internal Server Error | Provider or backend processing error |

---

## 📏 Message Character Lengths

- **1 Page:** 1 – 160 characters
- **2 Pages:** 161 – 306 characters
- **3 Pages:** 307 – 459 characters
- **Maximum Length:** 459 characters
