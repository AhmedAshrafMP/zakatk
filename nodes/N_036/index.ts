import { BotkitConversation } from "botkit";
import bkStrAsk from "../../bot_nodes/ask_str";
import { translate } from "../../helpers";
import { getYearsDiff } from "../../helpers/dates/yearsdiff";

const NODE_ID = "NODE_036";
export function NODE_036(convo: BotkitConversation): string {
  bkStrAsk(
    convo,
    NODE_ID + ".hello",
    async (answer, convo, bot, message) => {
      const nodeIntValue = parseFloat(answer);
      if (nodeIntValue && nodeIntValue > 0) {
        convo.setVar("totalDebit", parseFloat(answer));
        convo.gotoThread("t_NODE_037");
      } else {
        convo.repeat();
      }
    },
    NODE_ID,
    {
      contentType: "application/vnd.microsoft.input",
      content: {
        validation: "",
        type: "number",
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
