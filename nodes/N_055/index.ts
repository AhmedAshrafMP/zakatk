import { BotkitConversation } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";
import bkSay from "../../bot_nodes/say";

const NODE_ID = "NODE_055";
export default function NODE_055(convo: BotkitConversation): string {
  bkQRAsk(
    convo,
    NODE_ID + ".hello",
    [
      {
        title: NODE_ID + ".opt1",
        payload: NODE_ID + ".choice0",
        onChoose: async (answer, convo, bot, msg) => {
          convo.stop();
        },
      },
    ],
    NODE_ID
  );
  return `t_${NODE_ID}`;
}
