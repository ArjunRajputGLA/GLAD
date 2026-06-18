async function test() {
  try {
    const start = new Date().toISOString().split('T')[0];
    const end = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
    const res = await fetch(`https://cal.com/api/trpc/public/slots.getSchedule?batch=1&input=%7B%220%22%3A%7B%22json%22%3A%7B%22username%22%3A%22arjun-rajput-2mdsis%22%2C%22eventTypeSlug%22%3A%22discovery-call%22%2C%22startTime%22%3A%22${start}T00%3A00%3A00.000Z%22%2C%22endTime%22%3A%22${end}T23%3A59%3A59.000Z%22%2C%22timeZone%22%3A%22America%2FNew_York%22%2C%22isTeamEvent%22%3Afalse%7D%7D%7D`);
    console.log(res.status, await res.text());
  } catch (err) {
    console.error(err);
  }
}
test();
