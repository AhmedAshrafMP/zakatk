import { BotkitConversation } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";

const NODE_ID = "NODE_009";
export default function NODE_009(convo: BotkitConversation): string {
  bkQRAsk(
    convo,
    NODE_ID + ".title",
    [
      {
        title: NODE_ID + ".opt2",
        payload: NODE_ID + ".choice1",
        onChoose: async (answer, convo, bot, msg) => {
          convo.gotoThread("t_NODE_014");
        },
      },
      {
        title: NODE_ID + ".opt1",
        payload: NODE_ID + ".choice0",
        onChoose: async (answer, convo, bot, msg) => {
          convo.gotoThread("t_d_072_204");
        },
      },

      {
        title: NODE_ID + ".opt3",
        payload: NODE_ID + ".choice2",
        onChoose: async (answer, convo, bot, msg) => {
          convo.gotoThread("t_d_362_385");
        },
      },
      {
        title: NODE_ID + ".opt4",
        payload: NODE_ID + ".choice3",
        onChoose: async (answer, convo, bot, msg) => {
          //convo.gotoThread("t_d_386_406");
          convo.gotoThread("t_d_386_406");
        },
      },
      {
        title: NODE_ID + ".opt5",
        payload: NODE_ID + ".choice4",
        onChoose: async (answer, convo, bot, msg) => {
          convo.gotoThread("t_d_408_439");
        },
      },
    ],
    NODE_ID
  );

  return `t_${NODE_ID}`;
}
