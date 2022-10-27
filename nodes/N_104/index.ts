import { BotkitConversation } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";
import { convertVarToCurrency, translate } from "../../helpers";
import { getYearsDiff } from "../../helpers/dates/yearsdiff";
import { numberWithCommas, safeParseFloat } from "../../helpers/variables";
import { singleCompanyNames } from "../N_098_1_1";

let allZakatIacYears = new Map();
const NODE_ID = "NODE_104";
function setZakatPerYear(vars, leftYears) {
  const diff = getYearsDiff(vars.LAST_SINGLECOMPANY_DAY, leftYears + 1);
  const myYears = vars.myYears || {};

  const singleCompany = safeParseFloat(vars.singleCompany);

  if (singleCompany >= vars.gold_prices.gThreshold) {
    // set the value here in obj for the finalSingleZakatCompany
    myYears[diff.toMoment.toISOString()] = singleCompany;
  }
}

function clearYearsValue(convo, leftYears) {
  convo.setVar("NO_OF_SINGLECOMPANYYEARS_LEFT", leftYears);
  // convo.setVar("numberOfSingleCompany", numberOfSingleCompany);
  convo.setVar("myYears", setZakatPerYear(convo.vars, leftYears));
}

export function NODE_104(convo: BotkitConversation): string {
  bkQRAsk(
    convo,
    NODE_ID + ".title",
    (_tmp, vars) => {
      let leftYears = parseFloat(vars.NO_OF_SINGLECOMPANYYEARS_LEFT) - 1;
      // let numberOfSingleCompany = parseFloat(vars.numberOfSingleCompany) - 1;

      if (leftYears > 0) {
        return [
          {
            title: translate(NODE_ID + ".opt1"),
            payload: NODE_ID + ".choice0",
            onChoose: async (_answer, convo, _bot, _msg) => {
              clearYearsValue(convo, leftYears);
              const diff = getYearsDiff(
                convo.vars.LAST_SINGLECOMPANY_DAY,
                convo.vars.NO_OF_SINGLECOMPANYYEARS_LEFT
              );
              let theSingleCompanyNames = "";
              singleCompanyNames.forEach((key, value) => {
                theSingleCompanyNames = `${value} : ${numberWithCommas(
                  safeParseFloat(key)
                )}`;
              });

              allZakatIacYears.set(diff, theSingleCompanyNames);
              convo.setVar("allZakatIacYears", allZakatIacYears);
              convo.gotoThread("t_NODE_095");
            },
          },
          {
            title: translate(NODE_ID + ".opt5"),
            payload: NODE_ID + ".choice4",
            onChoose: async (_answer, convo, _bot, _msg) => {
              convo.stop();
            },
          },
        ];
      } else {
        return [
          {
            title: translate(NODE_ID + ".opt2"),
            payload: NODE_ID + ".choice0",
            onChoose: async (_answer, convo, bot, _msg) => {
              convo.gotoThread("t_NODE_095");
            },
          },
          {
            title: translate(NODE_ID + ".opt4"),
            payload: NODE_ID + ".choice3",
            onChoose: async (_answer, convo, bot, _msg) => {
              clearYearsValue(convo, leftYears);
              const diff = getYearsDiff(
                convo.vars.LAST_SINGLECOMPANY_DAY,
                convo.vars.NO_OF_SINGLECOMPANYYEARS_LEFT
              );
              let theSingleCompanyNames = "";
              singleCompanyNames.forEach((key, value) => {
                theSingleCompanyNames = `${value} : ${numberWithCommas(
                  safeParseFloat(key)
                )}`;
              });

              allZakatIacYears.set(diff, theSingleCompanyNames);
              convo.setVar("allZakatIacYears", allZakatIacYears);
              convo.gotoThread("t_NODE_104_1");
            },
          },
        ];
      }
    },
    NODE_ID,
    {},
    (_tmp, vars) => {
      const diff = getYearsDiff(
        vars.LAST_SINGLECOMPANY_DAY,
        vars.NO_OF_SINGLECOMPANYYEARS_LEFT
      );

      console.log(vars.NO_OF_SINGLECOMPANYYEARS_LEFT, "diff.from , diff.to");
      const text: string[] = [];
      const currency = convertVarToCurrency(vars.NODE_004);
      // الشركات الفردية
      const singleCompanyNames = vars.singleCompanyNames;
      let answerIs;
      if (singleCompanyNames) {
        singleCompanyNames.forEach((key, value) => {
          answerIs = `${value} : ${numberWithCommas(
            safeParseFloat(key)
          )} ${currency}`;
        }),
          text.push(
            translate(NODE_ID + ".singleCompany", {
              value: answerIs,
            })
          );
      }

      text.push(
        translate(NODE_ID + ".NODE_PERIOD", { from: diff.from, to: diff.to })
      );
      return " - " + text.join("\n - ");
    }
  );

  return `t_${NODE_ID}`;
}
