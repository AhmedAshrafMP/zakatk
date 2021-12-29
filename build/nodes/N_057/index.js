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
exports.NODE_057 = void 0;
var ask_qr_1 = __importDefault(require("../../bot_nodes/ask_qr"));
var helpers_1 = require("../../helpers");
var variables_1 = require("../../helpers/variables");
var NODE_ID = "NODE_057";
function NODE_057(convo) {
    var _this = this;
    ask_qr_1["default"](convo, NODE_ID + ".title", [
        {
            title: NODE_ID + ".opt1",
            payload: NODE_ID + ".choice0",
            onChoose: function (answer, convo, bot, msg) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    convo.setVar("totalGold", variables_1.safeParseFloat("" + convo.vars.NODE_056_1) * 8 +
                        variables_1.safeParseFloat(convo.vars.NODE_056_2) +
                        variables_1.safeParseFloat(convo.vars.NODE_056_2_1) * 0.9166 +
                        variables_1.safeParseFloat(convo.vars.NODE_056_2_2) * 0.75 +
                        variables_1.safeParseFloat(convo.vars.NODE_061_0) +
                        variables_1.safeParseFloat(convo.vars.NODE_061_0_1) * 0.9166 +
                        variables_1.safeParseFloat(convo.vars.NODE_061_0_2) * 0.75);
                    convo.setVar("totalSilver", variables_1.safeParseFloat("" + convo.vars.NODE_056_3) * 8 +
                        variables_1.safeParseFloat(convo.vars.NODE_056_4) +
                        variables_1.safeParseFloat(convo.vars.NODE_056_4_1) * 0.9259 +
                        variables_1.safeParseFloat(convo.vars.NODE_056_4_2) * 0.9009 +
                        variables_1.safeParseFloat(convo.vars.NODE_061_1) +
                        variables_1.safeParseFloat(convo.vars.NODE_061_1_1) * 0.9259 +
                        variables_1.safeParseFloat(convo.vars.NODE_061_1_2) * 0.9009);
                    convo.gotoThread("t_NODE_040_1");
                    return [2 /*return*/];
                });
            }); }
        },
    ], NODE_ID, {}, function (tmp, vars) {
        return helpers_1.translate(NODE_ID + ".title", {
            totalGold: variables_1.safeParseFloat("" + vars.NODE_056_1) * 8 +
                variables_1.safeParseFloat(vars.NODE_056_2) +
                variables_1.safeParseFloat(vars.NODE_056_2_1) * 0.9166 +
                variables_1.safeParseFloat(vars.NODE_056_2_2) * 0.75 +
                variables_1.safeParseFloat(vars.NODE_061_0) +
                variables_1.safeParseFloat(vars.NODE_061_0_1) * 0.9166 +
                variables_1.safeParseFloat(vars.NODE_061_0_2) * 0.75,
            totalSilver: variables_1.safeParseFloat("" + vars.NODE_056_3) * 8 +
                variables_1.safeParseFloat(vars.NODE_056_4) +
                variables_1.safeParseFloat(vars.NODE_056_4_1) * 0.9259 +
                variables_1.safeParseFloat(vars.NODE_056_4_2) * 0.9009 +
                variables_1.safeParseFloat(vars.NODE_061_1) +
                variables_1.safeParseFloat(vars.NODE_061_1_1) * 0.9259 +
                variables_1.safeParseFloat(vars.NODE_061_1_2) * 0.9009
        });
    });
    return "t_" + NODE_ID;
}
exports.NODE_057 = NODE_057;
//# sourceMappingURL=index.js.map