import dns from 'node:dns';

// Force Node to prioritize IPv4 over IPv6
dns.setDefaultResultOrder('ipv4first');

const API_KEY = '2398c0b52943927d47472cf55dc02b59d063ee5e';
const DEFAULT_MESSAGE_ID = '0D939EB0-F717-4F40-92C3-4EEA3367BAC3';
const messageId = process.argv[2] || DEFAULT_MESSAGE_ID;

const URL = `https://us-central1-tamarsoftllc.cloudfunctions.net/getDeliveryReport?id=${encodeURIComponent(messageId)}`;

async function testGetDeliveryReport() {
  console.log(`🔍 Checking delivery report for Message ID: ${messageId}...\n`);

  try {
    const response = await fetch(URL, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${API_KEY}`
      }
    });

    const data = await response.json();
    console.log(`Status Code: ${response.status}`);
    console.log('Response:');
    console.log(JSON.stringify(data, null, 2));

  } catch (error) {
    console.error('❌ Error fetching delivery report:', error);
  }
}

testGetDeliveryReport();
