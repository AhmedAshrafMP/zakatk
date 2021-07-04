import { BotkitConversation } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";
import { convertVarToCurrency, translate } from "../../helpers";
import { getYearsDiff } from "../../helpers/dates/yearsdiff";
import { contiuneOrRepeatDialogue } from "../../helpers/dialogue";
import { numberWithCommas } from "../../helpers/variables";
import { getZakatForThisYear } from "../N_040_1";

const NODE_ID = "NODE_043";
export function NODE_043(convo: BotkitConversation): string {
  bkQRAsk(
    convo,
    NODE_ID + ".title",
    (_tmp, vars) => {
      return contiuneOrRepeatDialogue(vars, NODE_ID + ".opt1", "t_d_000_009");
    },
    NODE_ID,
    {},
    (_tmp, vars) => {
      const diff = getYearsDiff(vars.LAST_ZAKAT_DAY, vars.NO_OF_YEARS_LEFT);
      const calculatedZakat = getZakatForThisYear(vars);
      const paperZakat =
        calculatedZakat.money +
        calculatedZakat.savings +
        calculatedZakat.stocks;
      const goldZakat = calculatedZakat.gold_money;
      const silverZakat = calculatedZakat.silver_money;

      return translate(NODE_ID + ".title", {
        from: diff.from,
        to: diff.to,
        goldZakat: numberWithCommas(Math.round(goldZakat / 40)),
        silverZakat: numberWithCommas(Math.round(silverZakat / 40)),
        moneyZakat: numberWithCommas(Math.round(paperZakat / 40)),
        totalZakat: numberWithCommas(
          Math.round(goldZakat + silverZakat + paperZakat / 40)
        ),
        currency: convertVarToCurrency(vars.NODE_004),
      });
    }
  );

  return `t_${NODE_ID}`;
}
