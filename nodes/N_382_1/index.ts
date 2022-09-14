import { toPercentage, translate } from "i18n-js";
import { BotkitConversation } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";
import { safeParseFloat } from "../../helpers/variables";

const NODE_ID = "NODE_382_1";
export function NODE_382_1(convo: BotkitConversation): string {
  bkQRAsk(
    convo,
    NODE_ID + ".title",
    [
      {
        title: NODE_ID + ".opt1",
        payload: NODE_ID + ".choice0",
        onChoose: async (answer, convo, bot, msg) => {
          convo.gotoThread("t_NODE_363_1");
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
      const qam7 = vars.zakatZoro3CalcQam7;
      const sha3er = vars.zakatZoro3CalcSha3er;
      const zabeb = vars.zakatZoro3CalcZabeb;
      const tamr = vars.zakatZoro3CalcTamr;

      return translate(NODE_ID + ".title", {
        qam7: qam7 ? safeParseFloat(qam7) : "",
        sha3er: sha3er ? safeParseFloat(sha3er) : "",
        zabeb: zabeb ? safeParseFloat(zabeb) : "",
        tamr: tamr ? safeParseFloat(tamr) : "",
      });
    }
  );

  return `t_${NODE_ID}`;
}
