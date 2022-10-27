import { translate } from "i18n-js";
import { BotkitConversation } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";
import { convertVarToCurrency } from "../../helpers";

const NODE_ID = "NODE_165";
export function NODE_165(convo: BotkitConversation): string {
  bkQRAsk(
    convo,
    NODE_ID + ".title",
    [
      {
        title: NODE_ID + ".opt1",
        payload: NODE_ID + ".choice0",
        onChoose: async (answer, convo, bot, msg) => {
          convo.gotoThread("t_NODE_157_1");
        },
      },
      {
        title: NODE_ID + ".opt2",
        payload: NODE_ID + ".choice1",
        onChoose: async (answer, convo, bot, msg) => {
          convo.stop();
        },
      },
    ],
    NODE_ID,
    {},
    (_tmp, vars) => {
      let allBuildingsZakat = vars.allBuildingsZakat;
      const currency = convertVarToCurrency(vars.NODE_004);
      let answerIs = "";
      allBuildingsZakat.forEach((key, value) => {
        answerIs += `${value.from} الى ${value.to} ${key} ${currency}\n`;
      });

      return translate(NODE_ID + ".title", {
        buildings: answerIs,
      });
    }
  );

  return `t_${NODE_ID}`;
}
