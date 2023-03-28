import { BotkitConversation } from "botkit";
import bkStrAsk from "../../bot_nodes/ask_str";
import { safeParseFloat } from "../../helpers/variables";

const NODE_ID = "NODE_171";

export let buildingsZakat = new Map();
export function NODE_171(convo: BotkitConversation): string {
  bkStrAsk(
    convo,
    NODE_ID + ".hello",
    async (answer, convo, bot, message) => {
      const NODE_171 = safeParseFloat(answer);
      const NODE_169 = safeParseFloat(convo.vars.NODE_169);
      const buildingsZakatk = NODE_169 - NODE_171;
      buildingsZakat.set(convo.vars.NODE_157_1, buildingsZakatk / 38.8);
      if (NODE_171 && NODE_171 > 0) {
        if (
          buildingsZakatk &&
          buildingsZakatk >= convo.vars.gold_prices.gThreshold
        ) {
          convo.setVar("buildingsZakat", buildingsZakat);
          convo.setVar("buildingsZakatk", buildingsZakatk);
          convo.gotoThread("t_NODE_176");
        } else {
          convo.gotoThread("t_NODE_173");
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
