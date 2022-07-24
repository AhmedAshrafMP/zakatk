import { BotkitConversation } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";
import { safeParseFloat } from "../../helpers/variables";

const NODE_ID = "NODE_173";
export function NODE_173(convo: BotkitConversation): string {
  bkQRAsk(
    convo,
    NODE_ID + ".title",
    [
      {
        title: NODE_ID + ".opt1",
        payload: NODE_ID + ".choice0",

        onChoose: async (answer, convo, bot, msg) => {
          const NODE_169 = safeParseFloat(convo.vars.NODE_169);
          const nodeIntValue = safeParseFloat(convo.vars.NODE_171);
          const buildingsZakat = NODE_169 - nodeIntValue;

          if (NODE_169 - nodeIntValue >= convo.vars.gold_prices.gThreshold) {
            convo.setVar("buildingsZakat", buildingsZakat);
            convo.gotoThread("t_NODE_176");
          } else {
            //ليس عليك زكاة
            convo.gotoThread("t_NODE_145");
          }
        },
      },
      {
        title: NODE_ID + ".opt2",
        payload: NODE_ID + ".choice1",
        onChoose: async (answer, convo, bot, msg) => {
          const NODE_169 = safeParseFloat(convo.vars.NODE_169);
          const nodeIntValue = safeParseFloat(convo.vars.NODE_171);
          const buildingsZakat = NODE_169 - nodeIntValue;
          if (NODE_169 - nodeIntValue >= convo.vars.gold_prices.sThreshold) {
            convo.setVar("buildingsZakat", buildingsZakat);
            convo.gotoThread("t_NODE_176");
          } else {
            //ليس عليك زكاة
            convo.gotoThread("t_NODE_145");
          }
        },
      },
    ],
    NODE_ID
  );

  return `t_${NODE_ID}`;
}
