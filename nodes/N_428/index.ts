import { BotkitConversation } from "botkit";
import bkStrAsk from "../../bot_nodes/ask_str";
import { safeParseFloat } from "../../helpers/variables";

const NODE_ID = "NODE_428";
export function NODE_428(convo: BotkitConversation): string {
  bkStrAsk(
    convo,
    NODE_ID + ".hello",
    async (answer, convo, bot, message) => {
      const inputValue = safeParseFloat(answer);
      if (inputValue >= 0) {
        if (convo.vars.NODE_413 && convo.vars.NODE_413 === "NODE_413.choice0") {
          if (inputValue >= convo.vars.gold_prices.gThreshold) {
            convo.gotoThread("t_NODE_439");
          } else {
            //TODO:connect layes 3lek zakah
            convo.stop();
          }
        }
        if (convo.vars.NODE_413 && convo.vars.NODE_413 === "NODE_413.choice1") {
          if (inputValue >= convo.vars.gold_prices.sThreshold) {
            convo.gotoThread("t_NODE_439");
          } else {
            //TODO:connect layes 3lek zakah
            convo.stop();
          }
        }
      } else {
        convo.repeat();
      }
    },
    NODE_ID,
    {
      contentType: "application/vnd.microsoft.input",
      content: {
        validation: "*",
        type: "money",
      },
    }
  );
  return `t_${NODE_ID}`;
}
