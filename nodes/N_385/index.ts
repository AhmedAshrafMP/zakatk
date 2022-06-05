import { BotkitConversation } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";
import { convertVarToCurrency, translate } from "../../helpers";
import { safeParseFloat } from "../../helpers/variables";

const NODE_ID = "NODE_385";
export function NODE_385(convo: BotkitConversation): string {
  bkQRAsk(
    convo,
    NODE_ID + ".title",
    [
      {
        title: NODE_ID + ".opt1",
        payload: NODE_ID + ".choice0",
        onChoose: async (answer, convo, bot, msg) => {
          convo.stop();
        },
      },
    ],
    NODE_ID,
    {},
    (_tmp, vars) => {
      return translate(NODE_ID + ".title", {
        anaamzakat: vars.totalZoro3Zakat,
        currency: convertVarToCurrency(vars.NODE_004),
      });
    }
  );

  return `t_${NODE_ID}`;
}
