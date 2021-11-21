import { BotkitConversation } from "botkit";
import moment from "moment";
import bkQRAsk from "../../bot_nodes/ask_qr";

const NODE_ID = "NODE_017";
export default function NODE_017(convo: BotkitConversation): string {
  bkQRAsk(
    convo,
    NODE_ID + ".title",
    [
      {
        title: `${NODE_ID + ".opt1"}`,
        payload: NODE_ID + ".choice0",
        onChoose: async (answer, convo, bot, msg) => {
          convo.setVar(
            "LAST_ZAKAT_DAY",
            moment().subtract(366, "days").toISOString()
          );
          const NoOfDays = moment()
            .startOf("D")
            .diff(moment(moment().subtract(366, "days")), "days");
          const NoOfYears = Math.floor(NoOfDays / 365);
          if (NoOfYears > 0) {
            convo.setVar("NO_OF_YEARS_LEFT", NoOfYears);
            convo.gotoThread("t_d_023_071");
          }
        },
      },
    ],
    NODE_ID
  );

  return `t_${NODE_ID}`;
}
