import redis from 'redis';

const client = redis.createClient();

client.on('error', (err) => {
  console.log(err);
});

const Key = 'username';

// Set
client.set(Key, 'sefa', (err, res) => {
  if (err) console.log(err);
  console.log('Set', res);
});

// Get
client.get(Key, (err, res) => {
  if (err) console.log(err);
  console.log(`Value of ${Key}:`, res);
});

// Delete
client.del(Key, (err, res) => {
  if (err) console.log(err);
  console.log(`Deleted`, res);
});

// Exists
client.exists(Key, (err, res) => {
  if (err) console.log(err);
  console.log(`Exists`, res);
});

// Append
client.append('password', '1234', (err, res) => {
  if (err) console.log(err);
  console.log(`Append`, res);
  client.get('password', (err, res) => {
    if (err) console.log(err);
    console.log('Okunan', res);
  });
});
