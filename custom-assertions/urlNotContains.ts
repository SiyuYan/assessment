var util = require('util');
exports.assertion = function (expected = null, msg = null) {

  this.message = msg || util.format('Testing if the URL not equals "%s".', expected);
  this.expected = expected;

  this.pass = function (value: any) {
    return value !== this.expected;
  };

  this.value = function (result: any) {
    return result.value;
  };

  this.command = function (done: () => void) {
    this.api.url(done);
    return this;
  };

};
