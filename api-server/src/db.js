import mysql from 'mysql';
import config from './config.json';
const connection = mysql.createConnection({
  host: config.database.host,
  port: config.database.port,
  user: config.database.user,
  password: config.database.password,
  database: config.database.name
});

export default callback => {
	// connect to a database if needed, then pass it to `callback`:
 connection.connect(function (err) {
   if (err) {
     console.error('error connecting: ' + err.stack);
     return;
   }
   console.log('MYSQL connected as id ' + connection.threadId);
   callback(connection);
 });
}