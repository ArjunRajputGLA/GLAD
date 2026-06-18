async function test() {
  const apiKey = 'cal_live_82a5185c553900fb20242fedac665729';
  try {
    const res = await fetch(`https://api.cal.com/v2/bookings`, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'cal-api-version': '2024-08-13'
      }
    });
    console.log(res.status, await res.text());
  } catch (err) {
    console.error(err);
  }
}
test();
