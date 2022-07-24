import { BotkitConversation } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";
import { safeParseFloat } from "../../helpers/variables";

const NODE_ID = "NODE_101";
export function NODE_101(convo: BotkitConversation): string {
  bkQRAsk(
    convo,
    NODE_ID + ".title",
    [
      {
        title: NODE_ID + ".opt1",
        payload: NODE_ID + ".choice0",
        onChoose: async (answer, convo, bot, msg) => {
          convo.gotoThread("t_NODE_103");
        },
      },
      {
        title: NODE_ID + ".opt2",
        payload: NODE_ID + ".choice1",
        onChoose: async (answer, convo, bot, msg) => {
          const NODE_098_2 = safeParseFloat(convo.vars.NODE_098_2);

          if (NODE_098_2 >= safeParseFloat(convo.vars.gold_prices.sThreshold)) {
            convo.setVar("singleCompany", NODE_098_2);
            console.log(NODE_098_2, "hello from NODE_098");
            convo.gotoThread("t_NODE_104");
          } else {
            convo.gotoThread("t_NODE_103");
          }
        },
      },
    ],
    NODE_ID
  );

  return `t_${NODE_ID}`;
}
