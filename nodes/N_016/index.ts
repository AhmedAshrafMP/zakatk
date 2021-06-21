import { BotkitConversation } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";

const NODE_ID = "NODE_016";
export default function NODE_016(convo: BotkitConversation): string {
  bkQRAsk(
    convo,
    NODE_ID + ".title",
    [
      {
        title: NODE_ID + ".opt1",
        payload: NODE_ID + ".choice0",
        onChoose: async (answer, convo, bot, msg) => {
          if (convo.vars.NODE_008 === "NODE_008.choice0") {
            convo.gotoThread("t_NODE_018");
          } else {
            convo.gotoThread("t_NODE_018_1");
          }
        },
      },
      {
        title: NODE_ID + ".opt2",
        payload: NODE_ID + ".choice1",
        onChoose: async (answer, convo, bot, msg) => {
          convo.gotoThread("t_NODE_017");
        },
      },
    ],
    NODE_ID
  );

  return `t_${NODE_ID}`;
}
