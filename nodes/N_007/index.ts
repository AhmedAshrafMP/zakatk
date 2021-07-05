import { BotkitConversation } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";

const NODE_ID = "NODE_007";
export default function NODE_007(convo: BotkitConversation): string {
  bkQRAsk(
    convo,
    NODE_ID + ".title",
    [
      {
        title: NODE_ID + ".opt1",
        payload: NODE_ID + ".choice0",
        onChoose: async (answer, convo, bot, msg) => {
          convo.gotoThread("t_NODE_008");
        },
      },
      {
        title: NODE_ID + ".opt2",
        payload: NODE_ID + ".choice1",
        onChoose: async (answer, convo, bot, msg) => {
          convo.gotoThread("t_NODE_001");
        },
      },
      // {
      //   title: NODE_ID + ".opt3",
      //   payload: NODE_ID + ".choice2",
      //   onChoose: async (answer, convo, bot, msg) => {
      //     convo.gotoThread("t_NODE_008");
      //   },
      // },
      // {
      //   title: NODE_ID + ".opt4",
      //   payload: NODE_ID + ".choice3",
      //   onChoose: async (answer, convo, bot, msg) => {
      //     convo.gotoThread("t_NODE_008");
      //   },
      // },
    ],
    NODE_ID
  );

  return `t_${NODE_ID}`;
}
