import { BotkitConversation } from "botkit";
import bkStrAsk from "../../bot_nodes/ask_str";
import { safeParseFloat } from "../../helpers/variables";

const NODE_ID = "NODE_181";
export function NODE_181(convo: BotkitConversation): string {
  bkStrAsk(
    convo,
    NODE_ID + ".hello",
    async (answer, convo, bot, message) => {
      const NODE_181 = safeParseFloat(convo.vars.NODE_181);

      if (NODE_181 >= convo.vars.gold_prices.gThreshold) {
        convo.setVar("NODE_181", NODE_181);
        convo.gotoThread("t_NODE_182");
      } else {
        convo.gotoThread("t_NODE_145");
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
