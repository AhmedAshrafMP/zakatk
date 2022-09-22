import { translate } from "i18n-js";
import { BotkitConversation } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";
import { numberWithCommas, safeParseFloat } from "../../helpers/variables";

const NODE_ID = "NODE_382_5";
export function NODE_382_5(convo: BotkitConversation): string {
  bkQRAsk(
    convo,
    NODE_ID + ".title",
    [
      {
        title: NODE_ID + ".opt1",
        payload: NODE_ID + ".choice0",
        onChoose: async (answer, convo, bot, msg) => {
          convo.stop();
        },
      },
    ],
    NODE_ID,
    {},
    (_tmp, vars) => {
      const gafOldAnswers = vars.gafOldAnswers || "{}";
      let answerIs = "";
      let oldAnswersObj = JSON.parse(gafOldAnswers);
      if (oldAnswersObj) {
        Object.keys(oldAnswersObj).forEach((key) => {
          answerIs += `${key} : ${numberWithCommas(
            safeParseFloat(oldAnswersObj[key])
          )} كجم \n `;
        });
      }
      const oldAnswers = vars.oldAnswers || "{}";
      let answerIs1 = "";
      let oldAnswersObj1 = JSON.parse(oldAnswers);
      if (oldAnswersObj1) {
        Object.keys(oldAnswersObj1).forEach((key) => {
          answerIs1 += `${key} : ${numberWithCommas(
            safeParseFloat(oldAnswersObj1[key])
          )} كجم \n `;
        });
      }

      const qsztOldAnswers = vars.qsztOldAnswers || "{}";
      let answerIs2 = "";
      let oldAnswersObj2 = JSON.parse(qsztOldAnswers);
      if (oldAnswersObj2) {
        Object.keys(oldAnswersObj2).forEach((key) => {
          answerIs += `${key} : ${numberWithCommas(
            safeParseFloat(oldAnswersObj2[key])
          )} كجم \n `;
        });
      }

      const zaytonOldAnswers = vars.zaytonOldAnswers || "{}";
      let answerIs3 = "";
      let oldAnswersObj3 = JSON.parse(zaytonOldAnswers);
      if (oldAnswersObj3) {
        Object.keys(oldAnswersObj3).forEach((key) => {
          answerIs3 += `${key} : ${numberWithCommas(
            safeParseFloat(oldAnswersObj3[key])
          )} كجم \n `;
        });
      }

      const assalOldAnswers = vars.assalOldAnswers || "{}";
      let answerIs4 = "";
      let oldAnswersObj4 = JSON.parse(assalOldAnswers);
      if (oldAnswersObj4) {
        Object.keys(oldAnswersObj4).forEach((key) => {
          answerIs4 += `${key} : ${numberWithCommas(
            safeParseFloat(oldAnswersObj4[key])
          )} كجم \n `;
        });
      }

      return translate(NODE_ID + ".title", {
        gafZakat: answerIs,
        o5raZakat: answerIs1,
        qsztZakat: answerIs2,
        zaytonZakat: answerIs3,
        assalZakat: answerIs4,
      });
    }
  );

  return `t_${NODE_ID}`;
}
