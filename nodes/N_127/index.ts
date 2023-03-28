import { BotkitConversation } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";
import { convertVarToCurrency, translate } from "../../helpers";
import { getYearsDiff } from "../../helpers/dates/yearsdiff";
import { numberWithCommas, safeParseFloat } from "../../helpers/variables";
import { zakatIAC1 } from "../N_122";

let allZakatIAC1 = new Map();
const NODE_ID = "NODE_127";
function setZakatPerYear(vars, leftYears) {
  const diff = getYearsDiff(vars.LAST_IAC1_DAY, leftYears + 1);
  const myYears = vars.myYears || {};

  const singleCompany = safeParseFloat(vars.singleCompany);

  if (singleCompany >= vars.gold_prices.gThreshold) {
    // set the value here in obj for the finalSingleZakatCompany
    myYears[diff.toMoment.toISOString()] = singleCompany;
  }
}

function clearYearsValue(convo, leftYears) {
  convo.setVar("NO_OF_IAC1YEARS_LEFT", leftYears);
  // convo.setVar("numberOfSingleCompany", numberOfSingleCompany);
  convo.setVar("myYears", setZakatPerYear(convo.vars, leftYears));
}

export function NODE_127(convo: BotkitConversation): string {
  bkQRAsk(
    convo,
    NODE_ID + ".title",
    (_tmp, vars) => {
      let leftYears = parseFloat(vars.NO_OF_IAC1YEARS_LEFT) - 1;
      // let numberOfSingleCompany = parseFloat(vars.numberOfSingleCompany) - 1;

      if (leftYears > 0) {
        return [
          {
            title: translate(NODE_ID + ".opt1"),
            payload: NODE_ID + ".choice0",
            onChoose: async (_answer, convo, _bot, _msg) => {
              const calcPercentage = safeParseFloat(vars.NODE_127_1) / 100;
              clearYearsValue(convo, leftYears);
              const diff = getYearsDiff(
                convo.vars.LAST_IAC1_DAY,
                convo.vars.NO_OF_IAC1YEARS_LEFT
              );
              let IAC1 = "";
              zakatIAC1.forEach((key, value) => {
                IAC1 = `${value} : ${numberWithCommas(
                  (safeParseFloat(key) * calcPercentage) / 38.8
                )}`;
              });

              allZakatIAC1.set(diff, IAC1);
              convo.setVar("allZakatIAC1", allZakatIAC1);
              convo.gotoThread("t_NODE_116");
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
              convo.gotoThread("t_NODE_109");
            },
          },
          {
            title: translate(NODE_ID + ".opt4"),
            payload: NODE_ID + ".choice3",
            onChoose: async (_answer, convo, bot, _msg) => {
              const calcPercentage = safeParseFloat(vars.NODE_127_1) / 100;

              clearYearsValue(convo, leftYears);
              const diff = getYearsDiff(
                convo.vars.LAST_IAC1_DAY,
                convo.vars.NO_OF_IAC1YEARS_LEFT
              );
              let IAC1 = "";
              zakatIAC1.forEach((key, value) => {
                IAC1 = `${value} : ${numberWithCommas(
                  (safeParseFloat(key) * calcPercentage) / 38.8
                )}`;
              });

              allZakatIAC1.set(diff, IAC1);
              convo.setVar("allZakatIAC1", allZakatIAC1);
              convo.gotoThread("t_NODE_127_2");
            },
          },
        ];
      }
    },
    NODE_ID,
    {},
    (_tmp, vars) => {
      const diff = getYearsDiff(vars.LAST_IAC1_DAY, vars.NO_OF_IAC1YEARS_LEFT);

      const text: string[] = [];
      const currency = convertVarToCurrency(vars.NODE_004);

      const calcPercentage = safeParseFloat(vars.NODE_127_1) / 100;

      // الشركات الفردية
      // const zakatIAC1 = vars.zakatIAC1;
      let answerIs;

      if (zakatIAC1) {
        zakatIAC1.forEach((key, value) => {
          answerIs = `${value} : ${numberWithCommas(
            (safeParseFloat(key) * calcPercentage) / 38.8
          )} ${currency}`;
        }),
          text.push(
            translate(NODE_ID + ".IAC1", {
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
