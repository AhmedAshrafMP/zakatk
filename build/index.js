"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.cy = exports.botCtrlInstance = void 0;
var storage_mongodb_1 = require("@botbuildercommunity/storage-mongodb");
var botbuilder_adapter_web_1 = require("botbuilder-adapter-web");
var botkit_1 = require("botkit");
var i18n_js_1 = __importDefault(require("i18n-js"));
var moment_1 = __importDefault(require("moment"));
var dialogues_1 = require("./dialogues");
var D_023_071_1 = require("./dialogues/D_023_071");
require("./helpers/i18n/i18n");
var D_362_385_1 = require("./dialogues/D_362_385");
var cytoscape_1 = __importDefault(require("cytoscape"));
var path = __importStar(require("path"));
var walk_1 = __importDefault(require("./helpers/fs/walk"));
var constract_tree_1 = require("./helpers/tree/constract_tree");
console.log("Starting bot...");
// if (process.env.MONGO_URI) {
console.log("MONGO_URI", process.env.MONGO_URI);
var mongoDbStorage = undefined;
var botCtrl;
// Grab a collection handle off the connected client
if (process.env.MONGO_URI) {
    mongoDbStorage = new storage_mongodb_1.MongoDbStorage(process.env.MONGO_URI || "", "botkitdb", "testCollection");
    var adapter = new botbuilder_adapter_web_1.WebAdapter({});
    botCtrl = new botkit_1.Botkit({
        webhook_uri: "/api/messages",
        adapter: adapter,
        storage: mongoDbStorage
    });
}
else {
    var adapter = new botbuilder_adapter_web_1.WebAdapter({});
    // unComment adapter and storage before uploading
    botCtrl = new botkit_1.Botkit({
        webhook_uri: "/api/messages",
        adapter: adapter,
        storage: mongoDbStorage
    });
}
i18n_js_1["default"].locale = "ar";
moment_1["default"].locale("ar");
exports.botCtrlInstance = botCtrl; //
exports.cy = cytoscape_1["default"]();
var d_000_009 = dialogues_1.D_000_009(botCtrl);
dialogues_1.D_014_023(botCtrl, d_000_009);
dialogues_1.D_055_056(botCtrl);
D_023_071_1.D_023_071(botCtrl);
dialogues_1.D_072_204(botCtrl);
D_362_385_1.D_362_385(botCtrl);
dialogues_1.D_386_406(botCtrl);
dialogues_1.D_393_406(botCtrl);
dialogues_1.D_408_439(botCtrl);
botCtrl.hears(["hello", "bot_start_action"], "message", function (bot, message) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                i18n_js_1["default"].locale = "ar";
                moment_1["default"].locale("ar");
                return [4 /*yield*/, bot.cancelAllDialogs()];
            case 1:
                _a.sent();
                return [2 /*return*/, bot.beginDialog("d_000_009")];
        }
    });
}); });
botCtrl.interrupts("NO_ZAKAT", "message", function (bot, message) {
    return bot.beginDialog("d_055_056");
});
// serve express ts server
// add end point get /api/graph
var port = parseInt("" + process.env.PORT) + 1;
botCtrl.webserver.listen(port, function () {
    console.log("Server is listening on port " + port);
});
botCtrl.webserver.get("/api/graph.json", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var files, cyTree;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, walk_1["default"](path.join(__dirname, "nodes"))];
            case 1:
                files = _a.sent();
                return [4 /*yield*/, constract_tree_1.getTargetNodesFromFileArray(files)];
            case 2:
                cyTree = _a.sent();
                res.send(cyTree.json());
                return [2 /*return*/];
        }
    });
}); });
// botCtrl.webserver.use('/static', botCtrl.webserver.static(path.join(__dirname, 'web-assets/static')))
botCtrl.webserver.get("/api/graph.html", function (req, res) {
    res.sendFile(path.join(__dirname, "/web-assets/graph.html"));
});
//# sourceMappingURL=index.js.map