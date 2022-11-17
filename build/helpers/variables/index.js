"use strict";
exports.__esModule = true;
exports.numberWithCommas = exports.safeParseFloat = void 0;
function safeParseFloat(n) {
    return parseFloat(parseFloat(typeof n != "undefined" && n != "undefined" ? "" + n : "0").toFixed(2));
}
exports.safeParseFloat = safeParseFloat;
function numberWithCommas(x) {
    return (x || 0).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}
exports.numberWithCommas = numberWithCommas;
//# sourceMappingURL=index.js.map