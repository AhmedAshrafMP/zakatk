"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.availableTrans = void 0;
var i18n_js_1 = __importDefault(require("i18n-js"));
var en = require("./en");
var ar = require("./ar");
i18n_js_1["default"].fallbacks = true;
exports.availableTrans = { ar: ar, en: en };
i18n_js_1["default"].translations = exports.availableTrans;
var fallback = { languageTag: "ar", isRTL: false };
//# sourceMappingURL=i18n.js.map