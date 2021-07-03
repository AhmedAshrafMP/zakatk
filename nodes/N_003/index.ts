import { BotkitConversation } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";

const NODE_ID = "NODE_003";
export default function NODE_003(convo: BotkitConversation): string {
  bkQRAsk(
    convo,
    NODE_ID + ".title",
    [
      {
        title: NODE_ID + ".opt1",
        payload: NODE_ID + ".choice0",
        onChoose: async (_answer, convo, _bot, _msg) => {
          convo.gotoThread("t_NODE_004");
        },
      },
      // {
      //   title: NODE_ID + ".opt2",
      //   payload: NODE_ID + ".choice1",
      //   onChoose: async (_answer, convo, _bot, _msg) => {
      //     convo.gotoThread("t_NODE_002");
      //   },
      // },
    ],
    NODE_ID
  );

  return `t_${NODE_ID}`;
}
