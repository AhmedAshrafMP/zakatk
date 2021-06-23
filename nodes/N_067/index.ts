import { BotkitConversation } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";

const NODE_ID = "NODE_067";
export function NODE_067(convo: BotkitConversation): string {
  bkQRAsk(
    convo,
    NODE_ID + ".title",
    [
      {
        title: NODE_ID + ".opt1",
        payload: NODE_ID + ".choice0",
        onChoose: async (answer, convo, bot, msg) => {
          convo.gotoThread("t_NODE_067_1");
        },
      },
      {
        title: NODE_ID + ".opt2",
        payload: NODE_ID + ".choice1",
        onChoose: async (answer, convo, bot, msg) => {
          convo.gotoThread("t_NODE_068");
        },
      },
    ],
    NODE_ID
  );

  return `t_${NODE_ID}`;
}
