import { BotkitConversation } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";

const NODE_ID = "NODE_031";
export function NODE_031(convo: BotkitConversation): string {
  // clear each period

  bkQRAsk(
    convo,
    NODE_ID + ".title",
    [
      {
        title: NODE_ID + ".opt1",
        payload: NODE_ID + ".choice0",
        onChoose: async (answer, convo, bot, msg) => {
          convo.gotoThread("t_NODE_032");
        },
      },
      {
        title: NODE_ID + ".opt2",
        payload: NODE_ID + ".choice1",
        onChoose: async (answer, convo, bot, msg) => {
          convo.gotoThread("t_NODE_035");
        },
      },
    ],
    NODE_ID
  );

  return `t_${NODE_ID}`;
}
