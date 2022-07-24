import { translate } from "i18n-js";
import { BotkitConversation } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";
import { safeParseFloat } from "../../helpers/variables";
import { convertVarToCurrency } from "../../helpers";

const NODE_ID = "NODE_182";
export function NODE_182(convo: BotkitConversation): string {
  bkQRAsk(
    convo,
    NODE_ID + ".title",
    [
      {
        title: NODE_ID + ".opt1",
        payload: NODE_ID + ".choice0",
        onChoose: async (answer, convo, bot, msg) => {
          convo.gotoThread("t_NODE_157");
        },
      },
    ],
    NODE_ID,
    {},
    (_tmp, vars) => {
      const NODE_181 = safeParseFloat(vars.NODE_181);
      return translate(NODE_ID + ".title", {
        NODE_181: NODE_181 / 40,
        currency: convertVarToCurrency(vars.NODE_004),
      });
    }
  );

  return `t_${NODE_ID}`;
}
