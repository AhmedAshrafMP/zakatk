import { translate } from "i18n-js";
import { BotkitConversation } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";
import { convertVarToCurrency } from "../../helpers";
import { safeParseFloat } from "../../helpers/variables";

const NODE_ID = "NODE_176";

export function NODE_176(convo: BotkitConversation): string {
  bkQRAsk(
    convo,
    NODE_ID + ".title",

    [
      {
        title: NODE_ID + ".opt1",
        payload: NODE_ID + ".choice0",
        onChoose: async (answer, convo, bot, msg) => {
          convo.gotoThread("t_NODE_169");
        },
      },
      {
        title: NODE_ID + ".opt2",
        payload: NODE_ID + ".choice1",
        onChoose: async (answer, convo, bot, msg) => {
          convo.gotoThread("t_NODE_157_1");
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
      const buildingsZakat = safeParseFloat(vars.buildingsZakat);
      return translate(NODE_ID + ".title", {
        buildingsZakat: buildingsZakat / 40,
        currency: convertVarToCurrency(vars.NODE_004),
        fromYear: vars.NO_OF_BUILDINGSYEARS_LEFT,
        fromDay: vars.LAST_BUILDINGS_DAY,
      });
    }
  );

  return `t_${NODE_ID}`;
}
