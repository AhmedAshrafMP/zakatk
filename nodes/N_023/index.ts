import { BotkitConversation, BotkitDialogWrapper } from "botkit";
import moment from "moment";
import bkQRAsk from "../../bot_nodes/ask_qr";
import { translate } from "../../helpers";
import { getYearsDiff } from "../../helpers/dates/yearsdiff";

const NODE_ID = "NODE_023";
export function NODE_023(convo: BotkitConversation): string {
  // clear each period

  bkQRAsk(
    convo,
    NODE_ID + ".title",
    (tmp, vars) => {
      const quickReplies: any[] = [];

      const doneOptions: string[] = vars.doneMoneyOptions || [];
      if (doneOptions.indexOf(NODE_ID + ".choice0") < 0) {
        quickReplies.push({
          title: translate(NODE_ID + ".opt1"),
          payload: NODE_ID + ".choice0",
          onChoose: async (answer, convo, bot, msg) => {
            convo.gotoThread("t_NODE_029");
          },
        });
      }

      if (doneOptions.indexOf(NODE_ID + ".choice6") < 0) {
        quickReplies.push({
          title: translate(NODE_ID + ".opt7"),
          payload: NODE_ID + ".choice6",
          onChoose: async (answer, convo, bot, msg) => {
            convo.gotoThread("t_NODE_031");
          },
        });
      }

      if (doneOptions.indexOf(NODE_ID + ".choice1") < 0) {
        quickReplies.push({
          title: translate(NODE_ID + ".opt2"),
          payload: NODE_ID + ".choice1",
          onChoose: async (answer, convo, bot, msg) => {
            convo.gotoThread("t_NODE_062");
          },
        });
      }
      if (doneOptions.indexOf(NODE_ID + ".choice2") < 0) {
        quickReplies.push({
          title: translate(NODE_ID + ".opt3"),
          payload: NODE_ID + ".choice2",
          onChoose: async (answer, convo, bot, msg) => {
            convo.gotoThread("t_NODE_067");
          },
        });
      }
      if (doneOptions.indexOf(NODE_ID + ".choice3") < 0) {
        quickReplies.push({
          title: translate(NODE_ID + ".opt4"),
          payload: NODE_ID + ".choice3",
          onChoose: async (answer, convo, bot, msg) => {
            convo.gotoThread("t_NODE_056");
          },
        });
      }

      if (doneOptions.indexOf(NODE_ID + ".choice4") < 0) {
        quickReplies.push({
          title: translate(NODE_ID + ".opt5"),
          payload: NODE_ID + ".choice4",
          onChoose: async (answer, convo, bot, msg) => {
            convo.gotoThread("t_NODE_058");
          },
        });
      }

      // if (doneOptions.indexOf(NODE_ID + ".choice5") < 0) {
      //   quickReplies.push({
      //     title: translate(NODE_ID + ".opt6"),
      //     payload: NODE_ID + ".choice5",
      //     onChoose: async (answer, convo, bot, msg) => {
      //       convo.gotoThread("t_NODE_023_1");
      //     },
      //   });
      // }
      if (vars.NODE_023) {
        quickReplies.push({
          title: translate(NODE_ID + ".opt6"),
          payload: NODE_ID + ".choice5",
          onChoose: async (answer, convo, bot, msg) => {
            convo.stop();
          },
        });
      }
      return quickReplies;
    },
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
export function markOptionAsDone(convo: BotkitDialogWrapper) {
  const oldOptions = convo.vars.doneMoneyOptions || [];
  oldOptions.push(convo.vars.NODE_023);
  convo.setVar("doneMoneyOptions", oldOptions);
  // clear each period
}
