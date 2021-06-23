import { BotkitConversation } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";

const NODE_ID = "NODE_040_1";
export function NODE_040_1(convo: BotkitConversation): string {
  bkQRAsk(
    convo,
    NODE_ID + ".title",
    [
      {
        title: NODE_ID + ".opt1",
        payload: NODE_ID + ".choice0",
        onChoose: async (answer, convo, bot, msg) => {
          convo.gotoThread("t_NODE_023");
        },
      },
      {
        title: NODE_ID + ".opt2",
        payload: NODE_ID + ".choice1",
        onChoose: async (answer, convo, bot, msg) => {
          // calc threshold
          convo.gotoThread("t_NODE_041");
        },
      },
    ],
    NODE_ID
  );

  return `t_${NODE_ID}`;
}
