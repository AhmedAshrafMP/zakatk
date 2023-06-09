import { translate } from "../i18n";

function clearValues(convo, leftYears) {
  // TODO: reset resettable variables
  convo.setVar("doneMoneyOptions", []);
  convo.setVar("NODE_031", "");
  convo.setVar("totalDebit", 0);
  convo.setVar("totalCredit", 0);
  convo.setVar("totalGold", 0);
  convo.setVar("totalSilver", 0);
  convo.setVar("NODE_038", "");
  convo.setVar("NO_OF_YEARS_LEFT", leftYears);
}

export function contiuneOrRepeatDialogue(vars, contiuneTx, continueNode) {
  const NODE_ID = "NODE_041";
  let leftYears = parseFloat(vars.NO_OF_YEARS_LEFT) - 1;
  if (leftYears > 0) {
    return [
      {
        title: translate(NODE_ID + ".opt1"),
        payload: NODE_ID + ".choice0",
        onChoose: async (_answer, convo, _bot, _msg) => {
          clearValues(convo, leftYears);
          convo.gotoThread("t_NODE_023");
        },
      },

      {
        title: translate(NODE_ID + ".opt3"),
        payload: NODE_ID + ".choice2",
        onChoose: async (_answer, convo, _bot, _msg) => {
          clearValues(convo, leftYears);
          convo.stop();
        },
      },
    ];
  } else {
    return [
      {
        title: translate(contiuneTx),
        payload: contiuneTx + ".choice0",
        onChoose: async (_answer, convo, bot, _msg) => {
          convo.stop();
        },
      },
    ];
  }
}
