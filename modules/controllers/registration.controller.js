function controller(req) {

    /**
        * all required libraries
        * **/
    const defaultResponse = require('../../utility/defaultResponse');
    const registration = require('../../datalayer/registration');
    const producer = require('../../producer');
    const consumer = require('../../consumer');


    /**
       * public functions
       * **/

    return ({
        getUsertypeList: async (res) => {
            try {                
                //await consumer.consumeKafkaMessage();
                const result = await registration.getUsertypeList();           
                defaultResponse().success('List fetched successfully.', result, res, 200, null);

            } catch (exception) {
                console.log(exception);
                defaultResponse().error(exception, res, 500);
            }
        },
        getRegistrationyById: async (res) => {
            try {                
                console.log(req);
                const result = await registration.getRegistrationyById(req.body);           
                defaultResponse().success('Fetched successfully.', result, res, 200, null);

            } catch (exception) {
                console.log(exception);
                defaultResponse().error(exception, res, 500);
            }
        },

        insertRegistration: async (res) => {
            try {
                console.log(req.body);                
                //await producer.sendKafkaMessage(req.body.email, req.body);
                const result = await registration.insertRegistration(req.body);           
                defaultResponse().success('Inserted successfully.', result, res, 200, null);

            } catch (exception) {
                console.log(exception);
                defaultResponse().error(exception, res, 500);
            }
        },
    });
}

module.exports = controller;