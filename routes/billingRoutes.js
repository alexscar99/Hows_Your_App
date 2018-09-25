const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  /*
   * Stripe post route:
   * Pass requireLogin function (exported from requireLogin.js file) as middleware
   * to check if the user is logged. Async callback to set up the charge form, add
   * 5 credits to account and save to user
  */
  app.post('/api/stripe', requireLogin, async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: '5 Survey Credits',
      source: req.body.id,
    });

    req.user.credits += 5;

    const user = await req.user.save();

    res.send(user);
  });
};
