import { BotkitConversation } from "botkit";
import bkStrAsk from "../../bot_nodes/ask_str";
import { safeParseFloat } from "../../helpers/variables";

const NODE_ID = "NODE_374_1_4";

export function NODE_374_1_4(convo: BotkitConversation): string {
  bkStrAsk(
    convo,
    NODE_ID + ".hello",

    async (answer, convo, bot, message) => {
      const inputValue = safeParseFloat(answer);

      if (inputValue && inputValue >= 612.5) {
        {
          convo.gotoThread("t_NODE_382_4_1");
        }
      } else {
        convo.gotoThread("t_NODE_365");
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

// if (
//   inputValue &&
//   inputValue >= safeParseFloat(convo.vars.gold_prices.gThreshold)
// )
