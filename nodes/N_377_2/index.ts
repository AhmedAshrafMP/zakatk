import { BotkitConversation } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";
import { translate } from "../../helpers";

const NODE_ID = "NODE_377_2";
export function NODE_377_2(convo: BotkitConversation): string {
  bkQRAsk(
    convo,
    NODE_ID + ".title",
    (_temp, vars) => {
      const answers = [
        {
          title: translate(NODE_ID + ".opt1"),
          payload: NODE_ID + ".choice0",
          onChoose: async (answer, convo, bot, msg) => {
            if (
              vars.NODE_373 &&
              vars.NODE_373 === "NODE_373.choice1" &&
              vars.NODE_368 &&
              vars.NODE_368 === "NODE_368.choice0"
            ) {
              console.log("HELLO THERE");
              convo.gotoThread("t_NODE_374_2");
            } else {
              convo.gotoThread("t_NODE_382");
            }
          },
        },
        {
          title: translate(NODE_ID + ".opt2"),
          payload: NODE_ID + ".choice1",
          onChoose: async (answer, convo, bot, msg) => {
            if (
              vars.NODE_373 &&
              vars.NODE_373 === "NODE_373.choice1" &&
              vars.NODE_368 &&
              vars.NODE_368 === "NODE_368.choice0"
            ) {
              convo.gotoThread("t_NODE_374_2");
            } else {
              convo.gotoThread("t_NODE_382");
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
