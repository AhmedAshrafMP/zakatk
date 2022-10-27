import { BotkitConversation } from "botkit";
import bkStrAsk from "../../bot_nodes/ask_str";
import { safeParseFloat } from "../../helpers/variables";

const NODE_ID = "NODE_122";

export let zakatIAC1 = new Map();
export function NODE_122(convo: BotkitConversation): string {
  bkStrAsk(
    convo,
    NODE_ID + ".hello",
    async (answer, convo, bot, message) => {
      const NODE_116 = safeParseFloat(convo.vars.NODE_116);
      const NODE_116_1 = safeParseFloat(convo.vars.NODE_116_1);
      const NODE_119 = safeParseFloat(convo.vars.NODE_119);
      const NODE_121 = safeParseFloat(convo.vars.NODE_121);
      const NODE_120 = safeParseFloat(convo.vars.NODE_120);
      const NODE_122 = safeParseFloat(convo.vars.NODE_122);

      const iacValues = NODE_116 - NODE_116_1 + NODE_119 + NODE_120;
      const iacZakat = iacValues + NODE_122 - NODE_121;

      zakatIAC1.set(convo.vars.NODE_109, iacZakat);

      if (NODE_122 && NODE_122 > 0) {
        if (
          iacZakat &&
          iacZakat >= safeParseFloat(convo.vars.gold_prices.gThreshold)
        ) {
          convo.setVar("iacZakat", iacZakat);
          console.log(zakatIAC1, " hello fomr ZAKATIAC1");
          convo.gotoThread("t_NODE_127_1");
        } else {
          convo.gotoThread("t_NODE_124");
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
