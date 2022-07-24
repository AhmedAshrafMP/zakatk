import { BotkitConversation } from "botkit";
import moment from "moment";
import bkStrAsk from "../../bot_nodes/ask_str";

const NODE_ID = "NODE_345";
export default function NODE_345(convo: BotkitConversation): string {
  bkStrAsk(
    convo,
    `${NODE_ID}.hello`,
    async (answer, convo, bot, message) => {
      if (moment(answer).isValid()) {
        convo.setVar(
          "LAST_SASZAKAT1_DAY",
          moment(answer).add(1, "days").toISOString()
        );
        const NoOfDays = moment()
          .startOf("D")
          .diff(moment(moment(answer)), "days");
        const NoOfYears = Math.floor(NoOfDays / 365);
        if (NoOfYears > 0) {
          convo.setVar("NO_OF_YEARS_SASZAKAT1_LEFT", NoOfYears);
          convo.gotoThread("t_NODE_349");
        } else {
          convo.gotoThread("t_NODE_222");
        }
      } else {
        convo.gotoThread(`t_${NODE_ID}`);
      }
    },
    NODE_ID,
    {
      contentType: "application/vnd.microsoft.card.calendar",
      content: {
        type: "calendar",
        calendar_type: "GEORGIAN",
      },
    }
  );

  return `t_${NODE_ID}`;
}
