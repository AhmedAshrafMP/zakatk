import { BotkitConversation } from "botkit";
import bkStrAsk from "../../bot_nodes/ask_str";
import { safeParseFloat } from "../../helpers/variables";

const NODE_ID = "NODE_296";
export function NODE_296(convo: BotkitConversation): string {
  bkStrAsk(
    convo,
    NODE_ID + ".hello",
    async (answer, convo, bot, message) => {
      const NODE_293 = safeParseFloat(convo.vars.NODE_293);
      const NODE_293_1 = safeParseFloat(convo.vars.NODE_293_1);
      const NODE_294 = safeParseFloat(convo.vars.NODE_294);
      const NODE_295 = safeParseFloat(convo.vars.NODE_295);
      const nodeIntValue = safeParseFloat(answer);
      const calcContracting = NODE_293 - NODE_293_1;
      const zakatContracting =
        calcContracting + NODE_294 + nodeIntValue - NODE_295;

      if (
        zakatContracting >= safeParseFloat(convo.vars.gold_prices.gThreshold)
      ) {
        convo.setVar("zakatContracting", zakatContracting);
        convo.gotoThread("t_NODE_302");
      } else {
        convo.gotoThread("t_NODE_298");
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
