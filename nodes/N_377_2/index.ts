import { BotkitConversation } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";
import { safeParseFloat } from "../../helpers/variables";

const assalOldAnswers = new Object();
const NODE_ID = "NODE_377_2";
export function NODE_377_2(convo: BotkitConversation): string {
  bkQRAsk(
    convo,
    NODE_ID + ".title",
    [
      {
        title: NODE_ID + ".opt1",
        payload: NODE_ID + ".choice0",
        onChoose: async (answer, convo, bot, msg) => {
          let inputValue;
          if (
            convo.vars.NODE_370 &&
            convo.vars.NODE_370 === "NODE_370.choice0"
          ) {
            inputValue = safeParseFloat(convo.vars.NODE_374_2_3);
            assalOldAnswers[`العسل الجبلي `] = inputValue * 0.1;
            convo.setVar("assalOldAnswers", JSON.stringify(assalOldAnswers));
          } else {
            inputValue = safeParseFloat(convo.vars.NODE_374_2_2);
            assalOldAnswers[`عسل المزارع`] = inputValue * 0.1;
            convo.setVar("assalOldAnswers", JSON.stringify(assalOldAnswers));
          }
          convo.gotoThread("t_NODE_362");
        },
      },
      {
        title: NODE_ID + ".opt2",
        payload: NODE_ID + ".choice1",
        onChoose: async (answer, convo, bot, msg) => {
          let inputValue;
          if (
            convo.vars.NODE_370 &&
            convo.vars.NODE_370 === "NODE_370.choice0"
          ) {
            inputValue = safeParseFloat(convo.vars.NODE_374_2_3);
            assalOldAnswers[`العسل الجبلي `] = inputValue * 0.1;
            convo.setVar("assalOldAnswers", JSON.stringify(assalOldAnswers));
          } else {
            inputValue = safeParseFloat(convo.vars.NODE_374_2_2);
            assalOldAnswers[`عسل المزارع`] = inputValue * 0.1;
            convo.setVar("assalOldAnswers", JSON.stringify(assalOldAnswers));
          }
          convo.gotoThread("t_NODE_377_3");
        },
      },
    ],
    NODE_ID
  );

  return `t_${NODE_ID}`;
}
