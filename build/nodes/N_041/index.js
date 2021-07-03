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
exports.NODE_041 = void 0;
var ask_qr_1 = __importDefault(require("../../bot_nodes/ask_qr"));
var helpers_1 = require("../../helpers");
var yearsdiff_1 = require("../../helpers/dates/yearsdiff");
var variables_1 = require("../../helpers/variables");
var NODE_ID = "NODE_041";
function setZakatPerYear(vars, leftYears) {
    var diff = yearsdiff_1.getYearsDiff(vars.LAST_ZAKAT_DAY, leftYears + 1);
    var zakat_per_years = vars.zakat_per_years || {};
    var zkataValues = {
        money: variables_1.safeParseFloat(vars.NODE_029) -
            variables_1.safeParseFloat(vars.totalDebit) +
            variables_1.safeParseFloat(vars.totalCredit),
        savings: variables_1.safeParseFloat(vars.NODE_066) + variables_1.safeParseFloat(vars.NODE_065),
        stocks: variables_1.safeParseFloat(vars.NODE_070) + variables_1.safeParseFloat(vars.NODE_071),
        gold_gram: variables_1.safeParseFloat(vars.totalGold),
        silver_gram: variables_1.safeParseFloat(vars.totalSilver),
        gold_money: variables_1.safeParseFloat(vars.totalGold) * vars.gold_prices.gold,
        silver_money: variables_1.safeParseFloat(vars.totalGold) * vars.gold_prices.silver,
        resolved: false
    };
    console.log(zkataValues, vars.gold_prices);
    // add this year if it passed silver threshold
    if (zkataValues.money +
        zkataValues.savings +
        zkataValues.stocks +
        zkataValues.gold_money +
        zkataValues.silver_money >
        vars.gold_prices.sThreshold) {
        // add year to years object
        zakat_per_years[diff.toMoment.toISOString()] = zkataValues;
    }
    return zakat_per_years;
}
function NODE_041(convo) {
    var _this = this;
    ask_qr_1["default"](convo, NODE_ID + ".title", function (_tmp, vars) {
        var leftYears = parseFloat(vars.NO_OF_YEARS_LEFT) - 1;
        if (leftYears > 0) {
            return [
                {
                    title: helpers_1.translate(NODE_ID + ".opt1"),
                    payload: NODE_ID + ".choice0",
                    onChoose: function (_answer, convo, _bot, _msg) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            // TODO: reset resettable variables
                            convo.setVar("doneMoneyOptions", []);
                            convo.setVar("NODE_031", "");
                            convo.setVar("totalDebit", 0);
                            convo.setVar("totalCredit", 0);
                            convo.setVar("totalGold", 0);
                            convo.setVar("totalSilver", 0);
                            convo.setVar("NODE_038", "");
                            convo.setVar("NO_OF_YEARS_LEFT", leftYears);
                            /// set period current value
                            convo.setVar("zakat_per_years", setZakatPerYear(convo.vars, leftYears));
                            convo.gotoThread("t_NODE_023");
                            return [2 /*return*/];
                        });
                    }); }
                },
            ];
        }
        else {
            return [
                {
                    title: helpers_1.translate(NODE_ID + ".opt2"),
                    payload: NODE_ID + ".choice0",
                    onChoose: function (_answer, convo, bot, _msg) { return __awaiter(_this, void 0, void 0, function () {
                        var zakat_per_years;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    zakat_per_years = setZakatPerYear(convo.vars, leftYears);
                                    convo.setVar("zakat_per_years", zakat_per_years);
                                    console.log(zakat_per_years);
                                    return [4 /*yield*/, bot.say("TODO: TOTAL ZAKAT CARD")];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/, bot.cancelAllDialogs()];
                            }
                        });
                    }); }
                },
            ];
        }
    }, NODE_ID, {}, function (_tmp, vars) {
        var text = [];
        var currency = helpers_1.convertVarToCurrency(vars.NODE_004);
        // money
        var NODE_029 = variables_1.safeParseFloat(vars.NODE_029);
        if (NODE_029 > 0) {
            text.push(helpers_1.translate(NODE_ID + ".NODE_029", {
                value: variables_1.numberWithCommas(NODE_029),
                currency: currency
            }));
        }
        // money
        var TOTAL_DEBIT = variables_1.safeParseFloat(vars.totalDebit);
        if (TOTAL_DEBIT > 0) {
            text.push(helpers_1.translate(NODE_ID + ".NODE_DEBIT", {
                value: variables_1.numberWithCommas(TOTAL_DEBIT),
                currency: currency
            }));
        }
        // money
        var TOTAL_CREDIT = variables_1.safeParseFloat(vars.totalCredit);
        if (TOTAL_CREDIT > 0) {
            text.push(helpers_1.translate(NODE_ID + ".NODE_CREDIT", {
                value: variables_1.numberWithCommas(TOTAL_CREDIT),
                currency: currency
            }));
        }
        //savings
        var NODE_025 = variables_1.safeParseFloat(vars.NODE_066) + variables_1.safeParseFloat(vars.NODE_065);
        if (NODE_025 > 0) {
            text.push(helpers_1.translate(NODE_ID + ".NODE_025", {
                value: variables_1.numberWithCommas(NODE_025),
                currency: currency
            }));
        }
        //stocks
        var NODE_024 = variables_1.safeParseFloat(vars.NODE_070) + variables_1.safeParseFloat(vars.NODE_071);
        if (NODE_024 > 0) {
            text.push(helpers_1.translate(NODE_ID + ".NODE_024", {
                value: variables_1.numberWithCommas(NODE_024),
                currency: currency
            }));
        }
        // gold
        var NODE_026 = variables_1.safeParseFloat(vars.totalGold);
        if (NODE_026 > 0) {
            text.push(helpers_1.translate(NODE_ID + ".NODE_026", {
                value: NODE_026
            }));
        }
        // silver
        var NODE_026_1 = variables_1.safeParseFloat(vars.totalSilver);
        if (NODE_026_1 > 0) {
            text.push(helpers_1.translate(NODE_ID + ".NODE_026_1", {
                value: NODE_026_1
            }));
        }
        var diff = yearsdiff_1.getYearsDiff(vars.LAST_ZAKAT_DAY, vars.NO_OF_YEARS_LEFT);
        text.push(helpers_1.translate(NODE_ID + ".NODE_PERIOD", { from: diff.from, to: diff.to }));
        return " - " + text.join("\n - ");
    });
    return "t_" + NODE_ID;
}
exports.NODE_041 = NODE_041;
//# sourceMappingURL=index.js.map