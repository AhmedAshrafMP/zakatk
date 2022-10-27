import { translate } from "i18n-js";
import { BotkitConversation } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";
import { convertVarToCurrency } from "../../helpers";
import { numberWithCommas, safeParseFloat } from "../../helpers/variables";
import { buildingsZakat } from "../N_171";

const NODE_ID = "NODE_182_1";
export function NODE_182_1(convo: BotkitConversation): string {
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
          convo.stop();
        },
      },
    ],
    NODE_ID,
    {},
    (_tmp, vars) => {
      const currency = convertVarToCurrency(vars.NODE_004);
      let buildings = "";
      buildingsZakat.forEach((key, value) => {
        buildings += `${value} : ${numberWithCommas(
          safeParseFloat(key)
        )} ${currency}\n`;
      });
      return translate(NODE_ID + ".title", {
        buildingsOneTime1: buildings,
      });
    }
  );

  return `t_${NODE_ID}`;
}
