import { zakatIAC } from "./../N_144/index";
import { BotkitConversation } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";
import { convertVarToCurrency, translate } from "../../helpers";
import { getYearsDiff } from "../../helpers/dates/yearsdiff";
import { numberWithCommas, safeParseFloat } from "../../helpers/variables";

let allZakatIAC = new Map();
const NODE_ID = "NODE_149";
function setZakatPerYear(vars, leftYears) {
  const diff = getYearsDiff(vars.LAST_IAC_DAY, leftYears + 1);
  const myYears = vars.myYears || {};

  const singleCompany = safeParseFloat(vars.singleCompany);

  if (singleCompany >= vars.gold_prices.gThreshold) {
    // set the value here in obj for the finalSingleZakatCompany
    myYears[diff.toMoment.toISOString()] = singleCompany;
  }
}

function clearYearsValue(convo, leftYears) {
  convo.setVar("NO_OF_IACYEARS_LEFT", leftYears);
  // convo.setVar("numberOfSingleCompany", numberOfSingleCompany);
  convo.setVar("myYears", setZakatPerYear(convo.vars, leftYears));
}

export function NODE_149(convo: BotkitConversation): string {
  bkQRAsk(
    convo,
    NODE_ID + ".title",
    (_tmp, vars) => {
      let leftYears = parseFloat(vars.NO_OF_IACYEARS_LEFT) - 1;
      // let numberOfSingleCompany = parseFloat(vars.numberOfSingleCompany) - 1;

      if (leftYears > 0) {
        return [
          {
            title: translate(NODE_ID + ".opt1"),
            payload: NODE_ID + ".choice0",
            onChoose: async (_answer, convo, _bot, _msg) => {
              clearYearsValue(convo, leftYears);
              const calcPercentage = safeParseFloat(vars.NODE_149_1) / 100;

              const diff = getYearsDiff(
                convo.vars.LAST_IAC_DAY,
                convo.vars.NO_OF_IACYEARS_LEFT
              );
              let theAllZakatIAC = "";
              zakatIAC.forEach((key, value) => {
                theAllZakatIAC = `${value} : ${numberWithCommas(
                  (safeParseFloat(key) * calcPercentage) / 40
                )}`;
              });
              allZakatIAC.set(diff, theAllZakatIAC);
              convo.setVar("allZakatIAC", allZakatIAC);
              convo.gotoThread("t_NODE_138");
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
              convo.gotoThread("t_NODE_131");
            },
          },
          {
            title: translate(NODE_ID + ".opt4"),
            payload: NODE_ID + ".choice3",
            onChoose: async (_answer, convo, bot, _msg) => {
              clearYearsValue(convo, leftYears);
              const calcPercentage = safeParseFloat(vars.NODE_149_1) / 100;

              const diff = getYearsDiff(
                convo.vars.LAST_IAC_DAY,
                convo.vars.NO_OF_IACYEARS_LEFT
              );
              let theAllZakatIAC = "";
              zakatIAC.forEach((key, value) => {
                theAllZakatIAC = `${value} : ${numberWithCommas(
                  (safeParseFloat(key) * calcPercentage) / 40
                )}`;
              });
              allZakatIAC.set(diff, theAllZakatIAC);
              convo.setVar("allZakatIAC", allZakatIAC);
              convo.gotoThread("t_NODE_149_2");
            },
          },
        ];
      }
    },
    NODE_ID,
    {},
    (_tmp, vars) => {
      const diff = getYearsDiff(vars.LAST_IAC_DAY, vars.NO_OF_IACYEARS_LEFT);
      console.log(vars.NO_OF_IACYEARS_LEFT, "diff.from , diff.to");
      const text: string[] = [];
      const calcPercentage = safeParseFloat(vars.NODE_149_1) / 100;
      const currency = convertVarToCurrency(vars.NODE_004);
      // الشركات الفردية
      // const allZakatIAC = vars.allZakatIAC;
      let answerIs;
      if (zakatIAC) {
        zakatIAC.forEach((key, value) => {
          answerIs = `${value} : ${numberWithCommas(
            (safeParseFloat(key) * calcPercentage) / 40
          )} ${currency}`;
        }),
          text.push(
            translate(NODE_ID + ".IAC", {
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
