"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.NODE_049 = void 0;
var ask_qr_1 = __importDefault(require("../../bot_nodes/ask_qr"));
var helpers_1 = require("../../helpers");
var yearsdiff_1 = require("../../helpers/dates/yearsdiff");
var dialogue_1 = require("../../helpers/dialogue");
var NODE_ID = "NODE_049";
function NODE_049(convo) {
    ask_qr_1["default"](convo, NODE_ID + ".title", function (_tmp, vars) {
        return dialogue_1.contiuneOrRepeatDialogue(vars, NODE_ID + ".opt2", "t_d_000_009");
    }, NODE_ID, {}, function (_tmp, vars) {
        var diff = yearsdiff_1.getYearsDiff(vars.LAST_ZAKAT_DAY, vars.NO_OF_YEARS_LEFT);
        return helpers_1.translate(NODE_ID + ".title", {
            from: diff.from,
            to: diff.to
        });
    });
    return "t_" + NODE_ID;
}
exports.NODE_049 = NODE_049;
//# sourceMappingURL=index.js.map