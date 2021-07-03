import { BotkitConversation } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";
import { convertVarToCurrency, translate } from "../../helpers";
import { getYearsDiff } from "../../helpers/dates/yearsdiff";
import { contiuneOrRepeatDialogue } from "../../helpers/dialogue";
import { getZakatForThisYear } from "../N_040_1";

const NODE_ID = "NODE_049";
export function NODE_049(convo: BotkitConversation): string {
  bkQRAsk(
    convo,
    NODE_ID + ".title",
    (_tmp, vars) => {
      return contiuneOrRepeatDialogue(vars, NODE_ID + ".opt2", "t_d_000_009");
    },
    NODE_ID,
    {},
    (_tmp, vars) => {
      const diff = getYearsDiff(vars.LAST_ZAKAT_DAY, vars.NO_OF_YEARS_LEFT);

      return translate(NODE_ID + ".title", {
        from: diff.from,
        to: diff.to,
      });
    }
  );

  return `t_${NODE_ID}`;
}
