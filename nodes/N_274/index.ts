import { BotkitConversation } from "botkit";
import bkStrAsk from "../../bot_nodes/ask_str";
import { safeParseFloat } from "../../helpers/variables";

const NODE_ID = "NODE_274";
export function NODE_274(convo: BotkitConversation): string {
  bkStrAsk(
    convo,
    NODE_ID + ".hello",
    async (answer, convo, bot, message) => {
      const NODE_274 = safeParseFloat(answer);
      const NODE_273 = safeParseFloat(convo.vars.NODE_273);

      const zakatSupply = NODE_274 - NODE_273;

      if (zakatSupply >= safeParseFloat(convo.vars.gold_prices_gThreshold)) {
        convo.setVar("zakatSupply", zakatSupply);
        convo.gotoThread("t_NDOE_280");
      } else {
        convo.gotoThread("t_NODE_277");
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
