import { BotkitConversation } from "botkit";
import bkStrAsk from "../../bot_nodes/ask_str";
import { safeParseFloat } from "../../helpers/variables";

const NODE_ID = "NODE_098_2_2";
export function NODE_098_2_2(convo: BotkitConversation): string {
  bkStrAsk(
    convo,
    NODE_ID + ".hello",
    async (answer, convo, bot, message) => {
      const NODE_098_2 = safeParseFloat(convo.vars.NODE_098_2);
      const NODE_098_2_1 = safeParseFloat(convo.vars.NODE_098_2_1);
      const nodeIntValue = safeParseFloat(convo.vars.NODE_098_2_2);
      const singleCompanyWithMaterials =
        NODE_098_2 - NODE_098_2_1 + nodeIntValue;

      if (nodeIntValue && nodeIntValue > 0) {
        if (
          singleCompanyWithMaterials &&
          singleCompanyWithMaterials >=
            safeParseFloat(convo.vars.gold_prices.gThreshold)
        ) {
          convo.setVar(
            "singleCompanyWithMaterials",
            singleCompanyWithMaterials
          );
          convo.gotoThread("t_NODE_104");
        } else {
          convo.gotoThread("t_NODE_101");
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
