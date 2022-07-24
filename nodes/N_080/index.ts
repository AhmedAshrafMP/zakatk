import { BotkitConversation } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";
import { safeParseFloat } from "../../helpers/variables";

const NODE_ID = "NODE_080";
export function NODE_080(convo: BotkitConversation): string {
  bkQRAsk(
    convo,
    NODE_ID + ".title",
    [
      {
        title: NODE_ID + ".opt1",
        payload: NODE_ID + ".choice0",
        onChoose: async (answer, convo, bot, msg) => {
          const NODE_078 = safeParseFloat(convo.vars.NODE_078);
          const NODE_078_1 = safeParseFloat(convo.vars.NODE_078_1);
          const NODE_078_2 = safeParseFloat(convo.vars.NODE_078_2);
          const nodeIntValue = safeParseFloat(convo.vars.NODE_078_3);
          const companySharesDividing = NODE_078 - NODE_078_1;

          const companyShares =
            (companySharesDividing / NODE_078_2) * nodeIntValue;

          if (companyShares >= convo.vars.gold_prices.gThreshold) {
            convo.setVar("companyShares", companyShares);
            convo.gotoThread("t_NODE_083");
          } else {
            convo.gotoThread("t_NODE_082");
          }
        },
      },
      {
        title: NODE_ID + ".opt2",
        payload: NODE_ID + ".choice1",
        onChoose: async (answer, convo, bot, msg) => {
          const companyShares = safeParseFloat(convo.vars.NODE_078);
          if (companyShares >= convo.vars.gold_prices.sThreshold) {
            convo.setVar("companyShares", companyShares);
            convo.gotoThread("t_NODE_083");
          } else {
            convo.gotoThread("t_NODE_082");
          }
        },
      },
    ],
    NODE_ID
  );

  return `t_${NODE_ID}`;
}
