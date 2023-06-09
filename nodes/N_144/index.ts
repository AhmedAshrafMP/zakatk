import { BotkitConversation } from "botkit";
import bkStrAsk from "../../bot_nodes/ask_str";
import { safeParseFloat } from "../../helpers/variables";

export let zakatIAC = new Map();
const NODE_ID = "NODE_144";
export function NODE_144(convo: BotkitConversation): string {
  bkStrAsk(
    convo,
    NODE_ID + ".hello",

    async (answer, convo, bot, message) => {
      const NODE_138 = safeParseFloat(convo.vars.NODE_138);
      const NODE_138_1 = safeParseFloat(convo.vars.NODE_138_1);
      const NODE_142 = safeParseFloat(convo.vars.NODE_142);
      const NODE_143 = safeParseFloat(convo.vars.NODE_143);
      const NODE_141 = safeParseFloat(convo.vars.NODE_141);
      const NODE_144 = safeParseFloat(convo.vars.NODE_144);
      const netZakat = NODE_138 - NODE_138_1;
      //iacCalc the values
      const zakatWithMaterials =
        NODE_141 + netZakat + NODE_142 + NODE_144 - NODE_143;
      const zakatWithOutMaterials = netZakat + NODE_142 + NODE_144 - NODE_143;

      zakatIAC.set(
        convo.vars.NODE_131,
        zakatWithMaterials || zakatWithOutMaterials
      );

      if (NODE_144 && NODE_144 > 0) {
        if (
          zakatWithMaterials >= convo.vars.gold_prices.gThreshold ||
          zakatWithOutMaterials >= convo.vars.gold_prices.gThreshold
        ) {
          if (NODE_141 && NODE_141 > 0) {
            convo.setVar("zakatIAC", zakatIAC);
            convo.setVar("zakatWithMaterials", zakatWithMaterials);

            convo.gotoThread("t_NODE_149_1");
          } else {
            convo.setVar("zakatIAC", zakatIAC);
            convo.setVar("zakatWithOutMaterials", zakatWithOutMaterials);
            convo.gotoThread("t_NODE_149_1");
          }
        } else {
          convo.gotoThread("t_NODE_145");
        }
      } else {
        convo.repeat();
      }
    },
    NODE_ID,
    {
      contentType: "application/vnd.microsoft.input",
      content: {
        validation: "*",
        type: "money",
      },
    }
  );
  return `t_${NODE_ID}`;
}
