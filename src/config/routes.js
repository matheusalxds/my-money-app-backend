const express = require('express');

module.exports = function(server){
  // To Define the base URL
  const router = express.Router();
  server.use('/api', router);

  // Billing Cycle Routes
  const BilligCycle = require('../api/billingCycle/billingCycleService');
  BilligCycle.register(router, '/billingCycle');
}