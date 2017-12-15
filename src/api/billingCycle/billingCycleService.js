const BillingCycle = require('./billingCyle');

BillingCycle.methods(['get', 'post', 'put', 'delete']);
BillingCycle.updateOptions({ new: true, runValidators: true });

BillingCycle.route('count', (req, res, next) => {
  BillingCycle.count((err, value) => {
    if(err){
      res.status(500).json({errors: [error]})
    } else {
      res.json({ value })
    }
  });
})

module.exports = BillingCycle;

