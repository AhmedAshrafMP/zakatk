import { BotkitConversation } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";
import { safeParseFloat } from "../../helpers/variables";

const NODE_ID = "NODE_298";
export function NODE_298(convo: BotkitConversation): string {
  bkQRAsk(
    convo,
    NODE_ID + ".title",
    [
      {
        title: NODE_ID + ".opt1",
        payload: NODE_ID + ".choice0",
        onChoose: async (answer, convo, bot, msg) => {
          convo.gotoThread("t_NODE_209");
        },
      },
      {
        title: NODE_ID + ".opt2",
        payload: NODE_ID + ".choice1",
        onChoose: async (answer, convo, bot, msg) => {
          const NODE_293 = safeParseFloat(convo.vars.NODE_293);
          const NODE_293_1 = safeParseFloat(convo.vars.NODE_293_1);
          const NODE_294 = safeParseFloat(convo.vars.NODE_294);
          const NODE_295 = safeParseFloat(convo.vars.NODE_295);
          const NODE_296 = safeParseFloat(answer);
          const calcContracting = NODE_293 - NODE_293_1;
          const zakatContracting =
            calcContracting + NODE_294 + NODE_296 - NODE_295;
          if (zakatContracting >= convo.vars.gold_prices_sThreshold) {
            convo.setVar("zakatContracting", zakatContracting);
            convo.gotoThread("t_NODE_302");
          } else {
            convo.gotoThread("t_NODE_209");
          }
        },
      },
    ],
    NODE_ID
  );

  return `t_${NODE_ID}`;
}
