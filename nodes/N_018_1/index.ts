import { BotkitConversation } from "botkit";
import moment from "moment";
import bkStrAsk from "../../bot_nodes/ask_str";

const NODE_ID = "NODE_018_1";
export default function NODE_018_1(convo: BotkitConversation): string {
  bkStrAsk(
    convo,
    `${NODE_ID}.hello`,
    async (answer, convo, bot, message) => {
      if (moment(answer).isValid()) {
        convo.setVar("LAST_ZAKAT_DAY", moment(answer).toISOString());
        const NoOfDays = moment()
          .startOf("D")
          .diff(moment(moment(answer)), "days");
        const NoOfYears = Math.floor(NoOfDays / 365);
        if (NoOfYears > 0) {
          convo.setVar("NO_OF_YEARS", NoOfYears);
          convo.gotoThread("t_d_023_071");
        } else {
          convo.gotoThread("t_d_055_056");
        }
      } else {
        convo.gotoThread(`t_${NODE_ID}`);
      }
    },
    NODE_ID,
    {
      contentType: "application/vnd.microsoft.card.calendar",
      content: {
        title: "CALENDER_UI",
        calendar_type: "HIJRI",
      },
    }
  );

  return `t_${NODE_ID}`;
}
