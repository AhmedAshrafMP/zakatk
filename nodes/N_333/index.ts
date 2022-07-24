import { BotkitConversation } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";
import { safeParseFloat } from "../../helpers/variables";

const NODE_ID = "NODE_333";
export function NODE_333(convo: BotkitConversation): string {
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
          const NODE_331 = safeParseFloat(answer);
          const NODE_331_1 = safeParseFloat(convo.vars.NODE_331_1);

          const sasZakat = NODE_331_1 - NODE_331;
          if (sasZakat >= convo.vars.gold_prices_sThreshold) {
            convo.gotoThread("t_NODE_336");
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
