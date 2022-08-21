import { BotkitConversation } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";
import { safeParseFloat } from "../../helpers/variables";

const NODE_ID = "NODE_170";
export function NODE_170(convo: BotkitConversation): string {
  bkQRAsk(
    convo,
    NODE_ID + ".title",
    [
      {
        title: NODE_ID + ".opt1",
        payload: NODE_ID + ".choice0",
        onChoose: async (answer, convo, bot, msg) => {
          convo.gotoThread("t_NODE_171");
        },
      },
      {
        title: NODE_ID + ".opt2",
        payload: NODE_ID + ".choice1",
        onChoose: async (answer, convo, bot, msg) => {
          const NODE_169 = safeParseFloat(convo.vars.NODE_169);
          const buildingsZakat = NODE_169;
          if (
            buildingsZakat &&
            buildingsZakat >= convo.vars.gold_prices.gThreshold
          ) {
            convo.setVar("buildingsZakat", buildingsZakat);
            convo.gotoThread("t_NODE_176");
          } else {
            convo.gotoThread("t_NODE_173");
          }
        },
      },
    ],
    NODE_ID
  );

  return `t_${NODE_ID}`;
}
