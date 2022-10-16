import { BotkitConversation } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";
import { translate } from "../../helpers";
import { getYearsDiff } from "../../helpers/dates/yearsdiff";
import { safeParseFloat } from "../../helpers/variables";

const NODE_ID = "NODE_103";
function setZakatPerYear(vars, leftYears) {
  const diff = getYearsDiff(vars.LAST_SINGLECOMPANY_DAY, leftYears + 1);
  const myYears = vars.myYears || {};

  const singleCompany = safeParseFloat(vars.singleCompany);

  if (singleCompany >= vars.gold_prices.gThreshold) {
    // set the value here in obj for the finalSingleZakatCompany
    myYears[diff.toMoment.toISOString()] = singleCompany;
  }
}

function clearYearsValue(convo, leftYears, numberOfSingleCompany) {
  convo.setVar("NO_OF_SINGLECOMPANYYEARS_LEFT", leftYears);
  convo.setVar("myYears", setZakatPerYear(convo.vars, leftYears));
  convo.setVar(
    "numberOfSingleCompany",
    setZakatPerYear(convo.vars, numberOfSingleCompany)
  );
}

export function NODE_103(convo: BotkitConversation): string {
  bkQRAsk(
    convo,
    NODE_ID + ".title",
    (_tmp, vars) => {
      let leftYears = parseFloat(vars.NO_OF_SINGLECOMPANYYEARS_LEFT) - 1;
      let numberOfSingleCompany = parseFloat(vars.numberOfSingleCompany) - 1;

      if (numberOfSingleCompany > 0) {
        return [
          {
            title: translate(NODE_ID + ".opt1"),
            payload: NODE_ID + ".choice0",
            onChoose: async (_answer, convo, _bot, _msg) => {
              clearYearsValue(convo, leftYears, numberOfSingleCompany);
              convo.gotoThread("t_NODE_095");
            },
          },
          {
            title: translate(NODE_ID + ".opt3"),
            payload: NODE_ID + ".choice2",
            onChoose: async (_answer, convo, _bot, _msg) => {
              convo.stop();
            },
          },
        ];
      }

      if (leftYears > 0) {
        return [
          {
            title: translate(NODE_ID + ".opt2"),
            payload: NODE_ID + ".choice1",
            onChoose: async (_answer, convo, _bot, _msg) => {
              clearYearsValue(convo, leftYears, numberOfSingleCompany);
              convo.gotoThread("t_NODE_098");
            },
          },
          {
            title: translate(NODE_ID + ".opt4"),
            payload: NODE_ID + ".choice3",
            onChoose: async (_answer, convo, _bot, _msg) => {
              convo.stop();
            },
          },
        ];
      } else {
        return [
          {
            title: translate(NODE_ID + ".opt3"),
            payload: NODE_ID + ".choice4",
            onChoose: async (_answer, convo, bot, _msg) => {
              convo.stop();
            },
          },
        ];
      }
    },
    NODE_ID
  );

  return `t_${NODE_ID}`;
}
