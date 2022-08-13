import { translate } from "i18n-js";
import { BotkitConversation } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";
import { convertVarToCurrency } from "../../helpers";

const NODE_ID = "NODE_280";
export function NODE_280(convo: BotkitConversation): string {
  bkQRAsk(
    convo,
    NODE_ID + ".title",
    [
      {
        title: NODE_ID + ".opt1",
        payload: NODE_ID + ".choice0",
        onChoose: async (answer, convo, bot, msg) => {
          convo.gotoThread("t_NODE_271");
        },
      },
    ],
    NODE_ID,

    {},
    (_tmp, vars) => {
      return translate(NODE_ID + ".title", {
        zakatSupply: vars.zakatSupply / 40,
        currency: convertVarToCurrency(vars.NODE_004),
        fromYear: vars.NO_OF_ZAKATSUPPLY_YEARS_LEFT,
        fromDay: vars.LAST_ZAKATSUPPLY_DAY,
      });
    }
  );

  return `t_${NODE_ID}`;
}
