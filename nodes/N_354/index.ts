import { BotkitConversation } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";
import { safeParseFloat } from "../../helpers/variables";

const NODE_ID = "NODE_354";
export function NODE_354(convo: BotkitConversation): string {
  bkQRAsk(
    convo,
    NODE_ID + ".title",
    [
      {
        title: NODE_ID + ".opt1",
        payload: NODE_ID + ".choice0",
        onChoose: async (answer, convo, bot, msg) => {
          convo.gotoThread("t_NODE_209");
        },
      },
      {
        title: NODE_ID + ".opt2",
        payload: NODE_ID + ".choice1",
        onChoose: async (answer, convo, bot, msg) => {
          const NODE_349 = safeParseFloat(convo.vars.NODE_349);
          const NODE_350 = safeParseFloat(convo.vars.NODE_350);
          const NODE_350_1 = safeParseFloat(convo.vars.NODE_350_1);
          const NODE_351 = safeParseFloat(convo.vars.NODE_351);
          const NODE_352 = safeParseFloat(answer);

          const zakatSas1 =
            NODE_349 + NODE_350 + NODE_352 - (NODE_351 + NODE_350_1);

          if (zakatSas1 >= convo.vars.gold_prices_sThreshold) {
            convo.gotoThread("t_NODE_358");
          } else {
            convo.gotoThread("t_NODE_209");
          }
        },
      },
    ],
    NODE_ID
  );

  return `t_${NODE_ID}`;
}
