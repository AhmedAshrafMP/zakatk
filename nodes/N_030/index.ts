import { BotkitConversation } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";
import { convertVarToCurrency, translate } from "../../helpers";
import { numberWithCommas } from "../../helpers/variables";
import { markOptionAsDone } from "../N_023";

const NODE_ID = "NODE_030";
export function NODE_030(convo: BotkitConversation): string {
  bkQRAsk(
    convo,
    NODE_ID + ".title",
    [
      {
        title: NODE_ID + ".opt1",
        payload: NODE_ID + ".choice0",
        onChoose: async (answer, convo, bot, msg) => {
          if (convo.vars.NODE_031) {
            markOptionAsDone(convo);
            convo.gotoThread("t_NODE_040_1");
          } else {
            convo.gotoThread("t_NODE_031");
          }
        },
      },
    ],
    NODE_ID,
    {},
    (tm, vars) =>
      translate(NODE_ID + ".title", {
        totalCurrency: numberWithCommas(vars.NODE_029 || 0),
        totalSavings: numberWithCommas(vars.NODE_065 || vars.NODE_066 || 0),
        totalStocks: numberWithCommas(vars.NODE_070 || vars.NODE_071 || 0),
        currency: convertVarToCurrency(vars.NODE_004),
      })
  );

  return `t_${NODE_ID}`;
}
