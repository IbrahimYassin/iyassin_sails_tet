/**
 * CustomerController
 *
 * @description :: Server-side logic for managing customers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  'new': function(req, res) {
    res.view();
  },

  create: function(req, res, next) {
    Customer.create(req.params.all(), function customerCreateed(err, customer) {
      if(err) return next(err);

      res.redirect('/customer/show/'+customer.id);
    });
  },

  show: function(req, res, next) {
    Customer.findOne(req.param('id') , function customerFound(err, customer) {
      if(err) return next(err);
      if(!customer) return next();

      res.view({
        customer: customer
      });
    });
  }
};
