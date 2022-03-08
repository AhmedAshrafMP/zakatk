import { BotkitConversation } from "botkit";
import bkStrAsk from "../../bot_nodes/ask_str";
import { convertVarToCurrency, translate } from "../../helpers";
import { safeParseFloat } from "../../helpers/variables";

const NODE_ID = "NODE_058_5";
export function NODE_058_5(convo: BotkitConversation): string {
  bkStrAsk(
    convo,
    NODE_ID + ".hello",
    async (answer, convo, bot, message) => {
      const intAnswer = safeParseFloat(answer);
      if (intAnswer >= 0) {
        convo.setVar(
          "totalGold",
          safeParseFloat(intAnswer / convo.vars.gold_prices.gold)
        );
        convo.gotoThread("t_NODE_059_6");
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
      return translate(NODE_ID + ".title", {
        currency: convertVarToCurrency(vars.NODE_004),
      });
    }
  );
  return `t_${NODE_ID}`;
}
