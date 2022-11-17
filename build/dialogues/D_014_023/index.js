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
exports.D_014_023 = void 0;
var botkit_1 = require("botkit");
var helpers_1 = require("../../helpers");
var apis_1 = require("../../helpers/apis");
var N_000_1 = __importDefault(require("../../nodes/N_000"));
var N_009_1 = __importDefault(require("../../nodes/N_009"));
var N_014_1 = __importDefault(require("../../nodes/N_014"));
var N_015_1 = __importDefault(require("../../nodes/N_015"));
var N_016_1 = __importDefault(require("../../nodes/N_016"));
var N_017_1 = __importDefault(require("../../nodes/N_017"));
var N_018_1 = __importDefault(require("../../nodes/N_018"));
var N_018_1_1 = __importDefault(require("../../nodes/N_018_1"));
var N_055_1 = __importDefault(require("../../nodes/N_055"));
function D_014_023(botCtrl, parent) {
    var _this = this;
    // init dialogue
    var thisDialogue = new botkit_1.BotkitConversation("d_014_023", botCtrl);
    thisDialogue.addChildDialog("d_023_071", "d_023_071", "t_d_023_071");
    thisDialogue.addChildDialog("d_055_056", "d_055_056", "t_d_055_056");
    thisDialogue.addChildDialog("d_362_385", "d_362_385", "t_d_362_385");
    thisDialogue.addChildDialog("d_386_406", "d_386_406", "t_d_386_406");
    thisDialogue.addChildDialog("d_408_439", "d_408_439", "t_d_408_439");
    thisDialogue.addChildDialog("d_072_204", "d_072_204", "t_d_072_204");
    var begin = N_009_1["default"](thisDialogue);
    thisDialogue.addAction(begin);
    N_014_1["default"](thisDialogue);
    N_015_1["default"](thisDialogue);
    N_016_1["default"](thisDialogue);
    N_017_1["default"](thisDialogue);
    N_018_1["default"](thisDialogue);
    N_018_1_1["default"](thisDialogue);
    N_000_1["default"](thisDialogue);
    N_055_1["default"](thisDialogue);
    // thisDialogue.after(async (results, bot) => {
    //   const NoOfDays = moment()
    //     .startOf("D")
    //     .diff(moment(results.LAST_ZAKAT_DAY), "days");
    //   const NoOfYears = Math.floor(NoOfDays / 365);
    //   if (NoOfYears > 0) {
    //     return bot.beginDialog("d_023_071", results.vars);
    //   } else {
    //     return bot.beginDialog("d_055_056");
    //   }
    // });
    thisDialogue.before("t_NODE_015", function (convo, bot) { return __awaiter(_this, void 0, void 0, function () {
        var prices, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 5]);
                    console.log(convo.vars, "stri");
                    if (!!convo.vars.gold_prices) return [3 /*break*/, 2];
                    return [4 /*yield*/, apis_1.getGoldPrices(helpers_1.convertVarToCurrencySym(convo.vars.NODE_004))];
                case 1:
                    prices = _a.sent();
                    console.log("gold_prices", prices);
                    convo.setVar("gold_prices", prices);
                    _a.label = 2;
                case 2: return [3 /*break*/, 5];
                case 3:
                    err_1 = _a.sent();
                    return [4 /*yield*/, bot.cancelAllDialogs()];
                case 4:
                    _a.sent();
                    return [2 /*return*/, bot.say("Wrong gold prices")];
                case 5: return [2 /*return*/];
            }
        });
    }); });
    thisDialogue.after(function (v, bot) {
        // restart the dialogue after finishing
        return bot.beginDialog("d_014_023", {
            NODE_002: v.NODE_002,
            NODE_003: v.NODE_003,
            NODE_004: v.NODE_004,
            NODE_006: v.NODE_006,
            NODE_006_1: v.NODE_006_1,
            NODE_008: v.NODE_008,
            gold_prices: v.gold_prices
        });
    });
    botCtrl.addDialog(thisDialogue);
}
exports.D_014_023 = D_014_023;
//# sourceMappingURL=index.js.map