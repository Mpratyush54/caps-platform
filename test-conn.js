const { Client } = require('pg');

async function main() {
  const client = new Client({
    connectionString: 'postgresql://battery_user:BatteryStrongPass123!@mongo.pratyushes.dev:31071/devops',
    ssl: false // Try without SSL first
  });

  try {
    console.log('Connecting to PostgreSQL...');
    await client.connect();
    console.log('Connected successfully!');
    
    console.log('Querying users count...');
    const res = await client.query('SELECT COUNT(*) FROM users');
    console.log('Users count:', res.rows[0].count);
  } catch (err) {
    console.error('Connection error:', err.message);
  } finally {
    await client.end();
  }
}

main();
