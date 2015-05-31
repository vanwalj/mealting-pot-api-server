/**
 * Created by Jordan on 5/31/2015.
 */
'use strict';

const util  = require('util');

module.exports.http = util.debuglog('http');
module.exports.sql  = util.debuglog('sql');
module.exports.core = util.debuglog('core');