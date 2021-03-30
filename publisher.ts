import redis from 'redis';

const client = redis.createClient();

client.publish('queue1', 'app üzerinden gönderilen mesaj ... ', (err, res) => {
  if (err) console.log(err);
  console.log(`Mesaj ${res} kişiye gönderildi ... `);
});
