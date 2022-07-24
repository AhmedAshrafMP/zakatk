import { BotkitConversation } from "botkit";
import bkStrAsk from "../../bot_nodes/ask_str";
import { safeParseFloat } from "../../helpers/variables";

const NODE_ID = "NODE_316";
export function NODE_316(convo: BotkitConversation): string {
  bkStrAsk(
    convo,
    NODE_ID + ".hello",
    async (answer, convo, bot, message) => {
      const NODE_314 = safeParseFloat(convo.vars.NODE_314);
      const NODE_315 = safeParseFloat(convo.vars.NODE_315);
      const NODE_316 = safeParseFloat(answer);

      const zakatStructure = NODE_314 + NODE_316 - NODE_315;

      if (zakatStructure >= safeParseFloat(convo.vars.gold_prices.gThreshold)) {
        convo.setVar("zakatStructure", zakatStructure);
        convo.gotoThread("t_NODE_322");
      } else if (
        zakatStructure >= safeParseFloat(convo.vars.gold_prices.sThreshold)
      ) {
        convo.setVar("zakatStructure", zakatStructure);
        convo.gotoThread("t_NODE_322");
      } else {
      }
      convo.gotoThread("t_NODE_209");
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
