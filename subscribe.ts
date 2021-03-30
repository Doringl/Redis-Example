import redis from 'redis';

const client = redis.createClient();

client.on('error', (err) => {
  console.log(err);
});

client.on('message', (channel, message) => {
  console.log(`${channel} isimli kanala ${message} geldi ... `);
});

client.subscribe('queue1');
