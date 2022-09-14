import { BotkitConversation, BotkitDialogWrapper } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";
import { translate } from "../../helpers";
import { getYearsDiff } from "../../helpers/dates/yearsdiff";

const NODE_ID = "NODE_363_1";
export function NODE_363_1(convo: BotkitConversation): string {
  // clear each period
  bkQRAsk(
    convo,
    NODE_ID + ".title",
    (tmp, vars) => {
      const quickReplies: any[] = [];
      const oldSelectedQam7Sha3er: any[] =
        vars.selectedQam7Sha3eer && vars.selectedQam7Sha3eer.length > 0
          ? JSON.parse(vars.selectedQam7Sha3eer)
          : [];
      if (oldSelectedQam7Sha3er.indexOf(NODE_ID + ".choice0") < 0) {
        quickReplies.push({
          title: translate(NODE_ID + ".opt1"),
          payload: NODE_ID + ".choice0",
          onChoose: async (answer, convo, bot, msg) => {
            oldSelectedQam7Sha3er.push(NODE_ID + ".choice0");
            convo.setVar(
              "selectedQam7Sha3eer",
              JSON.stringify(oldSelectedQam7Sha3er)
            );
            convo.gotoThread("t_NODE_363");
          },
        });
      }
      if (oldSelectedQam7Sha3er.indexOf(NODE_ID + ".choice1") < 0) {
        quickReplies.push({
          title: translate(NODE_ID + ".opt2"),
          payload: NODE_ID + ".choice1",
          onChoose: async (answer, convo, bot, msg) => {
            oldSelectedQam7Sha3er.push(NODE_ID + ".choice1");
            convo.setVar(
              "selectedQam7Sha3eer",
              JSON.stringify(oldSelectedQam7Sha3er)
            );
            convo.gotoThread("t_NODE_363");
          },
        });
      }
      if (oldSelectedQam7Sha3er.indexOf(NODE_ID + ".choice2") < 0) {
        quickReplies.push({
          title: translate(NODE_ID + ".opt3"),
          payload: NODE_ID + ".choice2",
          onChoose: async (answer, convo, bot, msg) => {
            oldSelectedQam7Sha3er.push(NODE_ID + ".choice2");
            convo.setVar(
              "selectedQam7Sha3eer",
              JSON.stringify(oldSelectedQam7Sha3er)
            );
            convo.gotoThread("t_NODE_363");
          },
        });
      }
      if (oldSelectedQam7Sha3er.indexOf(NODE_ID + ".choice3") < 0) {
        quickReplies.push({
          title: translate(NODE_ID + ".opt4"),
          payload: NODE_ID + ".choice3",
          onChoose: async (answer, convo, bot, msg) => {
            oldSelectedQam7Sha3er.push(NODE_ID + ".choice3");
            convo.setVar(
              "selectedQam7Sha3eer",
              JSON.stringify(oldSelectedQam7Sha3er)
            );
            convo.gotoThread("t_NODE_363");
          },
        });
      }

      if (oldSelectedQam7Sha3er.length >= 4) {
        quickReplies.push({
          title: translate(NODE_ID + ".opt5"),
          payload: NODE_ID + ".choice4",
          onChoose: async (answer, convo, bot, msg) => {
            convo.gotoThread("t_NODE_382_1");
          },
        });
      }
      if (oldSelectedQam7Sha3er.length >= 4) {
        quickReplies.push({
          title: translate(NODE_ID + ".opt6"),
          payload: NODE_ID + ".choice5",
          onChoose: async (answer, convo, bot, msg) => {
            convo.gotoThread("t_NODE_362");
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
