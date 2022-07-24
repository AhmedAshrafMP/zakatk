import { BotkitConversation } from "botkit";
import bkStrAsk from "../../bot_nodes/ask_str";
import { safeParseFloat } from "../../helpers/variables";

const NODE_ID = "NODE_098_2";
export function NODE_098_2(convo: BotkitConversation): string {
  bkStrAsk(
    convo,
    NODE_ID + ".hello",
    async (answer, convo, bot, message) => {
      const singleCompany = safeParseFloat(convo.vars.NODE_098_2);

      if (singleCompany >= convo.vars.gold_prices.gThreshold) {
        convo.setVar(singleCompany, "singleCompany");
        console.log(singleCompany, "singleCompany");
        convo.gotoThread("t_NODE_104");
      } else {
        convo.gotoThread("t_NODE_101");
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
