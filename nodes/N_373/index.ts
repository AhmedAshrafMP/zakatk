import { BotkitConversation } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";
import { translate } from "../../helpers";

const NODE_ID = "NODE_373";
export function NODE_373(convo: BotkitConversation): string {
  bkQRAsk(
    convo,
    NODE_ID + ".title",
    (_temp, vars) => {
      const answers = [
        {
          title: translate(NODE_ID + ".opt1"),
          payload: NODE_ID + ".choice0",
          onChoose: async (answer, convo, bot, msg) => {
            if (vars.NODE_363 && vars.NODE_363 === "NODE_363.choice0") {
              convo.gotoThread("t_NODE_374_1_1");
            }
            if (vars.NODE_366 && vars.NODE_366 === "NODE_366.choice0") {
              convo.gotoThread("t_NODE_374");
            }
            if (vars.NODE_364 && vars.NODE_364 === "NODE_364.choice0") {
              convo.gotoThread("t_NODE_374_1_4");
            }
          },
        },
        {
          title: translate(NODE_ID + ".opt2"),
          payload: NODE_ID + ".choice1",
          onChoose: async (answer, convo, bot, msg) => {
            if (vars.NODE_363 && vars.NODE_363 === "NODE_363.choice0") {
              convo.gotoThread("t_NODE_374_2_1");
            }
            if (vars.NODE_366 && vars.NODE_366 === "NODE_366.choice0") {
              convo.gotoThread("t_NODE_374_2");
            }
            if (vars.NODE_364 && vars.NODE_364 === "NODE_364.choice0") {
              convo.gotoThread("t_NODE_374_2_5");
            }
          },
        },
      ];

      return answers;
    },
    NODE_ID,
    {}
  );

  return `t_${NODE_ID}`;
}
