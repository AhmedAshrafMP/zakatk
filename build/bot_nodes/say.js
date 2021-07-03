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
function bkSay(dialogue, tx, key, attachment, txVars) {
    return dialogue.addMessage({
        text: function () { return helpers_1.translate(tx, txVars); },
        attachments: [
            __assign({ title: key }, attachment),
        ]
    }, "t_" + key);
}
exports["default"] = bkSay;
//# sourceMappingURL=say.js.map