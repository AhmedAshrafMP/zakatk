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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
exports.__esModule = true;
exports.BlackListedBack = void 0;
var helpers_1 = require("../helpers");
exports.BlackListedBack = ["NODE_001", "NODE_023", "NODE_009"];
function bkQRAsk(dialogue, tx, replies, key, attachment, txFn) {
    var _this = this;
    var stringKey = typeof key === "string" ? key : key.key;
    var IsBlackListed = exports.BlackListedBack.indexOf(stringKey) >= 0;
    var goBack = function (convo) {
        var oldNodeTree = convo.vars.last_visited_node;
        // remove this item
        var index = oldNodeTree.indexOf(stringKey);
        if (index > -1) {
            oldNodeTree.splice(index, 1);
        }
        // go back one step
        var prevNode = oldNodeTree[oldNodeTree.length - 1];
        // remove previous item too
        var index = oldNodeTree.indexOf(prevNode);
        if (index > -1) {
            oldNodeTree.splice(index, 1);
        }
        convo.setVar("last_visited_node", oldNodeTree);
        convo.gotoThread("t_" + prevNode);
    };
    var goBackQROption = {
        title: "on_go_back",
        payload: "on_go_back",
        onChoose: function (_, convo) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                goBack(convo);
                return [2 /*return*/];
            });
        }); }
    };
    // add go back functionality
    var quick_replies = typeof replies === "function"
        ? function (tmp, vars) {
            var defaultReplies = replies(tmp, vars);
            if (!IsBlackListed) {
                defaultReplies.push(goBackQROption);
            }
            return defaultReplies;
        }
        : function () {
            var defaultReplies = replies.map(function (el) { return (__assign(__assign({}, el), { title: helpers_1.translate(el.title) })); });
            if (!IsBlackListed) {
                defaultReplies.push(goBackQROption);
            }
            return defaultReplies;
        };
    return dialogue.addQuestion({
        text: txFn ? txFn : function () { return helpers_1.translate(tx); },
        quick_replies: quick_replies,
        attachments: [
            __assign({ title: key }, attachment),
        ]
    }, function (answer, convo, bot, msg) { return __awaiter(_this, void 0, void 0, function () {
        var oldSteps;
        var _a, _b;
        return __generator(this, function (_c) {
            oldSteps = convo.vars.last_visited_node || [];
            convo.setVar("last_visited_node", __spreadArray(__spreadArray([], oldSteps), [key]));
            (_b = (_a = quick_replies(msg, convo.vars)) === null || _a === void 0 ? void 0 : _a.filter(function (el) { return el.payload === answer; })[0]) === null || _b === void 0 ? void 0 : _b.onChoose(answer, convo, bot, msg);
            return [2 /*return*/];
        });
    }); }, key, "t_" + key);
}
exports["default"] = bkQRAsk;
//# sourceMappingURL=ask_qr.js.map