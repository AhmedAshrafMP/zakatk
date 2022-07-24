import { BotkitConversation } from "botkit";
import bkStrAsk from "../../bot_nodes/ask_str";
import { safeParseFloat } from "../../helpers/variables";

const NODE_ID = "NODE_254";
export function NODE_254(convo: BotkitConversation): string {
  bkStrAsk(
    convo,
    NODE_ID + ".hello",

    async (answer, convo, bot, message) => {
      const NODE_240 = safeParseFloat(convo.vars.NODE_240);
      const NODE_241 = safeParseFloat(convo.vars.NODE_241);
      const NODE_242 = safeParseFloat(convo.vars.NODE_242);
      const NODE_245 = safeParseFloat(convo.vars.NODE_245);
      const NODE_246 = safeParseFloat(convo.vars.NODE_246);
      const NODE_247 = safeParseFloat(convo.vars.NODE_247);
      const NODE_248 = safeParseFloat(convo.vars.NODE_248);
      const NODE_250 = safeParseFloat(convo.vars.NODE_250);
      const NODE_251 = safeParseFloat(convo.vars.NODE_251);
      const nodeIntValue = safeParseFloat(convo.vars.NODE_254);

      //calc zakat
      const netStocked = NODE_245 - NODE_246;
      const netEarthMoney = NODE_240 - NODE_241;
      const isChecked = netEarthMoney + netStocked;
      const rentZakat = isChecked * nodeIntValue;

      if (nodeIntValue && nodeIntValue > 0) {
        if (rentZakat && rentZakat >= convo.vars.gold_prices.gThreshold) {
          convo.setVar("rentZakat", rentZakat);
          convo.gotoThread("t_NODE_998");
        } else {
          convo.gotoThread("t_NODE_209");
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
