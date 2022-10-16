import { BotkitConversation } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";
import { safeParseFloat } from "../../helpers/variables";
import { singleCompanyNames } from "../N_098_1_1";

const NODE_ID = "NODE_101";
export function NODE_101(convo: BotkitConversation): string {
  bkQRAsk(
    convo,
    NODE_ID + ".title",
    [
      {
        title: NODE_ID + ".opt1",
        payload: NODE_ID + ".choice0",
        onChoose: async (answer, convo, bot, msg) => {
          convo.gotoThread("t_NODE_103");
        },
      },
      {
        title: NODE_ID + ".opt2",
        payload: NODE_ID + ".choice1",
        onChoose: async (answer, convo, bot, msg) => {
          const singleCompany = safeParseFloat(convo.vars.singleCompany);
          if (
            singleCompany >= safeParseFloat(convo.vars.gold_prices.sThreshold)
          ) {
            convo.setVar("singleCompanyNames", singleCompanyNames);
            convo.gotoThread("t_NODE_104");
          } else {
            convo.gotoThread("t_NODE_103");
          }
        },
      },
    ],
    NODE_ID
  );

  return `t_${NODE_ID}`;
}
