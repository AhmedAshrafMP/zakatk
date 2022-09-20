import { BotkitConversation } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";
import { safeParseFloat } from "../../helpers/variables";

const gafOldAnswers = new Object();
const NODE_ID = "NODE_382_4_1";

export function NODE_382_4_1(convo: BotkitConversation): string {
  bkQRAsk(
    convo,
    NODE_ID + ".title",
    [
      {
        title: NODE_ID + ".opt1",
        payload: NODE_ID + ".choice0",
        onChoose: async (answer, convo, bot, msg) => {
          let zakatRayah;
          if (
            convo.vars.NODE_364_2 &&
            convo.vars.NODE_364_2 === "NODE_364_2.choice0"
          ) {
            zakatRayah = 5;
          } else zakatRayah = 10;

          let inputValue;
          if (convo.vars.NODE_374_1_4 && convo.vars.NODE_374_1_4 > 1) {
            inputValue = safeParseFloat(convo.vars.NODE_374_1_4);
            gafOldAnswers[convo.vars.NODE_364_1] =
              (inputValue * zakatRayah) / 100;
            convo.setVar("gafOldAnswers", JSON.stringify(gafOldAnswers));
          } else {
            inputValue = safeParseFloat(convo.vars.NODE_374_2_5);
            gafOldAnswers[convo.vars.NODE_364_1] =
              (inputValue * zakatRayah) / 100;
            convo.setVar("gafOldAnswers", JSON.stringify(gafOldAnswers));
          }
          console.log("[inputValue]", inputValue);
          convo.gotoThread("t_NODE_364_1");
        },
      },
      {
        title: NODE_ID + ".opt2",
        payload: NODE_ID + ".choice1",
        onChoose: async (answer, convo, bot, msg) => {
          convo.stop();
        },
      },
      {
        title: NODE_ID + ".opt3",
        payload: NODE_ID + ".choice2",
        onChoose: async (answer, convo, bot, msg) => {
          let zakatRayah;
          if (
            convo.vars.NODE_364_2 &&
            convo.vars.NODE_364_2 === "NODE_364_2.choice0"
          ) {
            zakatRayah = 5;
          } else zakatRayah = 10;

          let inputValue;
          if (convo.vars.NODE_374_1_4 && convo.vars.NODE_374_1_4 > 1) {
            inputValue = safeParseFloat(convo.vars.NODE_374_1_4);
            gafOldAnswers[convo.vars.NODE_364_1] =
              (inputValue * zakatRayah) / 100;
            convo.setVar("gafOldAnswers", JSON.stringify(gafOldAnswers));
          } else {
            inputValue = safeParseFloat(convo.vars.NODE_374_2_5);
            gafOldAnswers[convo.vars.NODE_364_1] =
              (inputValue * zakatRayah) / 100;
            convo.setVar("gafOldAnswers", JSON.stringify(gafOldAnswers));
          }
          console.log("[inputValue]", inputValue);
          convo.gotoThread("t_NODE_382_4");
        },
      },
    ],
    NODE_ID
  );

  return `t_${NODE_ID}`;
}
