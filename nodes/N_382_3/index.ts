import { translate } from "i18n-js";
import { BotkitConversation } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";
import { numberWithCommas, safeParseFloat } from "../../helpers/variables";

const NODE_ID = "NODE_382_3";
export function NODE_382_3(convo: BotkitConversation): string {
  bkQRAsk(
    convo,
    NODE_ID + ".title",
    [
      {
        title: NODE_ID + ".opt1",
        payload: NODE_ID + ".choice0",
        onChoose: async (answer, convo, bot, msg) => {
          convo.gotoThread("t_NODE_382_5");
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
      const oldAnswers = vars.oldAnswers || "{}";
      let answerIs = "";
      let oldAnswersObj = JSON.parse(oldAnswers);
      if (oldAnswersObj) {
        Object.keys(oldAnswersObj).forEach((key) => {
          answerIs += `${key} : ${numberWithCommas(
            safeParseFloat(oldAnswersObj[key])
          )} كجم \n `;
        });
      }

      return translate(NODE_ID + ".title", {
        finalNumbers: answerIs,
      });
    }
  );

  return `t_${NODE_ID}`;
}
