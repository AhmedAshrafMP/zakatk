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
exports.__esModule = true;
var helpers_1 = require("../helpers");
function bkStrAsk(dialogue, tx, handler, key, attachment, txFn) {
    return dialogue.addQuestion({
        text: txFn ? txFn : function () { return helpers_1.translate(tx); },
        attachment: [
            __assign({ title: key }, attachment),
        ]
    }, handler, key, "t_" + key);
}
exports["default"] = bkStrAsk;
//# sourceMappingURL=ask_str.js.map