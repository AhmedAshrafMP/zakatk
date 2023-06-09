import { BotkitConversation } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";
import { markOptionAsDone } from "../N_023";

const NODE_ID = "NODE_034_1";
export function NODE_034_1(convo: BotkitConversation): string {
  bkQRAsk(
    convo,
    NODE_ID + ".title",
    [
      {
        title: NODE_ID + ".opt1",
        payload: NODE_ID + ".choice0",
        onChoose: async (answer, convo, bot, msg) => {
          markOptionAsDone(convo);
          convo.gotoThread("t_NODE_035");
        },
      },
      {
        title: NODE_ID + ".opt2",
        payload: NODE_ID + ".choice1",
        onChoose: async (answer, convo, bot, msg) => {
          if (convo.vars.NODE_038 === "NODE_038.choice0") {
            convo.gotoThread("t_NODE_034");
          } else {
            convo.gotoThread("t_NODE_039");
          }
        },
      },
    ],
    NODE_ID
  );

  return `t_${NODE_ID}`;
}
