import { BotkitConversation } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";
import { safeParseFloat } from "../../helpers/variables";

const NODE_ID = "NODE_382";

const qsztOldAnswers = new Object();
export function NODE_382(convo: BotkitConversation): string {
  bkQRAsk(
    convo,
    NODE_ID + ".title",
    [
      {
        title: NODE_ID + ".opt1",
        payload: NODE_ID + ".choice2",
        onChoose: async (answer, convo, bot, msg) => {
          let zakatRayah;
          if (
            convo.vars.NODE_377_1 &&
            convo.vars.NODE_377_1 === "NODE_377_1.choice0"
          ) {
            zakatRayah = 5;
          } else zakatRayah = 10;

          let inputValue;
          if (
            convo.vars.NODE_373 &&
            convo.vars.NODE_373 === "NODE_373.choice0"
          ) {
            inputValue = safeParseFloat(convo.vars.NODE_374_1_1);
            qsztOldAnswers[convo.vars.NODE_363_1] =
              (inputValue * zakatRayah) / 100;
            convo.setVar("qsztOldAnswers", JSON.stringify(qsztOldAnswers));
          } else {
            inputValue = safeParseFloat(convo.vars.NODE_374_2_1);
            qsztOldAnswers[convo.vars.NODE_363_1] =
              (inputValue * zakatRayah) / 100;
            convo.setVar("qsztOldAnswers", JSON.stringify(qsztOldAnswers));
          }
          convo.gotoThread("t_NODE_362");
        },
      },
      {
        title: NODE_ID + ".opt2",
        payload: NODE_ID + ".choice3",
        onChoose: async (answer, convo, bot, msg) => {
          let zakatRayah;
          if (
            convo.vars.NODE_377_1 &&
            convo.vars.NODE_377_1 === "NODE_377_1.choice0"
          ) {
            zakatRayah = 5;
          } else zakatRayah = 10;

          let inputValue;
          if (
            convo.vars.NODE_373 &&
            convo.vars.NODE_373 === "NODE_373.choice0"
          ) {
            inputValue = safeParseFloat(convo.vars.NODE_374_1_1);
            qsztOldAnswers[convo.vars.NODE_363_1] =
              (inputValue * zakatRayah) / 100;
            convo.setVar("qsztOldAnswers", JSON.stringify(qsztOldAnswers));
          } else {
            inputValue = safeParseFloat(convo.vars.NODE_374_2_1);
            qsztOldAnswers[convo.vars.NODE_363_1] =
              (inputValue * zakatRayah) / 100;
            convo.setVar("qsztOldAnswers", JSON.stringify(qsztOldAnswers));
          }
          convo.gotoThread("t_NODE_382_1");
        },
      },
    ],
    NODE_ID
  );

  return `t_${NODE_ID}`;
}
