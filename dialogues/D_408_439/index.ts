import {
  convertVarToCurrency,
  convertVarToCurrencySym,
} from "../../helpers/i18n/index";
import { BotkitConversation, Botkit } from "botkit";
import { getGoldPrices } from "../../helpers/apis";
import { NODE_408 } from "../../nodes/N_408/index";
import { NODE_411 } from "../../nodes/N_411/index";
import { NODE_422 } from "../../nodes/N_422/index";
import { NODE_423 } from "../../nodes/N_423/index";
import { NODE_424 } from "../../nodes/N_424/index";
import { NODE_425 } from "../../nodes/N_425/index";
import { NODE_426 } from "../../nodes/N_426/index";
import { NODE_427 } from "../../nodes/N_427/index";
import { NODE_429 } from "../../nodes/N_429/index";
import { NODE_430 } from "../../nodes/N_430/index";
import { NODE_432 } from "../../nodes/N_432/index";
import { NODE_434 } from "../../nodes/N_434/index";
import { NODE_428 } from "../../nodes/N_428/index";
import { NODE_421 } from "../../nodes/N_421/index";
import { NODE_410 } from "../../nodes/N_410/index";
import { NODE_412 } from "../../nodes/N_412/index";
import { NODE_413 } from "../../nodes/N_413/index";
import { NODE_435 } from "../../nodes/N_435/index";
import { NODE_418 } from "../../nodes/N_418/index";
import { NODE_417 } from "../../nodes/N_417/index";
import { NODE_415 } from "../../nodes/N_415/index";
import { NODE_437 } from "../../nodes/N_437/index";
import { NODE_439 } from "../../nodes/N_439/index";
import { NODE_436 } from "../../nodes/N_436/index";
import { NODE_420 } from "../../nodes";

export function D_408_439(botCtrl: Botkit) {
  // init dialogue
  const thisDialogue = new BotkitConversation("d_408_439", botCtrl);

  const begin = NODE_408(thisDialogue);
  thisDialogue.addAction(begin);

  thisDialogue.before("t_NODE_408", async (convo, bot) => {
    try {
      console.log(convo.vars, "stri");
      if (!convo.vars.gold_prices) {
        const prices = await getGoldPrices(
          convertVarToCurrencySym(convo.vars.NODE_004)
        );
        console.log("gold_prices", prices);
        convo.setVar("gold_prices", prices);
      }
    } catch (err) {
      await bot.cancelAllDialogs();
      return bot.say("Wrong gold prices");
    }
  });

  NODE_411(thisDialogue);
  NODE_422(thisDialogue);
  NODE_423(thisDialogue);
  NODE_424(thisDialogue);
  NODE_425(thisDialogue);
  NODE_426(thisDialogue);
  NODE_427(thisDialogue);
  NODE_429(thisDialogue);
  NODE_430(thisDialogue);
  NODE_432(thisDialogue);
  NODE_434(thisDialogue);
  NODE_428(thisDialogue);
  NODE_421(thisDialogue);
  NODE_410(thisDialogue);
  NODE_412(thisDialogue);
  NODE_413(thisDialogue);
  NODE_435(thisDialogue);
  NODE_417(thisDialogue);
  NODE_418(thisDialogue);
  NODE_415(thisDialogue);
  NODE_437(thisDialogue);
  NODE_439(thisDialogue);
  NODE_436(thisDialogue);
  NODE_420(thisDialogue);

  botCtrl.addDialog(thisDialogue);
}
