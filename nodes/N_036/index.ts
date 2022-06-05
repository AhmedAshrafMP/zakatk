import { BotkitConversation } from "botkit";
import bkStrAsk from "../../bot_nodes/ask_str";
import { translate } from "../../helpers";
import { getYearsDiff } from "../../helpers/dates/yearsdiff";
import { safeParseFloat } from "../../helpers/variables";
import { markOptionAsDone } from "../N_023";

const NODE_ID = "NODE_036";
export function NODE_036(convo: BotkitConversation): string {
  bkStrAsk(
    convo,
    NODE_ID + ".hello",
    async (answer, convo, bot, message) => {
      const nodeIntValue = safeParseFloat(answer);
      if (nodeIntValue >= 0) {
        convo.setVar(
          "totalDebit",
          safeParseFloat(convo.vars.totalDebit) + safeParseFloat(answer)
        );
        // clear each period

        if (convo.vars.NODE_039) {
          markOptionAsDone(convo);
          convo.gotoThread("t_NODE_040_1");
        } else {
          convo.gotoThread("t_NODE_035");
        }
      } else {
        convo.repeat();
      }
    },
    NODE_ID,
    {
      contentType: "application/vnd.microsoft.input",
      content: {
        validation: "",
        type: "money",
      },
    },
    (tmp, vars) => {
      const diff = getYearsDiff(vars.LAST_ZAKAT_DAY, vars.NO_OF_YEARS_LEFT);

      return translate(NODE_ID + ".hello", {
        to: diff.to,
      });
    }
  );
  return `t_${NODE_ID}`;
}
