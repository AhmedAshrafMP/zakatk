import { BotkitConversation } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";
import { markOptionAsDone } from "../N_023";

const NODE_ID = "NODE_072";
export function NODE_072(convo: BotkitConversation): string {
  bkQRAsk(
    convo,
    NODE_ID + ".title",
    [
      {
        title: NODE_ID + ".opt1",
        payload: NODE_ID + ".choice0",
        onChoose: async (answer, convo, bot, msg) => {
          convo.gotoThread("t_NODE_074");
        },
      },
      {
        title: NODE_ID + ".opt2",
        payload: NODE_ID + ".choice1",
        onChoose: async (answer, convo, bot, msg) => {
          convo.gotoThread("t_NODE_090");
        },
      },
      {
        title: NODE_ID + ".opt3",
        payload: NODE_ID + ".choice2",
        onChoose: async (answer, convo, bot, msg) => {
          convo.gotoThread("t_NODE_154");
        },
      },
      {
        title: NODE_ID + ".opt4",
        payload: NODE_ID + ".choice3",
        onChoose: async (answer, convo, bot, msg) => {
          convo.gotoThread("t_NODE_266");
        },
      },
    ],
    NODE_ID
  );

  return `t_${NODE_ID}`;
}
