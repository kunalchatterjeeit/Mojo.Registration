function routes() {
    /**
       * All libraries
       * **/
  
    const express = require('express');
    const router = express.Router();
  
  
    //region Routes Definition
    const routesRegistration = require('./modules/router');
    //endregion
  
    router.use('/registration',routesRegistration); 
  
    return router;
  }
  
  module.exports = routes();
  