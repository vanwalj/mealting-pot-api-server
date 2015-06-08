/**
 * Created by Jordan on 6/2/2015.
 */
'use strict';

const fs        = require('fs');
const debugLog  = require('../lib/debug-log');

module.exports = function formatKey(key) {
    try {
        key = fs.readFileSync(key);
    } catch (e) {}
    const match = /(-----.*-----)((?:.*[\n| ])+)(-----.*-----)/g.exec(key);
    if (!match) throw new Error('Input key format error');
    return match[1] + match[2].replace(/ /gi, '\r\n') + match[3];
};