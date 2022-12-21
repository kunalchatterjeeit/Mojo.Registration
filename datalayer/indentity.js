const { dbConIdentity } = require('../db');

var insertIdentity = function (regId, req) {
    console.log(regId);
    return new Promise(function (resolve, reject) {
        const sql = `INSERT INTO user_credential
        (RegistrationId, UserName, Password) 
	    VALUES ("${regId}", "${req.userName}", "${req.password}")`;

        dbConIdentity.query(sql, function (err, result, field) {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};

module.exports = {
    insertIdentity
}