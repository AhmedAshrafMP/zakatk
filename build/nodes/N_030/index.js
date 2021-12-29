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
exports.NODE_030 = void 0;
var ask_qr_1 = __importDefault(require("../../bot_nodes/ask_qr"));
var helpers_1 = require("../../helpers");
var variables_1 = require("../../helpers/variables");
var N_023_1 = require("../N_023");
var NODE_ID = "NODE_030";
function NODE_030(convo) {
    var _this = this;
    ask_qr_1["default"](convo, NODE_ID + ".title", [
        {
            title: NODE_ID + ".opt1",
            payload: NODE_ID + ".choice0",
            onChoose: function (answer, convo, bot, msg) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    N_023_1.markOptionAsDone(convo);
                    convo.gotoThread("t_NODE_040_1");
                    return [2 /*return*/];
                });
            }); }
        },
    ], NODE_ID, {}, function (tm, vars) {
        var totalCurrency = variables_1.safeParseFloat(vars.NODE_029 || 0);
        var totalSavings = variables_1.safeParseFloat(vars.NODE_066 || 0);
        var totalRevSavings = variables_1.safeParseFloat(vars.NODE_065 || 0);
        var totalStocks = variables_1.safeParseFloat(vars.NODE_071 || 0);
        var totalRevStocks = variables_1.safeParseFloat(vars.NODE_070 || 0);
        var currency = helpers_1.convertVarToCurrency(vars.NODE_004);
        var title = helpers_1.translate(NODE_ID + ".title.zero");
        if (totalCurrency > 0) {
            title =
                title +
                    helpers_1.translate(NODE_ID + ".title.one", {
                        totalCurrency: variables_1.numberWithCommas(totalCurrency),
                        currency: currency
                    });
        }
        if (totalSavings > 0) {
            title =
                title +
                    helpers_1.translate(NODE_ID + ".title.two", {
                        totalSavings: variables_1.numberWithCommas(totalSavings),
                        currency: currency
                    });
        }
        if (totalRevSavings > 0) {
            title =
                title +
                    helpers_1.translate(NODE_ID + ".title.four", {
                        totalRevSavings: variables_1.numberWithCommas(totalRevSavings),
                        currency: currency
                    });
        }
        if (totalRevStocks > 0) {
            title =
                title +
                    helpers_1.translate(NODE_ID + ".title.five", {
                        totalRevStocks: variables_1.numberWithCommas(totalRevStocks),
                        currency: currency
                    });
        }
        return title;
    });
    return "t_" + NODE_ID;
}
exports.NODE_030 = NODE_030;
//# sourceMappingURL=index.js.map