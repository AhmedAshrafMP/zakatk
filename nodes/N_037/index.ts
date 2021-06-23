import { BotkitConversation } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";
import { markOptionAsDone } from "../N_023";

const NODE_ID = "NODE_037";
export function NODE_037(convo: BotkitConversation): string {
  bkQRAsk(
    convo,
    NODE_ID + ".title",
    [
      {
        title: NODE_ID + ".opt1",
        payload: NODE_ID + ".choice0",
        onChoose: async (answer, convo, bot, msg) => {
          convo.gotoThread("t_NODE_038");
        },
      },
      {
        title: NODE_ID + ".opt2",
        payload: NODE_ID + ".choice1",
        onChoose: async (answer, convo, bot, msg) => {
          markOptionAsDone(convo);
          convo.gotoThread("t_NODE_040_1");
        },
      },
    ],
    NODE_ID
  );

  return `t_${NODE_ID}`;
}
