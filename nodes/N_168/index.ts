import { BotkitConversation } from "botkit";
import bkStrAsk from "../../bot_nodes/ask_str";


const NODE_ID = "NODE_168"
export function NODE_168(convo: BotkitConversation): string {
 bkStrAsk(
    convo,
    NODE_ID + ".hello",
    async (answer, convo, bot, message) => {},
    NODE_ID,
      {
      contentType: "application/vnd.microsoft.input",
      content: {
        validation: "*",
        type: "string",
      },
    }
  );
  return `t_${NODE_ID}`
}
