var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var User = db.Model.extend({
  tableName: 'users',


  initialize: function() {
    this.on('creating', function(model, attrs, options){
    var username = this.attributes.username;
    var salt = bcrypt.genSaltSync(10);
    var password = bcrypt.hashSync(password, salt);
    })
  },

  comparePassword: function(possiblePassword) {
    console.log('stored password', this.password);
    bcrypt.compareSync(possiblePassword, this.password, function (err, Match) {
      if (err) return callback(err);
      return Match;
    })
  }
});


module.exports = User;
