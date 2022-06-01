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
        onChoose: async (answer, convo, bot, msg) => {},
      },
    ],
    NODE_ID,

    {},
    (_tmp, vars) => {
      const anaamzakat = safeParseFloat(vars.NODE_374);
      const anaamzakat2 = safeParseFloat(vars.NODE_381);
      console.log(anaamzakat, "hello from anam zakattttttttttTTttttttttttt");
      console.log(anaamzakat2, "hello from anam zakattttttttttTTttttttttttt");
      if (anaamzakat2 > anaamzakat) {
        return translate(NODE_ID + ".title", {
          anaamzakat,
        });
      } else {
        return translate(NODE_ID + ".title2", {
          anaamzakat2,
        });
      }
    }
  );

  return `t_${NODE_ID}`;
}
