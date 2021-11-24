import { BotkitConversation } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";
import { safeParseFloat } from "../../helpers/variables";

const NODE_ID = "NODE_035_1";
export function NODE_035_1(convo: BotkitConversation): string {
  bkQRAsk(
    convo,
    NODE_ID + ".title",
    [
      {
        title: NODE_ID + ".opt1",
        payload: NODE_ID + ".choice0",
        onChoose: async (answer, convo, bot, msg) => {
          convo.setVar("totalDebit", 0);
          convo.gotoThread("t_NODE_037");
        },
      },
      {
        title: NODE_ID + ".opt2",
        payload: NODE_ID + ".choice1",
        onChoose: async (answer, convo, bot, msg) => {
          const totalGameyaPaid = safeParseFloat(convo.vars.NODE_032 || 0);
          const totalGameyaReceivable = safeParseFloat(
            convo.vars.NODE_032_1 || 0
          );
          convo.setVar(
            "totalDebit",
            Math.abs(totalGameyaPaid - totalGameyaReceivable)
          );
          convo.gotoThread("t_NODE_036");
        },
      },
    ],
    NODE_ID
  );

  return `t_${NODE_ID}`;
}
