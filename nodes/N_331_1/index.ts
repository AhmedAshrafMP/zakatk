import { BotkitConversation } from "botkit";
import bkStrAsk from "../../bot_nodes/ask_str";
import { safeParseFloat } from "../../helpers/variables";

const NODE_ID = "NODE_331_1";
export function NODE_331_1(convo: BotkitConversation): string {
  bkStrAsk(
    convo,
    NODE_ID + ".hello",
    async (answer, convo, bot, message) => {
      const NODE_331 = safeParseFloat(convo.vars.NODE_331);
      const NODE_331_1 = safeParseFloat(answer);

      const zakatSas = NODE_331 - NODE_331_1;

      if (zakatSas >= safeParseFloat(convo.vars.gold_prices.gThreshold)) {
        convo.setVar("zakatSas", zakatSas);
        convo.gotoThread("t_NODE_336");
      } else if (
        zakatSas < safeParseFloat(convo.vars.gold_prices.gThreshold) ||
        safeParseFloat(convo.vars.gold_prices.sThreshold)
      ) {
        convo.gotoThread("t_NODE_333");
      } else {
        convo.gotoThread("t_NODE_209");
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
