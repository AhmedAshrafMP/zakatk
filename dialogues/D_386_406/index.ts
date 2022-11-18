import { Botkit, BotkitConversation } from "botkit";
import { NODE_386 } from "../../nodes/N_386/index";
import { NODE_387 } from "../../nodes/N_387/index";
import { NODE_388 } from "../../nodes/N_388/index";

import { NODE_393 } from "../../nodes/N_393/index";

import NODE_008 from "../../nodes/N_008/index";
import { NODE_391 } from "../../nodes/N_391/index";
import NODE_392 from "../../nodes/N_392";
import NODE_394 from "../../nodes/N_394/index";
import NODE_395 from "../../nodes/N_395";
import { NODE_397 } from "../../nodes/N_397/index";
import { NODE_435 } from "../../nodes/N_435";

export function D_386_406(botCtrl: Botkit) {
  // init dialogue
  const thisDialogue = new BotkitConversation("d_386_406", botCtrl);

  const begin = NODE_386(thisDialogue);
  thisDialogue.addAction(begin);

  thisDialogue.before("t_NODE_386", async (convo, bot) => {});
  NODE_008(thisDialogue);
  NODE_386(thisDialogue);
  NODE_387(thisDialogue);
  NODE_388(thisDialogue);
  NODE_391(thisDialogue);
  NODE_393(thisDialogue);
  NODE_394(thisDialogue);
  NODE_395(thisDialogue);
  NODE_392(thisDialogue);
  NODE_397(thisDialogue);
  NODE_435(thisDialogue);

  thisDialogue.addChildDialog("d_014_023", "d_014_023", "t_d_009_023");
  thisDialogue.addChildDialog("d_397_406", "d_397_406", "t_d_397_406");
  thisDialogue.addChildDialog("d_000_009", "d_000_009", "t_d_000_009");

  botCtrl.addDialog(thisDialogue);
}
