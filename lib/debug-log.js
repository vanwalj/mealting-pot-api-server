/**
 * Created by Jordan on 5/31/2015.
 */
'use strict';

const util  = require('util');

module.exports.http = util.debuglog('mp_http');
module.exports.sql  = util.debuglog('mp_sql');
module.exports.core = util.debuglog('mp_core');