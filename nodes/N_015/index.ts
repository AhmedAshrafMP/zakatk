import { BotkitConversation } from "botkit";
import moment from "moment";
import bkQRAsk from "../../bot_nodes/ask_qr";

const NODE_ID = "NODE_015";
export default function NODE_015(convo: BotkitConversation): string {
  bkQRAsk(
    convo,
    NODE_ID + ".title",
    [
      {
        title: NODE_ID + ".opt1",
        payload: NODE_ID + ".choice0",
        onChoose: async (answer, convo, bot, msg) => {
          console.log(convo.vars.gold_prices);
          convo.gotoThread("t_NODE_016");
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
