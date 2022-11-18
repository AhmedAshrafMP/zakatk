import { BotkitConversation } from "botkit";
import moment from "moment";
import bkQRAsk from "../../bot_nodes/ask_qr";

const NODE_ID = "NODE_392";
export default function NODE_392(convo: BotkitConversation): string {
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
            moment().subtract(364, "days").toISOString()
          );
          convo.setVar("ZAKAT_PERIOD_VALUES", {});
          return convo.gotoThread("t_d_397_406");
        },
      },
    ],
    NODE_ID
  );

  return `t_${NODE_ID}`;
}
