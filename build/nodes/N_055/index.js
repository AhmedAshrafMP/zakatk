"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var say_1 = __importDefault(require("../../bot_nodes/say"));
var NODE_ID = "NODE_055";
function NODE_055(convo) {
    say_1["default"](convo, NODE_ID + ".hello", NODE_ID);
    return "t_" + NODE_ID;
}
exports["default"] = NODE_055;
//# sourceMappingURL=index.js.map