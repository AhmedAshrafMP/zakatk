import { BotkitConversation } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";
import { safeParseFloat } from "../../helpers/variables";

const NODE_ID = "NODE_124";
export function NODE_124(convo: BotkitConversation): string {
  bkQRAsk(
    convo,
    NODE_ID + ".title",

    [
      {
        title: NODE_ID + ".opt1",
        payload: NODE_ID + ".choice0",
        onChoose: async (answer, convo, bot, msg) => {
          convo.gotoThread("t_NODE_126");
        },
      },
      {
        title: NODE_ID + ".opt2",
        payload: NODE_ID + ".choice1",
        onChoose: async (answer, convo, bot, msg) => {
          const NODE_116 = safeParseFloat(convo.vars.NODE_116);
          const NODE_116_1 = safeParseFloat(convo.vars.NODE_116_1);
          const NODE_119 = safeParseFloat(convo.vars.NODE_119);
          const NODE_121 = safeParseFloat(convo.vars.NODE_121);
          const NODE_120 = safeParseFloat(convo.vars.NODE_120);
          const NODE_122 = safeParseFloat(convo.vars.NODE_122);

          const iacValues = NODE_116 - NODE_116_1 + NODE_119 + NODE_120;
          const iacZakat = iacValues + NODE_122 - NODE_121;

          if (
            iacZakat >= convo.vars.gold_prices.sThreshold ||
            iacZakat >= convo.vars.gold_prices.sThreshold
          ) {
            convo.setVar("iacZakat", iacZakat);
            convo.gotoThread("t_NODE_127_1");
          } else {
            convo.gotoThread("t_NODE_126");
          }
        },
      },
    ],
    NODE_ID
  );

  return `t_${NODE_ID}`;
}
