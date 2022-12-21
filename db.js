const mysql = require('mysql2');

const dbCon = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'mojo_user',
    password: "P@ssw0rd@1234",
    database: 'mojo_registration'
});

dbCon.connect();

const dbConIdentity = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'mojo_user',
    password: "P@ssw0rd@1234",
    database: 'mojo_identity'
});

dbConIdentity.connect();

module.exports = {dbCon, dbConIdentity};
