import { Botkit, BotkitConversation } from "botkit";
import NODE_000 from "../../nodes/N_000";
import NODE_002 from "../../nodes/N_002";
import NODE_003 from "../../nodes/N_003";

export function D_000_003(botCtrl: Botkit) {
  // init dialogue
  const thisDialogue = new BotkitConversation("d_000_003", botCtrl);

  NODE_000(thisDialogue);
  NODE_002(thisDialogue);
  NODE_003(thisDialogue);
  botCtrl.addDialog(thisDialogue);
}
