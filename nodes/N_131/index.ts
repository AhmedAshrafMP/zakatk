import { BotkitConversation } from "botkit";
import bkStrAsk from "../../bot_nodes/ask_str";

const NODE_ID = "NODE_131";
export function NODE_131(convo: BotkitConversation): string {
  bkStrAsk(
    convo,

    NODE_ID + ".hello",
    async (answer, convo, bot, message) => {
      convo.gotoThread("t_NODE_132");
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
