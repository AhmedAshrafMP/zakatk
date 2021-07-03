"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.convertVarToCurrency = exports.convertVarToCurrencySym = exports.translate = void 0;
var i18n_js_1 = __importDefault(require("i18n-js"));
/**
 * Translates text.
 *
 * @param key The i18n key.
 */
function translate(key, options) {
    var opts = __assign(__assign({}, options), { defaultValue: key, defaults: [{ message: key }] });
    return key ? i18n_js_1["default"].t(key, opts) : "";
}
exports.translate = translate;
function convertVarToCurrencySym(varValue) {
    return varValue.substr(varValue.indexOf(".") + 1);
}
exports.convertVarToCurrencySym = convertVarToCurrencySym;
function convertVarToCurrency(varValue) {
    return translate("NODE_004.currency." + convertVarToCurrencySym(varValue));
}
exports.convertVarToCurrency = convertVarToCurrency;
//# sourceMappingURL=index.js.map