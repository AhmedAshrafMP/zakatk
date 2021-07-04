import { Botkit, BotkitConversation } from "botkit";
import NODE_001 from "../../nodes/N_001";
import NODE_002 from "../../nodes/N_002";
import NODE_003 from "../../nodes/N_003";
import NODE_004 from "../../nodes/N_004";
import NODE_006 from "../../nodes/N_006";
import NODE_006_1 from "../../nodes/N_006_1";
import NODE_007 from "../../nodes/N_007";
import NODE_007_1 from "../../nodes/N_007_1";
import NODE_007_2 from "../../nodes/N_007_2";
import NODE_008 from "../../nodes/N_008";

export function D_000_009(botCtrl: Botkit) {
  // init dialogue
  const thisDialogue = new BotkitConversation("d_000_009", botCtrl);

  const begin = NODE_001(thisDialogue);
  thisDialogue.addAction(begin);

  NODE_002(thisDialogue);
  NODE_003(thisDialogue);
  NODE_004(thisDialogue);
  NODE_006(thisDialogue);
  NODE_006_1(thisDialogue);
  NODE_007(thisDialogue);
  NODE_007_1(thisDialogue);
  NODE_007_2(thisDialogue);
  NODE_008(thisDialogue);

  thisDialogue.addChildDialog("d_014_023", "d_014_023", "t_d_014_023");
  thisDialogue.addChildDialog("d_000_009", "d_000_009", "t_d_000_009");

  botCtrl.addDialog(thisDialogue);

  return thisDialogue;
}
