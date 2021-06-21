import { BotkitConversation, Botkit } from "botkit";
import moment from "moment";
import NODE_015 from "../../nodes/N_015";
import NODE_016 from "../../nodes/N_016";
import NODE_017 from "../../nodes/N_017";
import NODE_018 from "../../nodes/N_018";
import NODE_018_1 from "../../nodes/N_018_1";
import NODE_055 from "../../nodes/N_055";

export function D_014_023(botCtrl: Botkit, parent: BotkitConversation) {
  // init dialogue
  const thisDialogue = new BotkitConversation("d_014_023", botCtrl);
  thisDialogue.addChildDialog("d_023_071", "d_023_071", "t_d_023_071");
  thisDialogue.addChildDialog("d_055_056", "d_055_056", "t_d_055_056");

  const begin = NODE_015(thisDialogue);
  thisDialogue.addAction(begin);

  NODE_015(thisDialogue);
  NODE_016(thisDialogue);
  NODE_017(thisDialogue);
  NODE_018(thisDialogue);
  NODE_018_1(thisDialogue);

  // thisDialogue.after(async (results, bot) => {
  //   const NoOfDays = moment()
  //     .startOf("D")
  //     .diff(moment(results.LAST_ZAKAT_DAY), "days");
  //   const NoOfYears = Math.floor(NoOfDays / 365);
  //   if (NoOfYears > 0) {
  //     return bot.beginDialog("d_023_071", results.vars);
  //   } else {
  //     return bot.beginDialog("d_055_056");
  //   }
  // });

  botCtrl.addDialog(thisDialogue);
}
