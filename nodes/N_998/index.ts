import { translate } from "i18n-js";
import { BotkitConversation } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";
import { convertVarToCurrency } from "../../helpers";
import { safeParseFloat } from "../../helpers/variables";

const NODE_ID = "NODE_998";
export function NODE_998(convo: BotkitConversation): string {
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
      const calcPercentage = safeParseFloat(vars.calcPercentage);
      const zakatRent = safeParseFloat(vars.zakatRent);
      console.log(zakatRent, " hello from zakat rent 998");
      return translate(NODE_ID + ".title", {
        zakatRent: (zakatRent * calcPercentage) / 38.8,
        currency: convertVarToCurrency(vars.NODE_004),
        fromYear: vars.NO_OF_YEARS_ZAKATRENT_LEFT,
        fromDay: vars.LAST_RENT_DAY,
      });
    }
  );

  return `t_${NODE_ID}`;
}
