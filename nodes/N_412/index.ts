import { BotkitConversation } from "botkit";
import bkStrAsk from "../../bot_nodes/ask_str";
import { getGoldPrices } from "../../helpers/apis";
import {
  convertVarToCurrency,
  convertVarToCurrencySym,
} from "../../helpers/i18n/index";
import { safeParseFloat } from "../../helpers/variables/index";

const NODE_ID = "NODE_412";
export function NODE_412(convo: BotkitConversation): string {
  bkStrAsk(
    convo,
    NODE_ID + ".hello",
    async (answer, convo, bot, message) => {
      const NODE_411 = safeParseFloat(convo.vars.NODE_411);
      const inputValue = safeParseFloat(answer);
      // const prices =
      if (inputValue >= 0) {
        if (NODE_411 - inputValue > convo.vars.gold_prices.gThreshold) {
          convo.gotoThread("t_NODE_418");
        } else if (NODE_411 - inputValue > 0) {
          convo.gotoThread("t_NODE_415");
        } else {
          convo.gotoThread("t_NODE_417");
        }
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
    }
  );
  return `t_${NODE_ID}`;
}
