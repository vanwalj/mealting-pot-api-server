/**
 * Created by Jordan on 6/2/2015.
 */
'use strict';

module.exports = function formatKey(key) {
    let match = /(-----.*-----)((?:.*[\n| ])+)(-----.*-----)/g.exec(key);
    if (!match) throw new Error('Input key format error');
    return match[1] + match[2].replace(/ /gi, '\r\n') + match[3];
};