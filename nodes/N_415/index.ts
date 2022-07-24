import { BotkitConversation } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";
import { safeParseFloat } from "../../helpers/variables";

const NODE_ID = "NODE_415";
export function NODE_415(convo: BotkitConversation): string {
  bkQRAsk(
    convo,
    NODE_ID + ".title",
    [
      {
        title: NODE_ID + ".opt1",
        payload: NODE_ID + ".choice0",
        onChoose: async (answer, convo, bot, msg) => {
          const NODE_411 = safeParseFloat(convo.vars.NODE_411);
          const NODE_412 = safeParseFloat(convo.vars.NODE_412);
          if (NODE_411 - NODE_412 > convo.vars.gold_prices.gThreshold) {
            convo.gotoThread("t_NODE_418");
          } else {
            convo.gotoThread("t_NODE_435");
          }
        },
      },
      {
        title: NODE_ID + ".opt2",
        payload: NODE_ID + ".choice1",
        onChoose: async (answer, convo, bot, msg) => {
          const NODE_411 = safeParseFloat(convo.vars.NODE_411);
          const NODE_412 = safeParseFloat(convo.vars.NODE_412);
          if (NODE_411 - NODE_412 > convo.vars.gold_prices.sThreshold) {
            convo.gotoThread("t_NODE_418");
          } else {
            convo.gotoThread("t_NODE_435");
          }
        },
      },
    ],
    NODE_ID
  );

  return `t_${NODE_ID}`;
}
