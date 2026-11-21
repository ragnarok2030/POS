import db, { ensureDatabaseReady } from '../lib/db.js';

await ensureDatabaseReady();
await db.query(
  `INSERT INTO stores (id, store_name, address, payment_methods)
   VALUES ('store-1', 'Ons Winkeltje', 'Hellevoetsluis', JSON_OBJECT('cash', true, 'manual_pin', true, 'sumup', false))
   ON DUPLICATE KEY UPDATE store_name = VALUES(store_name)`
);
const [rows] = await db.query('SELECT username, role FROM users');
const [stores] = await db.query('SELECT id, store_name FROM stores');
console.log(JSON.stringify({ users: rows, stores }));
process.exit(0);
