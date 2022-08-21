import { BotkitConversation } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";
import { convertVarToCurrency, translate } from "../../helpers";
import { safeParseFloat } from "../../helpers/variables";

const NODE_ID = "NODE_149";
export function NODE_149(convo: BotkitConversation): string {
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
      let zakatWithMaterials = safeParseFloat(vars.zakatWithMaterials);
      let zakatWithOutMaterials = safeParseFloat(vars.zakatWithOutMaterials);
      let NODE_149_1 = safeParseFloat(vars.NODE_149_1);

      return translate(NODE_ID + ".title", {
        currency: convertVarToCurrency(vars.NODE_004),
        iacZakat:
          zakatWithMaterials >= zakatWithOutMaterials
            ? (zakatWithMaterials * NODE_149_1) / 100 / 40
            : (zakatWithOutMaterials * NODE_149_1) / 100 / 40,
      });
    }
  );

  return `t_${NODE_ID}`;
}
