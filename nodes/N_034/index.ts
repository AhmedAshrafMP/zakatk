import { BotkitConversation } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";
import { markOptionAsDone } from "../N_023";

const NODE_ID = "NODE_034";
export function NODE_034(convo: BotkitConversation): string {
  bkQRAsk(
    convo,
    NODE_ID + ".title",
    [
      {
        title: NODE_ID + ".opt1",
        payload: NODE_ID + ".choice0",
        onChoose: async (answer, convo, bot, msg) => {
          convo.gotoThread("t_NODE_034_1");
        },
      },
      {
        title: NODE_ID + ".opt2",
        payload: NODE_ID + ".choice1",
        onChoose: async (answer, convo, bot, msg) => {
          convo.gotoThread("t_NODE_034_2");
        },
      },
      {
        title: NODE_ID + ".opt3",
        payload: NODE_ID + ".choice2",
        onChoose: async (answer, convo, bot, msg) => {
          if (convo.vars.NODE_031 === "NODE_031.choice0") {
            const totalGameyaPaid = parseFloat(convo.vars.NODE_032);
            const totalGameyaReceivable = parseFloat(convo.vars.NODE_032_1);
            convo.setVar(
              "totalCredit",
              Math.abs(totalGameyaPaid - totalGameyaReceivable)
            );
            markOptionAsDone(convo);
            convo.gotoThread("t_NODE_040_1");
          } else {
            convo.gotoThread("t_NODE_040");
          }
        },
      },
    ],
    NODE_ID
  );

  return `t_${NODE_ID}`;
}
