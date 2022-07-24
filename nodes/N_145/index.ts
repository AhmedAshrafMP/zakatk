import { BotkitConversation } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";
import { safeParseFloat } from "../../helpers/variables";

const NODE_ID = "NODE_145";
export function NODE_145(convo: BotkitConversation): string {
  bkQRAsk(
    convo,
    NODE_ID + ".title",
    [
      {
        title: NODE_ID + ".opt1",
        payload: NODE_ID + ".choice0",
        onChoose: async (answer, convo, bot, msg) => {
          convo.gotoThread("t_NODE_082");
        },
      },
      {
        title: NODE_ID + ".opt2",
        payload: NODE_ID + ".choice1",
        onChoose: async (answer, convo, bot, msg) => {
          const NODE_138 = safeParseFloat(convo.vars.NODE_138);
          const NODE_138_1 = safeParseFloat(convo.vars.NODE_138_1);
          const NODE_143 = safeParseFloat(convo.vars.NODE_143);
          const NODE_141 = safeParseFloat(convo.vars.NODE_141);
          const nodeIntValue = safeParseFloat(convo.vars.NODE_144);

          const NODE_142 = NODE_138 - NODE_138_1;
          const NODE_149_1 = safeParseFloat(convo.vars.NODE_149_1);

          //iacCalc the values
          const zakatWithMaterials =
            NODE_141 + NODE_142 - NODE_143 + nodeIntValue;
          const zakatWithOutMaterials = NODE_142 - NODE_143 + nodeIntValue;

          if (
            zakatWithMaterials >= convo.vars.gold_prices.sThreshold ||
            zakatWithOutMaterials >= convo.vars.gold_prices.sThreshold
          ) {
            convo.setVar("zakatWithMaterials", zakatWithMaterials);
            convo.setVar("zakatWithOutMaterials", zakatWithOutMaterials);
            convo.gotoThread("t_NODE_149");
          } else {
            convo.gotoThread("t_NODE_148");
          }
        },
      },
    ],
    NODE_ID
  );

  return `t_${NODE_ID}`;
}
