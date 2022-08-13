import { BotkitConversation, Botkit } from "botkit";
import NODE_394 from "../../nodes/N_394/index";
import NODE_395 from "../../nodes/N_395";
import NODE_055 from "../../nodes/N_055/index";
import { NODE_398 } from "../../nodes/N_398/index";
import { NODE_399 } from "../../nodes/N_399/index";
import { NODE_401 } from "../../nodes/N_401/index";
import { NODE_400 } from "../../nodes/N_400/index";
import { NODE_397 } from "../../nodes/N_397/index";
import { NODE_440 } from "../../nodes/N_440/index";
import { NODE_441 } from "../../nodes/N_441/index";
import { NODE_442 } from "../../nodes/N_442/index";
import { NODE_443 } from "../../nodes/N_443/index";
import { NODE_444 } from "../../nodes/N_444/index";
import { NODE_445 } from "../../nodes/N_445/index";
import { NODE_446 } from "../../nodes/N_446/index";
import { NODE_447 } from "../../nodes/N_447/index";
import { NODE_448 } from "../../nodes/N_448/index";
import { NODE_449 } from "../../nodes/N_449/index";
import { NODE_450 } from "../../nodes/N_450/index";
import { NODE_451 } from "../../nodes/N_451/index";
import { NODE_452 } from "../../nodes/N_452/index";
import { NODE_453 } from "../../nodes/N_453/index";
import { NODE_454 } from "../../nodes/N_454/index";
import { NODE_455 } from "../../nodes/N_455/index";
import { NODE_456 } from "../../nodes/N_456/index";
import { NODE_457 } from "../../nodes/N_457/index";
import { NODE_458 } from "../../nodes/N_458/index";
import { NODE_459 } from "../../nodes/N_459/index";
import { NODE_460 } from "../../nodes/N_460/index";
import { NODE_461 } from "../../nodes/N_461/index";
import { NODE_462 } from "../../nodes/N_462/index";
import { NODE_406 } from "../../nodes/N_406/index";
import { NODE_435 } from "../../nodes/N_435/index";
import { NODE_040_2 } from "../../nodes/N_040_2";
import { NODE_463 } from "../../nodes";

export function D_393_406(botCtrl: Botkit) {
  // init dialogue
  const thisDialogue = new BotkitConversation("d_393_406", botCtrl);

  const begin = NODE_397(thisDialogue);
  thisDialogue.addAction(begin);

  thisDialogue.before("t_NODE_397", async (convo, bot) => {});
  NODE_055(thisDialogue);
  NODE_394(thisDialogue);
  NODE_395(thisDialogue);
  NODE_397(thisDialogue);
  NODE_398(thisDialogue);
  NODE_399(thisDialogue);
  NODE_400(thisDialogue);
  NODE_401(thisDialogue);
  NODE_406(thisDialogue);
  NODE_440(thisDialogue);
  NODE_441(thisDialogue);
  NODE_442(thisDialogue);
  NODE_443(thisDialogue);
  NODE_444(thisDialogue);
  NODE_445(thisDialogue);
  NODE_446(thisDialogue);
  NODE_446(thisDialogue);
  NODE_447(thisDialogue);
  NODE_448(thisDialogue);
  NODE_449(thisDialogue);
  NODE_450(thisDialogue);
  NODE_451(thisDialogue);
  NODE_452(thisDialogue);
  NODE_453(thisDialogue);
  NODE_454(thisDialogue);
  NODE_455(thisDialogue);
  NODE_456(thisDialogue);
  NODE_457(thisDialogue);
  NODE_458(thisDialogue);
  NODE_459(thisDialogue);
  NODE_460(thisDialogue);
  NODE_461(thisDialogue);
  NODE_462(thisDialogue);
  NODE_435(thisDialogue);
  NODE_463(thisDialogue);
  //back to the main menu
  NODE_040_2(thisDialogue);

  thisDialogue.addChildDialog("d_014_023", "d_014_023", "t_d_014_023");
  thisDialogue.addChildDialog("d_386_406", "d_386_406", "t_d_386_406");
  thisDialogue.addChildDialog("d_000_009", "d_000_009", "t_d_000_009");

  thisDialogue.addQuestion(
    "Hello i`m d_393_406 {{vars.NO_OF_YEARS_LEFT}} {{vars.NODE_029}}",
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
