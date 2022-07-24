import { BotkitConversation } from "botkit";
import bkStrAsk from "../../bot_nodes/ask_str";
import { convertVarToCurrencySym } from "../../helpers";
import { safeParseFloat } from "../../helpers/variables";

const NODE_ID = "NODE_078_3";
export function NODE_078_3(convo: BotkitConversation): string {
  bkStrAsk(
    convo,
    NODE_ID + ".hello",

    async (answer, convo, bot, message) => {
      const NODE_078 = safeParseFloat(convo.vars.NODE_078);
      const NODE_078_1 = safeParseFloat(convo.vars.NODE_078_1);
      const NODE_078_2 = safeParseFloat(convo.vars.NODE_078_2);
      const nodeIntValue = safeParseFloat(convo.vars.NODE_078_3);

      const companySharesDividing = NODE_078 - NODE_078_1;

      const companyShares = (companySharesDividing / NODE_078_2) * nodeIntValue;

      if (nodeIntValue && nodeIntValue > 0) {
        if (
          companyShares &&
          companyShares >= convo.vars.gold_prices.gThreshold
        ) {
          convo.setVar("companyShares", companyShares);
          convo.gotoThread("t_NODE_083");
        } else {
          convo.gotoThread("t_NODE_080");
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
