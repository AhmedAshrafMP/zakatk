import { buildingsZakat } from "./../N_171/index";
import { BotkitConversation } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";
import { convertVarToCurrency, translate } from "../../helpers";
import { getYearsDiff } from "../../helpers/dates/yearsdiff";
import { numberWithCommas, safeParseFloat } from "../../helpers/variables";

let allBuildingsZakat = new Map();
const NODE_ID = "NODE_176";
function setZakatPerYear(vars, leftYears) {
  const diff = getYearsDiff(vars.LAST_BUILDINGS_DAY, leftYears + 1);
  const myYears = vars.myYears || {};

  const singleCompany = safeParseFloat(vars.singleCompany);

  if (singleCompany >= vars.gold_prices.gThreshold) {
    myYears[diff.toMoment.toISOString()] = singleCompany;
  }
}

function clearYearsValue(convo, leftYears) {
  convo.setVar("NO_OF_BUILDINGSYEARS_LEFT", leftYears);
  convo.setVar("myYears", setZakatPerYear(convo.vars, leftYears));
}

export function NODE_176(convo: BotkitConversation): string {
  bkQRAsk(
    convo,
    NODE_ID + ".title",
    (_tmp, vars) => {
      let leftYears = parseFloat(vars.NO_OF_BUILDINGSYEARS_LEFT) - 1;

      if (leftYears > 0) {
        return [
          {
            title: translate(NODE_ID + ".opt1"),
            payload: NODE_ID + ".choice0",
            onChoose: async (_answer, convo, _bot, _msg) => {
              clearYearsValue(convo, leftYears);
              const diff = getYearsDiff(
                convo.vars.LAST_BUILDINGS_DAY,
                convo.vars.NO_OF_BUILDINGSYEARS_LEFT
              );
              let buildings = "";
              buildingsZakat.forEach((key, value) => {
                buildings = `${value} : ${numberWithCommas(
                  safeParseFloat(key)
                )}`;
              });

              allBuildingsZakat.set(diff, buildings);
              convo.setVar("allBuildingsZakat", allBuildingsZakat);
              convo.gotoThread("t_NODE_169");
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
              convo.gotoThread("t_NODE_157_1");
            },
          },
          {
            title: translate(NODE_ID + ".opt4"),
            payload: NODE_ID + ".choice3",
            onChoose: async (_answer, convo, bot, _msg) => {
              clearYearsValue(convo, leftYears);
              const diff = getYearsDiff(
                convo.vars.LAST_BUILDINGS_DAY,
                convo.vars.NO_OF_BUILDINGSYEARS_LEFT
              );
              let buildings = "";
              buildingsZakat.forEach((key, value) => {
                buildings = `${value} : ${numberWithCommas(
                  safeParseFloat(key)
                )}`;
              });

              allBuildingsZakat.set(diff, buildings);
              convo.setVar("allBuildingsZakat", allBuildingsZakat);
              convo.gotoThread("t_NODE_165");
            },
          },
        ];
      }
    },
    NODE_ID,
    {},
    (_tmp, vars) => {
      const diff = getYearsDiff(
        vars.LAST_BUILDINGS_DAY,
        vars.NO_OF_BUILDINGSYEARS_LEFT
      );
      const text: string[] = [];
      const currency = convertVarToCurrency(vars.NODE_004);

      // الشركات الفردية
      // const buildingsZakat = vars.buildingsZakat;
      let answerIs;

      if (buildingsZakat) {
        buildingsZakat.forEach((key, value) => {
          answerIs = `${value} : ${numberWithCommas(
            safeParseFloat(key)
          )} ${currency}`;
        }),
          text.push(
            translate(NODE_ID + ".buildings", {
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
