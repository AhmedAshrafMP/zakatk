import { Botkit, BotkitConversation } from "botkit";
import NODE_000 from "../../nodes/N_000";

export function D_000_009(botCtrl: Botkit) {
  // init dialogue
  const thisDialogue = new BotkitConversation("d_000_009", botCtrl);

  const begin = NODE_000(thisDialogue);
  thisDialogue.addAction(begin);

  thisDialogue.addChildDialog("d_014_023", "d_014_023", "t_d_014_023");
  thisDialogue.addChildDialog("d_000_009", "d_000_009", "t_d_000_009");

  botCtrl.addDialog(thisDialogue);

  return thisDialogue;
}
