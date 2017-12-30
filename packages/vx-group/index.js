'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./umd/vx-group.production.min.js');
} else {
  module.exports = require('./umd/vx-group.development.js');
}