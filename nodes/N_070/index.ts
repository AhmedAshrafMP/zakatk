import { BotkitConversation } from "botkit";
import bkStrAsk from "../../bot_nodes/ask_str";
import { translate } from "../../helpers";
import { getYearsDiff } from "../../helpers/dates/yearsdiff";
import { markOptionAsDone } from "../N_023";

const NODE_ID = "NODE_070";
export function NODE_070(convo: BotkitConversation): string {
  bkStrAsk(
    convo,
    NODE_ID + ".hello",
    async (answer, convo, bot, message) => {
      const inputValue = parseFloat(answer);
      if (inputValue > 0) {
        markOptionAsDone(convo);
        convo.gotoThread("t_NODE_030");
      } else {
        convo.gotoThread("t_NODE_070");
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
