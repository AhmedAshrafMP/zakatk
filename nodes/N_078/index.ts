import { BotkitConversation } from "botkit";
import bkStrAsk from "../../bot_nodes/ask_str";

const NODE_ID = "NODE_078";
export function NODE_078(convo: BotkitConversation): string {
  bkStrAsk(
    convo,

    NODE_ID + ".hello",
    async (answer, convo, bot, message) => {
      convo.gotoThread("t_NODE_078_1");
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
