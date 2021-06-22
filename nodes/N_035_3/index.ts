import { BotkitConversation } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";

const NODE_ID = "NODE_035_3";
export function NODE_035_3(convo: BotkitConversation): string {
  bkQRAsk(
    convo,
    NODE_ID + ".title",
    [
      {
        title: NODE_ID + ".opt1",
        payload: NODE_ID + ".choice0",
        onChoose: async (answer, convo, bot, msg) => {
          if (convo.vars.NODE_031 === "NODE_031.choice0") {
            const totalGameyaPaid = parseFloat(convo.vars.NODE_032);
            const totalGameyaReceivable = parseFloat(convo.vars.NODE_032_1);
            convo.setVar(
              "totalDebit",
              Math.abs(totalGameyaPaid - totalGameyaReceivable)
            );
            convo.gotoThread("t_NODE_037");
          } else {
            convo.gotoThread("t_NODE_036");
          }
        },
      },
      {
        title: NODE_ID + ".opt2",
        payload: NODE_ID + ".choice1",
        onChoose: async (answer, convo, bot, msg) => {
          convo.gotoThread("t_NODE_035_1");
        },
      },
    ],
    NODE_ID
  );

  return `t_${NODE_ID}`;
}
