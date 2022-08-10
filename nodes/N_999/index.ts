import { translate } from "i18n-js";
import { BotkitConversation } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";
import { convertVarToCurrency } from "../../helpers";

const NODE_ID = "NODE_999";
export function NODE_999(convo: BotkitConversation): string {
  bkQRAsk(
    convo,
    NODE_ID + ".title",
    [
      {
        title: NODE_ID + ".opt1",
        payload: NODE_ID + ".choice0",
        onChoose: async (answer, convo, bot, msg) => {},
      },
    ],
    NODE_ID,

    {},
    (_tmp, vars) => {
      const calcPercentage = vars.calcPercentage;

      return translate(NODE_ID + ".title", {
        rentZakat: (vars.rentZakat * calcPercentage) / 40,
        currency: convertVarToCurrency(vars.NODE_004),
        fromYear: vars.NO_OF_RENTYEARS_LEFT,
        fromDay: vars.LAST_RENT_DAY,
      });
    }
  );

  return `t_${NODE_ID}`;
}
