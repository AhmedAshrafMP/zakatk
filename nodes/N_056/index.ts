import { BotkitConversation } from "botkit";
import { markOptionAsDone } from "..";
import bkQRAsk from "../../bot_nodes/ask_qr";

const NODE_ID = "NODE_056";
export function NODE_056(convo: BotkitConversation): string {
  bkQRAsk(
    convo,
    NODE_ID + ".title",
    [
      {
        title: NODE_ID + ".opt1",
        payload: NODE_ID + ".choice0",
        onChoose: async (answer, convo, bot, msg) => {
          markOptionAsDone(convo);
          convo.gotoThread("t_NODE_058_5");
        },
      },
      {
        title: NODE_ID + ".opt2",
        payload: NODE_ID + ".choice1",
        onChoose: async (answer, convo, bot, msg) => {
          markOptionAsDone(convo);
          convo.gotoThread("t_NODE_056_1");
        },
      },
    ],
    NODE_ID
  );

  return `t_${NODE_ID}`;
}
