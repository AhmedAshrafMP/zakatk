import { BotkitConversation } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";
import { convertVarToCurrency, translate } from "../../helpers";

const NODE_ID = "NODE_104_1";
export function NODE_104_1(convo: BotkitConversation): string {
  bkQRAsk(
    convo,
    NODE_ID + ".title",
    [
      {
        title: NODE_ID + ".opt1",
        payload: NODE_ID + ".choice0",
        onChoose: async (answer, convo, bot, msg) => {
          convo.gotoThread("t_NODE_095");
        },
      },
    ],
    NODE_ID,
    {},
    (_tmp, vars) => {
      let allZakatIacYears = vars.allZakatIacYears;
      const currency = convertVarToCurrency(vars.NODE_004);
      let answerIs = "";
      allZakatIacYears.forEach((key, value) => {
        answerIs += `${key} ${currency} ${value.from} الى ${value.to} \n`;
      });

      console.log(allZakatIacYears, "allZakatIacYears");

      return translate(NODE_ID + ".title", {
        iacZakatYears: answerIs,
      });
    }
  );

  return `t_${NODE_ID}`;
}
