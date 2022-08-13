import { translate } from "i18n-js";
import { BotkitConversation } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";
import { convertVarToCurrency } from "../../helpers";

const NODE_ID = "NODE_458";
export function NODE_458(convo: BotkitConversation): string {
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
      const calcCows = Math.floor(vars.calcCows);
      const calcCowsAdd = vars.calcCowsAdd;
      return translate(NODE_ID + ".title", {
        cows: calcCows,
        cowsadd: calcCowsAdd == 75 ? "و تبيع" : "",
        fromYear: vars.NO_OF_RENTYEARS_LEFT,
        fromDay: vars.LAST_RENT_DAY,
      });
    }
  );

  return `t_${NODE_ID}`;
}
