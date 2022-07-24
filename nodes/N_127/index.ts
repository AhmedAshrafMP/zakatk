import { BotkitConversation } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";
import { convertVarToCurrency, translate } from "../../helpers";
import { getYearsDiff } from "../../helpers/dates/yearsdiff";
import { safeParseFloat } from "../../helpers/variables";

const NODE_ID = "NODE_127";
export function NODE_127(convo: BotkitConversation): string {
  bkQRAsk(
    convo,
    NODE_ID + ".title",
    [
      {
        title: NODE_ID + ".opt1",
        payload: NODE_ID + ".choice0",
        onChoose: async (answer, convo, bot, msg) => {
          convo.gotoThread("t_NODE_116");
        },
      },
      {
        title: NODE_ID + ".opt2",
        payload: NODE_ID + ".choice1",
        onChoose: async (answer, convo, bot, msg) => {
          convo.gotoThread("t_NODE_109");
        },
      },
      {
        title: NODE_ID + ".opt3",
        payload: NODE_ID + ".choice2",
        onChoose: async (answer, convo, bot, msg) => {
          convo.stop();
        },
      },
    ],
    NODE_ID,
    {},
    (_tmp, vars) => {
      const diff = getYearsDiff(vars.LAST_IAC_DAY, vars.NO_OF_IAC_LEFT);
      const NODE_127_1 = safeParseFloat(vars.NODE_127_1) / 100;

      const icaZakat = safeParseFloat(vars.iacZakat);

      console.log(icaZakat, "icaZakat");
      console.log(NODE_127_1, "NODE_127_1");
      return translate(NODE_ID + ".title", {
        iacZakat: (icaZakat * NODE_127_1) / 40,
        currency: convertVarToCurrency(vars.NODE_004),
        from: diff.from,
        to: diff.to,
      });
    }
  );

  return `t_${NODE_ID}`;
}
