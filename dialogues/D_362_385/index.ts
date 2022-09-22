import { BotkitConversation, Botkit } from "botkit";

import { NODE_362 } from "../../nodes/N_362/index";
import { NODE_364 } from "../../nodes/N_364/index";
import { NODE_366 } from "../../nodes/N_366/index";
import { NODE_368 } from "../../nodes/N_368/index";
import { NODE_370 } from "../../nodes/N_370/index";
import { NODE_363 } from "../../nodes/N_363/index";
import { NODE_373 } from "../../nodes/N_373/index";
import { NODE_365 } from "../../nodes/N_365/index";
import { NODE_367 } from "../../nodes/N_367/index";
import { NODE_377 } from "../../nodes/N_377/index";
import { NODE_387 } from "../../nodes/N_387/index";
import { NODE_374 } from "../../nodes/N_374/index";
import { NODE_376 } from "../../nodes/N_376/index";
import { NODE_378 } from "../../nodes/N_378/index";
import { NODE_383 } from "../../nodes/N_383/index";
import { NODE_384 } from "../../nodes/N_384/index";
import { NODE_381 } from "../../nodes/N_381/index";
import { NODE_385 } from "../../nodes/N_385/index";
import {
  NODE_363_1,
  NODE_364_1,
  NODE_364_2,
  NODE_368_1,
  NODE_368_2,
  NODE_368_3,
  NODE_369,
  NODE_372,
  NODE_372_1,
  NODE_374_1,
  NODE_374_1_1,
  NODE_374_1_2,
  NODE_374_1_3,
  NODE_374_2,
  NODE_374_2_1,
  NODE_374_2_2,
  NODE_374_2_3,
  NODE_374_2_4,
  NODE_377_1,
  NODE_377_2,
  NODE_377_3,
  NODE_378_1,
  NODE_382,
  NODE_382_2,
  NODE_382_3,
  NODE_382_4,
  NODE_382_4_1,
  NODE_382_6,
} from "../../nodes";
import { NODE_382_1 } from "../../nodes/N_382_1";
import { NODE_374_1_4 } from "../../nodes/N_374_1_4";
import { NODE_374_2_5 } from "../../nodes/N_374_2_5";
import { NODE_382_5 } from "../../nodes/N_382_5";

export function D_362_385(botCtrl: Botkit) {
  // init dialogue
  const thisDialogue = new BotkitConversation("d_362_385", botCtrl);

  const begin = NODE_362(thisDialogue);
  thisDialogue.addAction(begin);

  thisDialogue.before("t_NODE_362", async (convo, bot) => {});
  NODE_362(thisDialogue);
  NODE_363(thisDialogue);
  NODE_363_1(thisDialogue);
  NODE_364(thisDialogue);
  NODE_366(thisDialogue);
  NODE_368(thisDialogue);
  NODE_370(thisDialogue);
  NODE_373(thisDialogue);
  NODE_365(thisDialogue);
  NODE_367(thisDialogue);
  NODE_377(thisDialogue);
  NODE_387(thisDialogue);
  NODE_374(thisDialogue);
  NODE_376(thisDialogue);
  NODE_378(thisDialogue);
  NODE_383(thisDialogue);
  NODE_384(thisDialogue);
  NODE_381(thisDialogue);
  NODE_385(thisDialogue);
  NODE_372(thisDialogue);
  NODE_369(thisDialogue);
  NODE_374_1(thisDialogue);
  NODE_374_2(thisDialogue);
  NODE_378_1(thisDialogue);
  NODE_372_1(thisDialogue);
  NODE_382(thisDialogue);
  NODE_377(thisDialogue);
  NODE_368_1(thisDialogue);
  NODE_374_1_1(thisDialogue);
  NODE_374_1_2(thisDialogue);
  NODE_374_1_3(thisDialogue);
  NODE_374_2_1(thisDialogue);
  NODE_374_2_2(thisDialogue);
  NODE_374_2_3(thisDialogue);
  NODE_374_2_4(thisDialogue);
  NODE_382_1(thisDialogue);
  NODE_377_1(thisDialogue);
  NODE_377_2(thisDialogue);
  NODE_377_3(thisDialogue);
  NODE_368_2(thisDialogue);
  NODE_368_3(thisDialogue);
  NODE_382_2(thisDialogue);
  NODE_382_3(thisDialogue);
  NODE_382_4(thisDialogue);
  NODE_364_1(thisDialogue);
  NODE_374_1_4(thisDialogue);
  NODE_374_2_5(thisDialogue);
  NODE_364_2(thisDialogue);
  NODE_382_4_1(thisDialogue);
  NODE_382_5(thisDialogue);
  NODE_382_6(thisDialogue);
  thisDialogue.addChildDialog("d_014_023", "d_014_023", "t_d_014_023");
  thisDialogue.addChildDialog("d_393_406", "d_393_406", "t_d_393_406");
  thisDialogue.addChildDialog("d_000_009", "d_000_009", "t_d_000_009");

  botCtrl.addDialog(thisDialogue);
}
