import { BotkitConversation } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";
import { safeParseFloat } from "../../helpers/variables";

const NODE_ID = "NODE_196";
export function NODE_196(convo: BotkitConversation): string {
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
          const NODE_192 = safeParseFloat(convo.vars.NODE_192);
          const NODE_193 = safeParseFloat(convo.vars.NODE_193);
          const calcRentZakat = NODE_192 - NODE_193;
          if (
            calcRentZakat >= safeParseFloat(convo.vars.gold_prices.sThreshold)
          ) {
            convo.setVar("calcRentZakat", calcRentZakat);
            convo.gotoThread("t_NODE_199");
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
