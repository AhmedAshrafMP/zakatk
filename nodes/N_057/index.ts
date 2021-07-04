import { BotkitConversation } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";
import { translate } from "../../helpers";
import { safeParseFloat } from "../../helpers/variables";

const NODE_ID = "NODE_057";
export function NODE_057(convo: BotkitConversation): string {
  bkQRAsk(
    convo,
    NODE_ID + ".title",
    [
      {
        title: NODE_ID + ".opt1",
        payload: NODE_ID + ".choice0",
        onChoose: async (answer, convo, bot, msg) => {
          convo.setVar(
            "totalGold",
            safeParseFloat(`${convo.vars.NODE_056_1}`) * 8 +
              safeParseFloat(convo.vars.NODE_056_2) +
              safeParseFloat(convo.vars.NODE_061)
          );
          convo.setVar(
            "totalSilver",
            safeParseFloat(`${convo.vars.NODE_056_3}`) * 8 +
              safeParseFloat(convo.vars.NODE_056_4) +
              safeParseFloat(convo.vars.NODE_061_1)
          );
          convo.gotoThread("t_NODE_040_1");
        },
      },
    ],
    NODE_ID,
    {},
    (tmp, vars) => {
      return translate(NODE_ID + ".title", {
        totalGold:
          safeParseFloat(`${vars.NODE_056_1}`) * 8 +
          safeParseFloat(vars.NODE_056_2) +
          safeParseFloat(vars.NODE_061),
        totalSilver:
          safeParseFloat(`${vars.NODE_056_3}`) * 8 +
          safeParseFloat(vars.NODE_056_4) +
          safeParseFloat(vars.NODE_061_1),
      });
    }
  );

  return `t_${NODE_ID}`;
}
