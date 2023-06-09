import { BotkitConversation } from "botkit";
import bkStrAsk from "../../bot_nodes/ask_str";
import bkSay from "../../bot_nodes/say";
import { convertVarToCurrency, translate } from "../../helpers";
import { safeParseFloat } from "../../helpers/variables";

const NODE_ID = "NODE_029";
export function NODE_029(convo: BotkitConversation): string {
  bkStrAsk(
    convo,
    NODE_ID + ".hello",
    async (answer, convo, bot, message) => {
      const nodeIntValue = safeParseFloat(answer);
      if (nodeIntValue >= 0) {
        convo.gotoThread("t_NODE_030");
      } else {
        convo.repeat();
      }
    },
    NODE_ID,
    {
      contentType: "application/vnd.microsoft.input",
      content: {
        validation: "",
        type: "money",
      },
    },
    (tmp, vars) => {
      return translate(NODE_ID + ".hello", {
        currency: convertVarToCurrency(vars.NODE_004),
      });
    }
  );

  return `t_${NODE_ID}`;
}
