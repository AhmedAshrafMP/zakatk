import { BotkitConversation } from "botkit";
import bkStrAsk from "../../bot_nodes/ask_str";
import { safeParseFloat } from "../../helpers/variables";

const NODE_ID = "NODE_261";
export function NODE_261(convo: BotkitConversation): string {
  bkStrAsk(
    convo,
    NODE_ID + ".hello",
    async (answer, convo, bot, message) => {
      const NODE_257 = safeParseFloat(convo.vars.NODE_257);
      const NODE_258 = safeParseFloat(convo.vars.NODE_258);
      const NODE_261 = safeParseFloat(answer);
      const zakatPercentage = NODE_261 / 100;
      const zakatOnSale = (NODE_257 + NODE_258) * zakatPercentage;
      if (NODE_261 && NODE_261 <= 100) {
        convo.setVar("zakatOnSale", zakatOnSale);
        convo.gotoThread("t_NODE_262");
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
