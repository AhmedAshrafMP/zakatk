import { BotkitConversation } from "botkit";
import moment from "moment";
import bkQRAsk from "../../bot_nodes/ask_qr";
import { translate } from "../../helpers";
import { getYearsDiff } from "../../helpers/dates/yearsdiff";

const NODE_ID = "NODE_023";
export function NODE_023(convo: BotkitConversation): string {
  bkQRAsk(
    convo,
    NODE_ID + ".title",
    [
      {
        title: NODE_ID + ".opt1",
        payload: NODE_ID + ".choice0",
        onChoose: async (answer, convo, bot, msg) => {},
      },
      {
        title: NODE_ID + ".opt2",
        payload: NODE_ID + ".choice1",
        onChoose: async (answer, convo, bot, msg) => {},
      },
      {
        title: NODE_ID + ".opt3",
        payload: NODE_ID + ".choice2",
        onChoose: async (answer, convo, bot, msg) => {
          convo.gotoThread("t_NODE_029");
        },
      },
      {
        title: NODE_ID + ".opt4",
        payload: NODE_ID + ".choice3",
        onChoose: async (answer, convo, bot, msg) => {},
      },
      {
        title: NODE_ID + ".opt5",
        payload: NODE_ID + ".choice4",
        onChoose: async (answer, convo, bot, msg) => {},
      },
      {
        title: NODE_ID + ".opt6",
        payload: NODE_ID + ".choice5",
        onChoose: async (answer, convo, bot, msg) => {
          convo.gotoThread("t_NODE_023_1");
        },
      },
    ],
    NODE_ID,
    {},
    (tmp, vars) => {
      const diff = getYearsDiff(vars.LAST_ZAKAT_DAY, vars.NO_OF_YEARS_LEFT);

      return translate(NODE_ID + ".title", {
        from: diff.from,
        to: diff.to,
      });
    }
  );

  return `t_${NODE_ID}`;
}
