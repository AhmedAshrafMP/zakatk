import { BotkitConversation } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";
import { safeParseFloat } from "../../helpers/variables";

const NODE_ID = "NODE_432";
export function NODE_432(convo: BotkitConversation): string {
  bkQRAsk(
    convo,
    NODE_ID + ".title",
    [
      {
        title: NODE_ID + ".opt1",
        payload: NODE_ID + ".choice0",
        onChoose: async (answer, convo, bot, msg) => {
          const NODE_429 = safeParseFloat(convo.vars.NODE_429);
          const NODE_430 = safeParseFloat(convo.vars.NODE_430);
          if (NODE_429 - NODE_430 > convo.vars.gold_prices.gThreshold) {
            convo.gotoThread("t_NODE_434");
          } else {
            convo.gotoThread("t_NODE_435");
          }
        },
      },
      {
        title: NODE_ID + ".opt2",
        payload: NODE_ID + ".choice1",
        onChoose: async (answer, convo, bot, msg) => {
          const NODE_429 = safeParseFloat(convo.vars.NODE_429);
          const NODE_430 = safeParseFloat(convo.vars.NODE_430);
          if (NODE_429 - NODE_430 > convo.vars.gold_prices.sThreshold) {
            convo.gotoThread("t_NODE_434");
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
