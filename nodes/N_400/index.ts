import { BotkitConversation } from "botkit";
import bkStrAsk from "../../bot_nodes/ask_str";
import bkSay from "../../bot_nodes/say";
import { convertVarToCurrency, translate } from "../../helpers";

const NODE_ID = "NODE_400";
export function NODE_400(convo: BotkitConversation): string {
  bkStrAsk(
    convo,
    NODE_ID + ".hello",
    async (answer, convo, bot, message) => {
      const nodeIntValue = parseFloat(answer);

      if (nodeIntValue && nodeIntValue >= 100) {
        if (nodeIntValue && nodeIntValue <= 120) {
          convo.gotoThread("t_NODE_459");
        } else if (nodeIntValue && nodeIntValue <= 200) {
          convo.gotoThread("t_NODE_460");
        } else if (nodeIntValue && nodeIntValue <= 299) {
          convo.gotoThread("t_NODE_4461");
        } else if (nodeIntValue && nodeIntValue <= 300) {
          convo.gotoThread("t_NODE_462");
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
