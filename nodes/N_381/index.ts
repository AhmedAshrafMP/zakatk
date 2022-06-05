import { BotkitConversation } from "botkit";
import bkStrAsk from "../../bot_nodes/ask_str";
import { convertVarToCurrency, translate } from "../../helpers";
import { safeParseFloat } from "../../helpers/variables";

const NODE_ID = "NODE_381";
export function NODE_381(convo: BotkitConversation): string {
  bkStrAsk(
    convo,
    NODE_ID + ".hello",
    async (answer, convo, bot, message) => {
      const inputValue = safeParseFloat(answer);
      if (inputValue >= 0) {
        if (inputValue >= 612.5) {
          convo.gotoThread("t_NODE_382");
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
    },
    (_tmp, vars) => {
      return translate(NODE_ID + ".hello", {
        currency: convertVarToCurrency(vars.NODE_004),
      });
    }
  );
  return `t_${NODE_ID}`;
}
