import { BotkitConversation } from "botkit";
import bkStrAsk from "../../bot_nodes/ask_str";
import { safeParseFloat } from "../../helpers/variables";

const NODE_ID = "NODE_352";
export function NODE_352(convo: BotkitConversation): string {
  bkStrAsk(
    convo,
    NODE_ID + ".hello",
    async (answer, convo, bot, message) => {
      const NODE_349 = safeParseFloat(convo.vars.NODE_349);
      const NODE_350 = safeParseFloat(convo.vars.NODE_350);
      const NODE_350_1 = safeParseFloat(convo.vars.NODE_350_1);
      const NODE_351 = safeParseFloat(convo.vars.NODE_351);
      const NODE_352 = safeParseFloat(answer);
      const zakatSas1 =
        NODE_349 + NODE_350 + NODE_352 - (NODE_351 + NODE_350_1);

      if (zakatSas1 >= safeParseFloat(convo.vars.gold_prices.sTheshold)) {
        convo.setVar("zakatSas1", zakatSas1);
        convo.gotoThread("t_NODE_358");
      } else {
        convo.gotoThread("t_NODE_354");
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
