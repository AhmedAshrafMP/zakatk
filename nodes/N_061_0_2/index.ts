import { BotkitConversation } from "botkit";
import bkStrAsk from "../../bot_nodes/ask_str";
import { translate } from "../../helpers";
import { getYearsDiff } from "../../helpers/dates/yearsdiff";
import { safeParseFloat } from "../../helpers/variables";

const NODE_ID = "NODE_061_0_2";
export function NODE_061_0_2(convo: BotkitConversation): string {
  bkStrAsk(
    convo,
    NODE_ID + ".hello",
    async (answer, convo, bot, message) => {
      const inputValue = safeParseFloat(answer);
      if (inputValue >= 0) {
        convo.gotoThread("t_NODE_061_1");
      } else {
        convo.repeat()
      }
    },
    NODE_ID,
    {
      contentType: "application/vnd.microsoft.input",
      content: {
        validation: "*",
        type: "number",
      },
    },
    (tmp, vars) => {
      const diff = getYearsDiff(vars.LAST_ZAKAT_DAY, vars.NO_OF_YEARS_LEFT);
      return translate(NODE_ID + ".hello", {
        from: diff.from,
        to: diff.to,
      });
    }
  );
  return `t_${NODE_ID}`;
}
