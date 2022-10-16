import { BotkitConversation } from "botkit";
import bkStrAsk from "../../bot_nodes/ask_str";
import { safeParseFloat } from "../../helpers/variables";

export let singleCompanyNames = new Map();
const NODE_ID = "NODE_098_1_1";
export function NODE_098_1_1(convo: BotkitConversation): string {
  bkStrAsk(
    convo,
    NODE_ID + ".hello",
    async (answer, convo, bot, message) => {
      const NODE_098_1 = safeParseFloat(convo.vars.NODE_098_1);
      const nodeIntValue = safeParseFloat(answer);
      const singleCompany = NODE_098_1 - nodeIntValue;
      singleCompanyNames.set(convo.vars.NODE_095, singleCompany / 40);

      if (nodeIntValue && nodeIntValue > 0) {
        if (
          singleCompany &&
          singleCompany >= safeParseFloat(convo.vars.gold_prices.gThreshold)
        ) {
          convo.setVar("singleCompanyNames", singleCompanyNames);
          convo.setVar("singleCompany", singleCompany);
          convo.gotoThread("t_NODE_104");
        } else {
          convo.setVar("singleCompanyNames", singleCompanyNames);
          convo.setVar("singleCompany", singleCompany);
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
