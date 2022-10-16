import { BotkitConversation } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";

const NODE_ID = "NODE_362";
export function NODE_362(convo: BotkitConversation): string {
  bkQRAsk(
    convo,
    NODE_ID + ".title",
    [
      {
        title: NODE_ID + ".opt1",
        payload: NODE_ID + ".choice0",
        onChoose: async (answer, convo, bot, msg) => {
          convo.gotoThread("t_NODE_363");
        },
      },
      {
        title: NODE_ID + ".opt2",
        payload: NODE_ID + ".choice1",
        onChoose: async (answer, convo, bot, msg) => {
          convo.gotoThread("t_NODE_364");
        },
      },
      {
        title: NODE_ID + ".opt3",
        payload: NODE_ID + ".choice2",
        onChoose: async (answer, convo, bot, msg) => {
          convo.gotoThread("t_NODE_366");
        },
      },
      {
        title: NODE_ID + ".opt4",
        payload: NODE_ID + ".choice3",
        onChoose: async (answer, convo, bot, msg) => {
          convo.gotoThread("t_NODE_368");
        },
      },
      {
        title: NODE_ID + ".opt5",
        payload: NODE_ID + ".choice4",
        onChoose: async (answer, convo, bot, msg) => {
          convo.gotoThread("t_NODE_370");
        },
      },
    ],
    NODE_ID
  );

  return `t_${NODE_ID}`;
}
