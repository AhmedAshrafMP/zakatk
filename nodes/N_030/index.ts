import { BotkitConversation } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";
import { convertVarToCurrency, translate } from "../../helpers";
import { numberWithCommas, safeParseFloat } from "../../helpers/variables";
import { markOptionAsDone } from "../N_023";

const NODE_ID = "NODE_030";
export function NODE_030(convo: BotkitConversation): string {
  bkQRAsk(
    convo,
    NODE_ID + ".title",
    [
      {
        title: NODE_ID + ".opt1",
        payload: NODE_ID + ".choice0",
        onChoose: async (answer, convo, bot, msg) => {
          markOptionAsDone(convo);
          convo.gotoThread("t_NODE_040_1");
        },
      },
    ],
    NODE_ID,
    {},
    (tm, vars) => {
      const totalCurrency = safeParseFloat(vars.NODE_029 || 0);
      const totalSavings = safeParseFloat(vars.NODE_066 || 0);
      const totalRevSavings = safeParseFloat(vars.NODE_065 || 0);
      const totalStocks = safeParseFloat(vars.NODE_070 || vars.NODE_071 || 0);
      const currency = convertVarToCurrency(vars.NODE_004);
      let title = "";

      if (totalCurrency > 0) {
        title =
          title +
          translate(NODE_ID + ".title.one", {
            totalCurrency: numberWithCommas(totalCurrency),
            currency,
          });
      }
      if (totalSavings > 0) {
        title =
          title +
          translate(NODE_ID + ".title.two", {
            totalSavings: numberWithCommas(totalSavings),
            currency,
          });
      }
      if (totalRevSavings > 0) {
        title =
          title +
          translate(NODE_ID + ".title.four", {
            totalRevSavings: numberWithCommas(totalRevSavings),
            currency,
          });
      }

      if (totalStocks > 0) {
        title =
          title +
          translate(NODE_ID + ".title.three", {
            totalStocks: numberWithCommas(totalStocks),
            currency,
          });
      }

      return title;
    }
  );

  return `t_${NODE_ID}`;
}
