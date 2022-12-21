function routes() {
    /**
       * All libraries
       * **/
    const express = require('express');
    const router = express.Router();
    const controller = require('./controllers/registration.controller');
    
    


    /*
      * Controller Actions
      * **/
    router.post('/getUserTypeLIst', (req, res) => {
      controller(req).getUsertypeList(res);
    });
    router.post('/getRegistrationyById', (req, res) => {
      controller(req).getRegistrationyById(res);
    });
    router.post('/insertRegistration', (req, res) => {
      controller(req).insertRegistration(res);
    });
  
  
    return router;
  }
  
  module.exports = routes();
  