import { BotkitConversation } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";
import { translate } from "../../helpers";

const NODE_ID = "NODE_378";
export function NODE_378(convo: BotkitConversation): string {
  bkQRAsk(
    convo,
    NODE_ID + ".title",
    (_temps, vars) => {
      const answers = [
        {
          title: translate(NODE_ID + ".opt1"),
          payload: NODE_ID + ".choice0",
          onChoose: async (answer, convo, bot, msg) => {
            convo.gotoThread("t_NODE_381");
          },
        },
      ];

      if (vars.NODE_374) {
        answers.push({
          title: translate(NODE_ID + ".opt2"),
          payload: NODE_ID + ".choice1",
          onChoose: async (answer, convo, bot, msg) => {
            convo.gotoThread("t_NODE_382");
          },
        });
      } else {
        answers.push({
          title: translate(NODE_ID + ".opt3"),
          payload: NODE_ID + ".choice2",
          onChoose: async (answer, convo, bot, msg) => {
            convo.gotoThread("t_NODE_382");
          },
        });
      }

      return answers;
    },
    NODE_ID
  );

  return `t_${NODE_ID}`;
}
