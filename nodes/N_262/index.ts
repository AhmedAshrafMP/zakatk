import { translate } from "i18n-js";
import { BotkitConversation } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";
import { convertVarToCurrency } from "../../helpers";

const NODE_ID = "NODE_262";
export function NODE_262(convo: BotkitConversation): string {
  bkQRAsk(
    convo,
    NODE_ID + ".title",
    [
      {
        title: NODE_ID + ".opt1",
        payload: NODE_ID + ".choice0",
        onChoose: async (answer, convo, bot, msg) => {
          convo.gotoThread("t_NODE_231");
          convo.stop();
        },
      },
    ],
    NODE_ID,

    {},
    (_tmp, vars) => {
      return translate(NODE_ID + ".title", {
        zakatOnSale: vars.zakatOnSale / 40,
        currency: convertVarToCurrency(vars.NODE_004),
        fromYear: vars.NO_OF_RENTYEARS_LEFT,
        fromDay: vars.LAST_RENT_DAY,
      });
    }
  );

  return `t_${NODE_ID}`;
}
