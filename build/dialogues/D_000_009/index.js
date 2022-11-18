"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.D_000_009 = void 0;
var botkit_1 = require("botkit");
var N_000_1 = __importDefault(require("../../nodes/N_000"));
var N_001_1 = __importDefault(require("../../nodes/N_001"));
var N_002_1 = __importDefault(require("../../nodes/N_002"));
var N_003_1 = __importDefault(require("../../nodes/N_003"));
var N_004_1 = __importDefault(require("../../nodes/N_004"));
var N_006_1 = __importDefault(require("../../nodes/N_006"));
var N_006_1_1 = __importDefault(require("../../nodes/N_006_1"));
var N_007_1 = __importDefault(require("../../nodes/N_007"));
var N_007_1_1 = __importDefault(require("../../nodes/N_007_1"));
var N_007_2_1 = __importDefault(require("../../nodes/N_007_2"));
var N_008_1 = __importDefault(require("../../nodes/N_008"));
function D_000_009(botCtrl) {
    console.log("D_000_009 loaded");
    // init dialogue
    var thisDialogue = new botkit_1.BotkitConversation("d_000_009", botCtrl);
    var begin = N_001_1["default"](thisDialogue);
    thisDialogue.addAction(begin);
    N_002_1["default"](thisDialogue);
    N_003_1["default"](thisDialogue);
    N_004_1["default"](thisDialogue);
    N_006_1["default"](thisDialogue);
    N_006_1_1["default"](thisDialogue);
    N_007_1["default"](thisDialogue);
    N_007_1_1["default"](thisDialogue);
    N_007_2_1["default"](thisDialogue);
    N_008_1["default"](thisDialogue);
    N_000_1["default"](thisDialogue);
    thisDialogue.addChildDialog("d_014_023", "d_014_023", "t_d_014_023");
    thisDialogue.addChildDialog("d_000_009", "d_000_009", "t_d_000_009");
    botCtrl.addDialog(thisDialogue);
    return thisDialogue;
}
exports.D_000_009 = D_000_009;
//# sourceMappingURL=index.js.map