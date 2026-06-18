const fetch = require('node-fetch'); // or just use global fetch if Node >= 18
async function test() {
  const apiKey = 'cal_live_82a5185c553900fb20242fedac665729';
  const start = new Date().toISOString().split('T')[0];
  const end = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
  
  try {
    // Attempt 1: Fetch v1 event types to find the ID (wait, it was 410, let's skip v1 event types)
    // Attempt 2: Fetch v1 schedules?
    // Attempt 3: Fetch v2 slots with username
    console.log("Fetching v2 slots with username...");
    const v2Res = await fetch(`https://api.cal.com/v2/slots?startTime=${start}T00:00:00.000Z&endTime=${end}T23:59:59.000Z&username=arjun-rajput-2mdsis`, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'cal-api-version': '2024-08-13'
      }
    });
    console.log(v2Res.status, await v2Res.text());
  } catch (err) {
    console.error(err);
  }
}
test();
