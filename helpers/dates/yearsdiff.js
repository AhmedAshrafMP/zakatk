"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.getYearsDiff = void 0;
var moment_1 = __importDefault(require("moment"));
function getYearsDiff(lastZakatDay, TotalNoOfZakatYears) {
    var NoOFYears = Math.floor(moment_1["default"]()
        .startOf("D")
        .diff(moment_1["default"](moment_1["default"](lastZakatDay)), "days") / 365);
    /**
     * get the current period in the period loop
     * if the period consists of 5 years so this period
     *  ex1: 5-5 = 0 => first year (from = start year + 0, to: start year + 0 + 1)
     *  ex2: 5-4 = 1 => second year (from = start year + 1, to: start year + 1 + 1)
     */
    var YearDiff = NoOFYears - TotalNoOfZakatYears;
    var from = moment_1["default"](lastZakatDay).add(TotalNoOfZakatYears - 1, "years");
    var to = moment_1["default"](lastZakatDay)
        .add(TotalNoOfZakatYears, "years")
        .subtract(1, "days");
    return {
        from: from.format("ll"),
        to: to.format("ll"),
        fromMoment: from,
        toMoment: to
    };
}
exports.getYearsDiff = getYearsDiff;
//# sourceMappingURL=yearsdiff.js.map