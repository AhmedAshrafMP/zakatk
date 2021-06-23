import { BotkitConversation } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";

const NODE_ID = "NODE_060_2";
export function NODE_060_2(convo: BotkitConversation): string {
  bkQRAsk(
    convo,
    "readmore.goldexplain",
    [
      {
        title: NODE_ID + ".opt1",
        payload: NODE_ID + ".choice0",
        onChoose: async (answer, convo, bot, msg) => {
          convo.gotoThread("t_NODE_061");
        },
      },
      {
        title: NODE_ID + ".opt2",
        payload: NODE_ID + ".choice1",
        onChoose: async (answer, convo, bot, msg) => {
          convo.gotoThread("t_NODE_060");
        },
      },
    ],
    NODE_ID
  );

  return `t_${NODE_ID}`;
}
