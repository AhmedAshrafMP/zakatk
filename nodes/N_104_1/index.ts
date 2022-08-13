import { BotkitConversation } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";
import { convertVarToCurrency, translate } from "../../helpers";
import { safeParseFloat } from "../../helpers/variables";

const NODE_ID = "NODE_104_1";
export function NODE_104_1(convo: BotkitConversation): string {
  bkQRAsk(
    convo,
    NODE_ID + ".title",
    [
      {
        title: NODE_ID + ".opt1",
        payload: NODE_ID + ".choice0",
        onChoose: async (answer, convo, bot, msg) => {
          convo.gotoThread("t_NODE_095");
        },
      },
    ],
    NODE_ID,
    {},
    (_tmp, vars) => {
      const singleCompanyWithMaterials = safeParseFloat(
        vars.singleCompanyWithMaterials / 40
      );
      return translate(NODE_ID + ".title", {
        singleCompanyWithMaterials: singleCompanyWithMaterials,
        currency: convertVarToCurrency(vars.NODE_004),
      });
    }
  );

  return `t_${NODE_ID}`;
}
