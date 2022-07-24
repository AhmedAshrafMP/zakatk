import { translate } from "i18n-js";
import { BotkitConversation } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";
import { convertVarToCurrency } from "../../helpers";
import { getYearsDiff } from "../../helpers/dates/yearsdiff";
import { safeParseFloat } from "../../helpers/variables";

const NODE_ID = "NODE_083";

export function NODE_083(convo: BotkitConversation): string {
  bkQRAsk(
    convo,
    NODE_ID + ".title",

    [
      {
        title: NODE_ID + ".opt1",
        payload: NODE_ID + ".choice0",
        onChoose: async (answer, convo, bot, msg) => {},
      },
    ],
    NODE_ID,

    {},
    (_tmp, vars) => {
      const diff = getYearsDiff(
        vars.LAST_SHARES_DAY,
        vars.NO_OF_SHARESYEARS_LEFT
      );

      return translate(NODE_ID + ".title", {
        shareszakat: safeParseFloat(vars.companyShares) / 40,
        currency: convertVarToCurrency(vars.NODE_004),
        from: diff.from,
        to: diff.to,
      });
    }
  );

  return `t_${NODE_ID}`;
}
