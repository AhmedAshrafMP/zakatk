import { BotkitConversation } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";
import { safeParseFloat } from "../../helpers/variables";

const zaytonOldAnswers = new Object();
const NODE_ID = "NODE_381";
export function NODE_381(convo: BotkitConversation): string {
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
            convo.vars.NODE_377 &&
            convo.vars.NODE_377 === "NODE_377.choice0"
          ) {
            zakatRayah = 5;
          } else zakatRayah = 10;

          let inputValue;
          if (
            convo.vars.NODE_373 &&
            convo.vars.NODE_373 === "NODE_373.choice0"
          ) {
            inputValue = safeParseFloat(convo.vars.NODE_374);
            zaytonOldAnswers[`الزيتون`] = (inputValue * zakatRayah) / 100;
            convo.setVar("zaytonOldAnswers", JSON.stringify(zaytonOldAnswers));
          } else {
            inputValue = safeParseFloat(convo.vars.NODE_374_2);
            zaytonOldAnswers[`الزيتون `] = (inputValue * zakatRayah) / 100;
            convo.setVar("zaytonOldAnswers", JSON.stringify(zaytonOldAnswers));
          }
          convo.gotoThread("t_NODE_362");
        },
      },
      {
        title: NODE_ID + ".opt2",
        payload: NODE_ID + ".choice1",
        onChoose: async (answer, convo, bot, msg) => {
          let zakatRayah;
          if (
            convo.vars.NODE_377 &&
            convo.vars.NODE_377 === "NODE_377.choice0"
          ) {
            zakatRayah = 5;
          } else zakatRayah = 10;

          let inputValue;
          if (
            convo.vars.NODE_373 &&
            convo.vars.NODE_373 === "NODE_373.choice0"
          ) {
            inputValue = safeParseFloat(convo.vars.NODE_374);
            zaytonOldAnswers[`الزيتون`] = (inputValue * zakatRayah) / 100;
            convo.setVar("zaytonOldAnswers", JSON.stringify(zaytonOldAnswers));
          } else {
            inputValue = safeParseFloat(convo.vars.NODE_374_2);
            zaytonOldAnswers[`الزيتون`] = (inputValue * zakatRayah) / 100;
            convo.setVar("zaytonOldAnswers", JSON.stringify(zaytonOldAnswers));
          }
          convo.gotoThread("t_NODE_382_6");
        },
      },
    ],
    NODE_ID
  );

  return `t_${NODE_ID}`;
}
