import { translate } from "i18n-js";
import { BotkitConversation } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";
import { convertVarToCurrency, convertVarToCurrencySym } from "../../helpers";
import { getYearsDiff } from "../../helpers/dates/yearsdiff";
import { numberWithCommas, safeParseFloat } from "../../helpers/variables";
import NODE_004 from "../N_004";

const NODE_ID = "NODE_083";

export function NODE_083(convo: BotkitConversation): string {
  bkQRAsk(
    convo,
    NODE_ID + ".title",

    [
      {
        title: NODE_ID + ".opt1",
        payload: NODE_ID + ".choice0",
        onChoose: async (answer, convo, bot, msg) => {
          convo.gotoThread("t_NODE_076");
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
      const companyShares = vars.companyShares;

      let answerIs = "";

      companyShares.forEach((key, value) => {
        answerIs += `${value} : ${numberWithCommas(
          safeParseFloat(key / 38.8)
        )}\n `;
      });

      const diff = getYearsDiff(
        vars.LAST_SHARES_DAY,
        vars.NO_OF_SHARESYEARS_LEFT
      );

      return translate(NODE_ID + ".title", {
        shareszakat: answerIs,
        currency: convertVarToCurrencySym(vars.NODE_004),
      });
    }
  );

  return `t_${NODE_ID}`;
}
