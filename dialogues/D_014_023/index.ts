import { BotkitConversation, Botkit } from "botkit";
import moment from "moment";
import { convertVarToCurrencySym } from "../../helpers";
import { getGoldPrices } from "../../helpers/apis";
import NODE_000 from "../../nodes/N_000";
import NODE_009 from "../../nodes/N_009";
import NODE_014 from "../../nodes/N_014";
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
  thisDialogue.addChildDialog("d_386_406", "d_386_406", "t_d_386_406");
  thisDialogue.addChildDialog("d_408_439", "d_408_439", "t_d_408_439");

  const begin = NODE_009(thisDialogue);
  thisDialogue.addAction(begin);

  NODE_014(thisDialogue);
  NODE_015(thisDialogue);
  NODE_016(thisDialogue);
  NODE_017(thisDialogue);
  NODE_018(thisDialogue);
  NODE_018_1(thisDialogue);
  NODE_000(thisDialogue);
  NODE_055(thisDialogue);
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

  thisDialogue.before("t_NODE_015", async (convo, bot) => {
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

  thisDialogue.after((v, bot) => {
    // restart the dialogue after finishing
    return bot.beginDialog("d_014_023", {
      NODE_002: v.NODE_002,
      NODE_003: v.NODE_003,
      NODE_004: v.NODE_004,
      NODE_006: v.NODE_006,
      NODE_006_1: v.NODE_006_1,
      NODE_008: v.NODE_008,
      gold_prices: v.gold_prices,
    });
  });

  botCtrl.addDialog(thisDialogue);
}
