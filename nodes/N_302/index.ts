import { BotkitConversation } from "botkit";
import bkStrAsk from "../../bot_nodes/ask_str";
import { safeParseFloat } from "../../helpers/variables";

const NODE_ID = "NODE_302";
export function NODE_302(convo: BotkitConversation): string {
  bkStrAsk(
    convo,
    NODE_ID + ".hello",
    async (answer, convo, bot, message) => {
      const nodeIntValue = safeParseFloat(answer);
      const calcPercentage = nodeIntValue / 100;
      if (nodeIntValue <= 100) {
        convo.setVar("calcPercentage", calcPercentage);
        convo.gotoThread("t_NODE_301");
      } else {
        convo.repeat();
      }
    },
    NODE_ID,
    {
      contentType: "application/vnd.microsoft.input",
      content: {
        validation: "*",
        type: "money",
      },
    }
  );
  return `t_${NODE_ID}`;
}
