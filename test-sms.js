import dns from 'node:dns';

// Force Node to prioritize IPv4 over IPv6 (fixes ConnectTimeoutError across different networks/ISPs)
dns.setDefaultResultOrder('ipv4first');

const API_KEY = '2398c0b52943927d47472cf55dc02b59d063ee5e';
const URL = 'https://us-central1-tamarsoftllc.cloudfunctions.net/sendSms';

// Replace with your actual recipient number with country code (e.g., '233XXXXXXXXX')
const RECIPIENT_PHONE = ["233245349574", "233240214327", "233209141666"];

async function testSendSms() {
  console.log(`Sending SMS to ${RECIPIENT_PHONE}...`);

  try {
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        recipient: RECIPIENT_PHONE,
        message: 'testing many numbers at once.'
      })
    });

    const data = await response.json();
    console.log('Status Code:', response.status);
    console.log('Response Data:', data);
  } catch (error) {
    console.error('Error sending SMS:', error);
  }
}

testSendSms();
