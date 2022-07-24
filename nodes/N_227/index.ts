import { BotkitConversation } from "botkit";
import bkStrAsk from "../../bot_nodes/ask_str";
import { safeParseFloat } from "../../helpers/variables";

const NODE_ID = "NODE_227";
export function NODE_227(convo: BotkitConversation): string {
  bkStrAsk(
    convo,
    NODE_ID + ".hello",
    async (answer, convo, bot, message) => {
      const NODE_225 = safeParseFloat(convo.vars.NODE_225);
      const NODE_225_1 = safeParseFloat(convo.vars.NODE_225_1);
      const nodeIntValue = safeParseFloat(convo.vars.NODE_227);

      const rentZakat = NODE_225 - NODE_225_1 * nodeIntValue;

      if (nodeIntValue && nodeIntValue > 0) {
        if (rentZakat && rentZakat >= convo.vars.gold_prices.gThreshold) {
          convo.setVar("rentZakat", rentZakat);
          convo.gotoThread("t_NODE_999");
        } else {
          convo.gotoThread("t_NODE_209");
        }
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
