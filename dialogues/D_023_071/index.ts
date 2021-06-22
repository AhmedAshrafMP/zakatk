import { Botkit, BotkitConversation } from "botkit";
import {
  NODE_023_1,
  NODE_023,
  NODE_029,
  NODE_030,
  NODE_031,
  NODE_032,
  NODE_032_1,
  NODE_035,
  NODE_035_1,
  NODE_035_2,
  NODE_035_3,
  NODE_036,
} from "../../nodes";
import { NODE_037 } from "../../nodes/N_037";

export function D_023_071(botCtrl: Botkit) {
  // init dialogue
  const thisDialogue = new BotkitConversation("d_023_071", botCtrl);

  const begin = NODE_023(thisDialogue);
  thisDialogue.addAction(begin);
  NODE_023_1(thisDialogue);

  NODE_029(thisDialogue);

  NODE_030(thisDialogue);

  NODE_031(thisDialogue);
  NODE_032(thisDialogue);
  NODE_032_1(thisDialogue);

  NODE_035(thisDialogue);
  NODE_035_1(thisDialogue);
  NODE_035_2(thisDialogue);
  NODE_035_3(thisDialogue);

  NODE_036(thisDialogue);

  NODE_037(thisDialogue);

  thisDialogue.addQuestion(
    "Hello i`m d_023_071 {{vars.NO_OF_YEARS_LEFT}} {{vars.NODE_029}}",
    async (answer, convo, bot) => {
      let leftYears = parseFloat(convo.vars.NO_OF_YEARS_LEFT) - 1;
      convo.setVar("NO_OF_YEARS_LEFT", leftYears);
      if (leftYears > 0) {
        // console.log("resp", convo.vars);
        convo.gotoThread(begin);
      }
    },
    "HELLO",
    "hq"
  );

  botCtrl.addDialog(thisDialogue);
}
