import { BotkitConversation } from "botkit";
import bkStrAsk from "../../bot_nodes/ask_str";
import bkSay from "../../bot_nodes/say";

import { convertVarToCurrency, translate } from "../../helpers";
import { safeParseFloat } from "../../helpers/variables";

const NODE_ID = "NODE_399";
export function NODE_399(convo: BotkitConversation): string {
  bkStrAsk(
    convo,
    NODE_ID + ".hello",
    async (answer, convo, bot, message) => {
      const nodeIntValue = safeParseFloat(answer);

      const calcCows = nodeIntValue / 38.8;

      const stringCalcCows = JSON.stringify(calcCows);

      const splitCows = stringCalcCows.split(".");

      const calcCowsAdd = splitCows[1];

      if (nodeIntValue && nodeIntValue >= 30) {
        if (nodeIntValue && nodeIntValue <= 39) {
          convo.gotoThread("t_NODE_452");
        } else if (nodeIntValue && nodeIntValue <= 59) {
          convo.gotoThread("t_NODE_453");
        } else if (nodeIntValue && nodeIntValue <= 69) {
          convo.gotoThread("t_NODE_454");
        } else if (nodeIntValue && nodeIntValue <= 79) {
          convo.gotoThread("t_NODE_455");
        } else if (nodeIntValue && nodeIntValue <= 89) {
          convo.gotoThread("t_NODE_456");
        } else if (nodeIntValue && nodeIntValue <= 99) {
          convo.gotoThread("t_NODE_457");
        } else if (nodeIntValue && nodeIntValue >= 100) {
          convo.setVar("calcCows", calcCows);
          convo.setVar("calcCowsAdd", calcCowsAdd);
          convo.gotoThread("t_NODE_458");
        } else {
          convo.repeat();
        }
      } else {
        convo.gotoThread("t_NODE_435");
      }
    },
    NODE_ID,
    {
      contentType: "application/vnd.microsoft.input",
      content: {
        validation: "",
        type: "money",
      },
    }
  );

  return `t_${NODE_ID}`;
}
