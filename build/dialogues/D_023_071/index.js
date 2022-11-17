"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.D_023_071 = void 0;
var botkit_1 = require("botkit");
var variables_1 = require("../../helpers/variables");
var nodes_1 = require("../../nodes");
var N_000_1 = __importDefault(require("../../nodes/N_000"));
var N_037_1 = require("../../nodes/N_037");
var N_056_2_1_1 = require("../../nodes/N_056_2_1");
var N_056_2_2_1 = require("../../nodes/N_056_2_2");
var N_061_0_1_1 = require("../../nodes/N_061_0_1");
var N_061_0_2_1 = require("../../nodes/N_061_0_2");
var N_061_1_1_1 = require("../../nodes/N_061_1_1");
var N_061_1_2_1 = require("../../nodes/N_061_1_2");
function D_023_071(botCtrl) {
    var _this = this;
    // init dialogue
    var thisDialogue = new botkit_1.BotkitConversation("d_023_071", botCtrl);
    var begin = nodes_1.NODE_023(thisDialogue);
    thisDialogue.addAction(begin);
    nodes_1.NODE_023_1(thisDialogue);
    nodes_1.NODE_025(thisDialogue);
    nodes_1.NODE_024(thisDialogue);
    nodes_1.NODE_029(thisDialogue);
    nodes_1.NODE_030(thisDialogue);
    nodes_1.NODE_031(thisDialogue);
    nodes_1.NODE_032(thisDialogue);
    nodes_1.NODE_032_1(thisDialogue);
    nodes_1.NODE_034(thisDialogue);
    nodes_1.NODE_034_1(thisDialogue);
    nodes_1.NODE_034_2(thisDialogue);
    nodes_1.NODE_035(thisDialogue);
    nodes_1.NODE_035_1(thisDialogue);
    nodes_1.NODE_035_2(thisDialogue);
    nodes_1.NODE_035_3(thisDialogue);
    nodes_1.NODE_036(thisDialogue);
    N_037_1.NODE_037(thisDialogue);
    nodes_1.NODE_038(thisDialogue);
    nodes_1.NODE_039(thisDialogue);
    nodes_1.NODE_040(thisDialogue);
    nodes_1.NODE_040_1(thisDialogue);
    nodes_1.NODE_041(thisDialogue);
    nodes_1.NODE_043(thisDialogue);
    nodes_1.NODE_045(thisDialogue);
    nodes_1.NODE_046(thisDialogue);
    nodes_1.NODE_049(thisDialogue);
    nodes_1.NODE_050(thisDialogue);
    nodes_1.NODE_056(thisDialogue);
    nodes_1.NODE_056_1(thisDialogue);
    N_056_2_1_1.NODE_056_2_1(thisDialogue);
    N_056_2_2_1.NODE_056_2_2(thisDialogue);
    nodes_1.NODE_056_2(thisDialogue);
    nodes_1.NODE_056_3(thisDialogue);
    nodes_1.NODE_056_4(thisDialogue);
    nodes_1.NODE_056_4_1(thisDialogue);
    nodes_1.NODE_056_4_2(thisDialogue);
    nodes_1.NODE_058_5(thisDialogue);
    nodes_1.NODE_059_6(thisDialogue);
    nodes_1.NODE_057(thisDialogue);
    nodes_1.NODE_058(thisDialogue);
    nodes_1.NODE_059(thisDialogue);
    nodes_1.NODE_060(thisDialogue);
    nodes_1.NODE_060_1(thisDialogue);
    nodes_1.NODE_060_2(thisDialogue);
    nodes_1.NODE_061_0(thisDialogue);
    N_061_0_1_1.NODE_061_0_1(thisDialogue);
    N_061_0_2_1.NODE_061_0_2(thisDialogue);
    nodes_1.NODE_061_1(thisDialogue);
    N_061_1_1_1.NODE_061_1_1(thisDialogue);
    N_061_1_2_1.NODE_061_1_2(thisDialogue);
    nodes_1.NODE_062(thisDialogue);
    nodes_1.NODE_062_1(thisDialogue);
    nodes_1.NODE_062_2(thisDialogue);
    nodes_1.NODE_063(thisDialogue);
    nodes_1.NODE_065(thisDialogue);
    nodes_1.NODE_066(thisDialogue);
    nodes_1.NODE_067(thisDialogue);
    nodes_1.NODE_067_1(thisDialogue);
    nodes_1.NODE_068(thisDialogue);
    nodes_1.NODE_068_2(thisDialogue);
    nodes_1.NODE_069(thisDialogue);
    nodes_1.NODE_070(thisDialogue);
    N_000_1["default"](thisDialogue);
    nodes_1.NODE_071(thisDialogue);
    thisDialogue.addQuestion("Hello i`m d_023_071 {{vars.NO_OF_YEARS_LEFT}} {{vars.NODE_029}}", function (answer, convo, bot) { return __awaiter(_this, void 0, void 0, function () {
        var leftYears;
        return __generator(this, function (_a) {
            leftYears = variables_1.safeParseFloat(convo.vars.NO_OF_YEARS_LEFT) - 1;
            convo.setVar("NO_OF_YEARS_LEFT", leftYears);
            if (leftYears > 0) {
                // console.log("resp", convo.vars);
                convo.gotoThread(begin);
            }
            return [2 /*return*/];
        });
    }); }, "HELLO", "hq");
    botCtrl.addDialog(thisDialogue);
}
exports.D_023_071 = D_023_071;
//# sourceMappingURL=index.js.map