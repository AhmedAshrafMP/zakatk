import { BotkitConversation } from "botkit";
import bkStrAsk from "../../bot_nodes/ask_str";
import { safeParseFloat } from "../../helpers/variables";

const NODE_ID = "NODE_193";
export function NODE_193(convo: BotkitConversation): string {
  bkStrAsk(
    convo,
    NODE_ID + ".hello",

    async (answer, convo, bot, message) => {
      const NODE_192 = safeParseFloat(convo.vars.NODE_192);
      const NODE_193 = safeParseFloat(convo.vars.NODE_193);

      const calcRentZakat = NODE_192 - NODE_193;
      if (calcRentZakat >= safeParseFloat(convo.vars.gold_prices.gThreshold)) {
        convo.setVar("calcRentZakat", calcRentZakat);
        convo.gotoThread("t_NODE_199");
      } else {
        convo.gotoThread("t_NODE_196");
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
