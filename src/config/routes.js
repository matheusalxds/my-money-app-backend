const express = require('express');
const auth = require('./auth');

module.exports = function(server){
  // To Define the base URL
  // const router = express.Router();
  // server.use('/api', router);
  
  /**
   * Redoing routes
   * Protected Routes by Token JWT
   */
  const protectedApi = express.Router();
  server.use('/api', protectedApi);

  protectedApi.use(auth);

  // Billing Cycle Routes
  const BilligCycle = require('../api/billingCycle/billingCycleService');
  BilligCycle.register(protectedApi, '/billingCycle');

  /**
   * Public Routes
   */
  const openApi = express.Router();
  server.use('/oapi', openApi);

  const AuthService = require('../api/user/authService');
  openApi.post('/login', AuthService.login);
  openApi.post('/signup', AuthService.signup);
  openApi.post('/validateToken', AuthService.validateToken);
}