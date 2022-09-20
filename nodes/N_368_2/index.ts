import { translate } from "i18n-js";
import { BotkitConversation } from "botkit";
import bkStrAsk from "../../bot_nodes/ask_str";
import { convertVarToCurrency } from "../../helpers";
import { safeParseFloat } from "../../helpers/variables";

const oldAnswers = new Object();

const NODE_ID = "NODE_368_2";
export function NODE_368_2(convo: BotkitConversation): string {
  bkStrAsk(
    convo,
    NODE_ID + ".hello",
    async (answer, convo, bot, message) => {
      let zakatRayah;

      if (
        convo.vars.NODE_368_3 &&
        convo.vars.NODE_368_3 === "NODE_368_3.choice0"
      ) {
        zakatRayah = 5;
      } else zakatRayah = 10;

      const o5raZakatAnswer = (safeParseFloat(answer) * zakatRayah) / 100;

      oldAnswers[convo.vars.NODE_368_1] = o5raZakatAnswer / 40;
      convo.setVar("oldAnswers", JSON.stringify(oldAnswers));

      convo.gotoThread("t_NODE_382_2");
    },
    NODE_ID,
    {
      contentType: "application/vnd.microsoft.input",
      content: {
        validation: "*",
        type: "money",
      },
    },
    (_tmp, vars) => {
      return translate(NODE_ID + ".hello", {
        currency: convertVarToCurrency(vars.NODE_004),
      });
    }
  );
  return `t_${NODE_ID}`;
}
