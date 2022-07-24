import { BotkitConversation } from "botkit";
import bkStrAsk from "../../bot_nodes/ask_str";
import { translate } from "../../helpers";
import { getYearsDiff } from "../../helpers/dates/yearsdiff";
import { safeParseFloat } from "../../helpers/variables";

const NODE_ID = "NODE_207";
export function NODE_207(convo: BotkitConversation): string {
  bkStrAsk(
    convo,
    NODE_ID + ".hello",
    async (answer, convo, bot, message) => {
      const inputValue = safeParseFloat(answer);
      //rent building name
      convo.setVar("RBNAME", inputValue);
      convo.gotoThread("t_NODE_208");
    },
    NODE_ID,
    {
      contentType: "application/vnd.microsoft.input",
      content: {
        validation: "*",
        type: "string",
      },
    }
  );
  return `t_${NODE_ID}`;
}
