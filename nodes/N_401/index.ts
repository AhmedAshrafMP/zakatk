import { BotkitConversation } from "botkit";
import bkStrAsk from "../../bot_nodes/ask_str";
import bkSay from "../../bot_nodes/say";
import { convertVarToCurrency, translate } from "../../helpers";
import { safeParseFloat } from "../../helpers/variables";

const NODE_ID = "NODE_401";
export function NODE_401(convo: BotkitConversation): string {
  bkStrAsk(
    convo,
    NODE_ID + ".hello",
    async (answer, convo, bot, message) => {
      const nodeIntValue = safeParseFloat(answer);
      if (nodeIntValue && nodeIntValue >= 5) {
        if (nodeIntValue && nodeIntValue <= 9) {
          convo.gotoThread("t_NODE_440");
        } else if (nodeIntValue && nodeIntValue <= 14) {
          convo.gotoThread("t_NODE_441");
        } else if (nodeIntValue && nodeIntValue <= 19) {
          convo.gotoThread("t_NODE_442");
        } else if (nodeIntValue && nodeIntValue <= 24) {
          convo.gotoThread("t_NODE_443");
        } else if (nodeIntValue && nodeIntValue <= 35) {
          convo.gotoThread("t_NODE_444");
        } else if (nodeIntValue && nodeIntValue <= 45) {
          convo.gotoThread("t_NODE_445");
        } else if (nodeIntValue && nodeIntValue <= 60) {
          convo.gotoThread("t_NODE_446");
        } else if (nodeIntValue && nodeIntValue <= 75) {
          convo.gotoThread("t_NODE_447");
        } else if (nodeIntValue && nodeIntValue <= 90) {
          convo.gotoThread("t_NODE_448");
        } else if (nodeIntValue && nodeIntValue <= 124) {
          convo.gotoThread("t_NODE_449");
        } else if (nodeIntValue && nodeIntValue <= 149) {
          convo.gotoThread("t_NODE_450");
        } else if (nodeIntValue && nodeIntValue >= 150) {
          convo.gotoThread("t_NODE_451");
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
