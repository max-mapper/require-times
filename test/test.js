var rt = require('../')();
rt.start();

require('./foo');
require('./bar');

rt.end();
