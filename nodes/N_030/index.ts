import { BotkitConversation } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";
import { convertVarToCurrency, translate } from "../../helpers";

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
          convo.gotoThread("t_NODE_031");
        },
      },
    ],
    NODE_ID,
    {},
    (tm, vars) =>
      translate(NODE_ID + ".title", {
        totalCurrency: vars.NODE_029,
        totalPapers: 0,
        currency: convertVarToCurrency(vars.NODE_004),
      })
  );

  return `t_${NODE_ID}`;
}
