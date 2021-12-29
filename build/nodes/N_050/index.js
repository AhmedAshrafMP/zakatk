"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.NODE_050 = void 0;
var ask_qr_1 = __importDefault(require("../../bot_nodes/ask_qr"));
var helpers_1 = require("../../helpers");
var yearsdiff_1 = require("../../helpers/dates/yearsdiff");
var dialogue_1 = require("../../helpers/dialogue");
var variables_1 = require("../../helpers/variables");
var N_040_1_1 = require("../N_040_1");
var NODE_ID = "NODE_050";
function NODE_050(convo) {
    ask_qr_1["default"](convo, NODE_ID + ".title", function (_tmp, vars) {
        return dialogue_1.contiuneOrRepeatDialogue(vars, NODE_ID + ".opt1", "t_d_000_009");
    }, NODE_ID, {}, function (_tmp, vars) {
        var diff = yearsdiff_1.getYearsDiff(vars.LAST_ZAKAT_DAY, vars.NO_OF_YEARS_LEFT);
        var calculatedZakat = N_040_1_1.getZakatForThisYear(vars);
        var paperZakat = calculatedZakat.money +
            calculatedZakat.savings +
            calculatedZakat.stocks;
        var goldZakat = calculatedZakat.gold_money;
        var silverZakat = calculatedZakat.silver_money;
        var threshould = vars.NODE_045 === "NODE_045.choice0"
            ? vars.gold_prices.gThreshold
            : vars.gold_prices.sThreshold;
        var thresholdMetal = vars.NODE_045 === "NODE_045.choice0" ? "GOLD" : "SILVER";
        var GroupingType = vars.NODE_045 === "NODE_046.choice1" ? "GROUP" : "SAPERATE";
        var title = "";
        var groupedZakatFirst, groupedZakatSecond = 0;
        if (GroupingType === "GROUP") {
            if (thresholdMetal === "GOLD") {
                groupedZakatFirst = calculatedZakat.gold_money + paperZakat / 38.8;
                groupedZakatSecond =
                    calculatedZakat.silver_money > vars.gold_prices.sThreshold
                        ? calculatedZakat.silver_money / 38.8
                        : 0;
            }
            else {
                groupedZakatFirst = calculatedZakat.silver_money + paperZakat / 38.8;
                groupedZakatSecond =
                    calculatedZakat.silver_money > vars.gold_prices.gThreshold
                        ? calculatedZakat.gold_money / 38.8
                        : 0;
            }
            // print money + selected metal to metal
            title = helpers_1.translate(NODE_ID + ".GROUP." + thresholdMetal + ".first", {
                groupedZakatFirst: variables_1.numberWithCommas(groupedZakatFirst),
                currency: helpers_1.convertVarToCurrency(vars.NODE_004)
            });
            // print other metal
            title = title + "\n";
            title = helpers_1.translate(NODE_ID + ".GROUP." + thresholdMetal + ".second", {
                groupedZakatSecond: variables_1.numberWithCommas(groupedZakatSecond),
                currency: helpers_1.convertVarToCurrency(vars.NODE_004)
            });
            // print total
            title =
                "\n" +
                    helpers_1.translate(NODE_ID + ".TOTAL", {
                        totalZakat: groupedZakatSecond + groupedZakatFirst,
                        currency: helpers_1.convertVarToCurrency(vars.NODE_004)
                    });
        }
        else {
            var total = 0;
            var allowZakat = paperZakat +
                calculatedZakat.gold_money +
                calculatedZakat.silver_money >
                threshould;
            if (allowZakat) {
                var thisZakat = Math.round(paperZakat / 38.8);
                total = total + thisZakat;
                title =
                    title +
                        "\n" +
                        helpers_1.translate(NODE_ID + ".SAPERATED.PAPER", {
                            thisZakat: variables_1.numberWithCommas(thisZakat),
                            currency: helpers_1.convertVarToCurrency(vars.NODE_004)
                        });
            }
            if (allowZakat) {
                var thisZakat = Math.round(calculatedZakat.gold_money / 38.8);
                total = total + thisZakat;
                title =
                    title +
                        "\n" +
                        helpers_1.translate(NODE_ID + ".SAPERATED.GOLD", {
                            thisZakat: variables_1.numberWithCommas(thisZakat),
                            currency: helpers_1.convertVarToCurrency(vars.NODE_004)
                        });
            }
            if (allowZakat) {
                var thisZakat = Math.round(calculatedZakat.silver_money / 38.8);
                total = total + thisZakat;
                title =
                    title +
                        "\n" +
                        helpers_1.translate(NODE_ID + ".SAPERATED.SILVER", {
                            thisZakat: variables_1.numberWithCommas(thisZakat),
                            currency: helpers_1.convertVarToCurrency(vars.NODE_004)
                        });
            }
            title =
                "\n" +
                    helpers_1.translate(NODE_ID + ".TOTAL", {
                        totalZakat: variables_1.numberWithCommas(total),
                        currency: helpers_1.convertVarToCurrency(vars.NODE_004)
                    });
        }
        return (title + helpers_1.translate(NODE_ID + ".title", { from: diff.from, to: diff.to }));
    });
    return "t_" + NODE_ID;
}
exports.NODE_050 = NODE_050;
//# sourceMappingURL=index.js.map