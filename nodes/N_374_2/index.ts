import { translate } from "i18n-js";
import { BotkitConversation } from "botkit";
import bkStrAsk from "../../bot_nodes/ask_str";
import { convertVarToCurrency } from "../../helpers";

const NODE_ID = "NODE_374_2";
export function NODE_374_2(convo: BotkitConversation): string {
  bkStrAsk(
    convo,
    NODE_ID + ".hello",
    async (answer, convo, bot, message) => {
      convo.gotoThread("t_NODE_381");
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
