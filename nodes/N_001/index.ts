import { BotkitConversation } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";
import { translate } from "../../helpers";

const NODE_ID = "NODE_001";
export default function NODE_001(convo: BotkitConversation): string {
  bkQRAsk(
    convo,
    NODE_ID + ".title",
    () => [
      {
        title: translate(NODE_ID + ".opt1"),
        payload: NODE_ID + ".choice0",
        onChoose: async (answer, convo, bot, msg) => {
          convo.gotoThread("t_NODE_002");
        },
      },
      {
        title: translate(NODE_ID + ".opt2"),
        payload: NODE_ID + ".choice1",
        onChoose: async (answer, convo, bot, msg) => {
          convo.gotoThread("t_NODE_00222");
        },
      },
    ],
    NODE_ID,
    {
      hello: "world",
    }
  );

  return `t_${NODE_ID}`;
}
