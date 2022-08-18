import { BotkitConversation } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";
import { convertVarToCurrency, translate } from "../../helpers";
import { safeParseFloat } from "../../helpers/variables";

/**
 *
 * @param vars convo vars
 * @description get zoro3 zakat aamount based on user selection
 * @returns
 */

const NODE_ID = "NODE_378";
export function NODE_378(convo: BotkitConversation): string {
  bkQRAsk(
    convo,
    NODE_ID + ".title",
    (_temp, vars) => {
      const answers = [
        {
          title: translate(NODE_ID + ".opt1"),
          payload: NODE_ID + ".choice0",
          onChoose: async (answer, convo, bot, msg) => {
            convo.gotoThread("t_NODE_381");
          },
        },
        {
          title: translate(NODE_ID + ".opt2"),
          payload: NODE_ID + ".choice1",
          onChoose: async (answer, convo, bot, msg) => {
            if (vars.NODE_373 && vars.NODE_373 === "NODE_373.choice1") {
              convo.gotoThread("t_NODE_374_2");
            } else {
              convo.gotoThread("t_NODE_382");
            }
          },
        },
      ];

      return answers;
    },
    NODE_ID,
    {}
  );

  return `t_${NODE_ID}`;
}
