import { BotkitConversation } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";
import { convertVarToCurrency, translate } from "../../helpers";
import { safeParseFloat } from "../../helpers/variables";

const NODE_ID = "NODE_418";
export function NODE_418(convo: BotkitConversation): string {
  bkQRAsk(
    convo,
    NODE_ID + ".title",
    [
      {
        title: NODE_ID + ".opt1",
        payload: NODE_ID + ".choice0",
        onChoose: async (answer, convo, bot, msg) => {
          convo.gotoThread("t_NODE_410");
        },
      },
      {
        title: NODE_ID + ".opt2",
        payload: NODE_ID + ".choice1",
        onChoose: async (answer, convo, bot, msg) => {
          convo.gotoThread("t_NODE_410");
        },
      },
    ],
    NODE_ID,
    {},
    (_tmp, vars) => {
      const rekazzakat =
        (safeParseFloat(vars.NODE_411) - safeParseFloat(vars.NODE_412)) / 38.8;
      return translate(NODE_ID + ".title", {
        rekazzakat,
        currency: convertVarToCurrency(vars.NODE_004),
      });
    }
  );

  return `t_${NODE_ID}`;
}
