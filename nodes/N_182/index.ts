import { translate } from "i18n-js";
import { BotkitConversation } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";
import { numberWithCommas, safeParseFloat } from "../../helpers/variables";
import { convertVarToCurrency } from "../../helpers";
import { buildingsZakat } from "../N_171";

const NODE_ID = "NODE_182";
export function NODE_182(convo: BotkitConversation): string {
  bkQRAsk(
    convo,
    NODE_ID + ".title",
    [
      {
        title: NODE_ID + ".opt1",
        payload: NODE_ID + ".choice0",
        onChoose: async (answer, convo, bot, msg) => {
          convo.gotoThread("t_NODE_157_1");
        },
      },
      {
        title: NODE_ID + ".opt2",
        payload: NODE_ID + ".choice1",
        onChoose: async (answer, convo, bot, msg) => {
          convo.gotoThread("t_NODE_182_1");
        },
      },
    ],
    NODE_ID,
    {},
    (_tmp, vars) => {
      const currency = convertVarToCurrency(vars.NODE_004);
      let buildings = "";
      buildingsZakat.forEach((key, value) => {
        buildings = `${value} : ${numberWithCommas(
          safeParseFloat(key)
        )} ${currency}\n`;
      });
      return translate(NODE_ID + ".title", {
        buildingsOneTime: buildings,
      });
    }
  );

  return `t_${NODE_ID}`;
}
