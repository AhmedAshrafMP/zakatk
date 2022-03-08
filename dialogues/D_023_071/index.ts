import { Botkit, BotkitConversation } from "botkit";
import { safeParseFloat } from "../../helpers/variables";
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
  NODE_034,
  NODE_040_1,
  NODE_034_1,
  NODE_034_2,
  NODE_038,
  NODE_039,
  NODE_040,
  NODE_025,
  NODE_024,
  NODE_067,
  NODE_062,
  NODE_062_1,
  NODE_062_2,
  NODE_063,
  NODE_065,
  NODE_067_1,
  NODE_069,
  NODE_070,
  NODE_068,
  NODE_071,
  NODE_056,
  NODE_056_1,
  NODE_056_2,
  NODE_056_3,
  NODE_056_4,
  NODE_057,
  NODE_060,
  NODE_060_1,
  NODE_060_2,
  NODE_068_2,
  NODE_061_0,
  NODE_061_1,
  NODE_058,
  NODE_066,
  NODE_059,
  NODE_041,
  NODE_049,
  NODE_043,
  NODE_046,
  NODE_045,
  NODE_050,
  NODE_056_4_1,
  NODE_056_4_2,
  NODE_058_5,
  NODE_059_6,
} from "../../nodes";
import NODE_000 from "../../nodes/N_000";
import { NODE_037 } from "../../nodes/N_037";
import { NODE_056_2_1 } from "../../nodes/N_056_2_1";
import { NODE_056_2_2 } from "../../nodes/N_056_2_2";
import { NODE_061_0_1 } from "../../nodes/N_061_0_1";
import { NODE_061_0_2 } from "../../nodes/N_061_0_2";
import { NODE_061_1_1 } from "../../nodes/N_061_1_1";
import { NODE_061_1_2 } from "../../nodes/N_061_1_2";

export function D_023_071(botCtrl: Botkit) {
  // init dialogue
  const thisDialogue = new BotkitConversation("d_023_071", botCtrl);

  const begin = NODE_023(thisDialogue);
  thisDialogue.addAction(begin);
  NODE_023_1(thisDialogue);
  NODE_025(thisDialogue);
  NODE_024(thisDialogue);

  NODE_029(thisDialogue);

  NODE_030(thisDialogue);

  NODE_031(thisDialogue);
  NODE_032(thisDialogue);
  NODE_032_1(thisDialogue);

  NODE_034(thisDialogue);
  NODE_034_1(thisDialogue);
  NODE_034_2(thisDialogue);

  NODE_035(thisDialogue);
  NODE_035_1(thisDialogue);
  NODE_035_2(thisDialogue);
  NODE_035_3(thisDialogue);

  NODE_036(thisDialogue);
  NODE_037(thisDialogue);
  NODE_038(thisDialogue);
  NODE_039(thisDialogue);

  NODE_040(thisDialogue);
  NODE_040_1(thisDialogue);

  NODE_041(thisDialogue);
  NODE_043(thisDialogue);
  NODE_045(thisDialogue);
  NODE_046(thisDialogue);
  NODE_049(thisDialogue);
  NODE_050(thisDialogue);
  NODE_056(thisDialogue);
  NODE_056_1(thisDialogue);
  NODE_056_2_1(thisDialogue);
  NODE_056_2_2(thisDialogue);
  NODE_056_2(thisDialogue);
  NODE_056_3(thisDialogue);
  NODE_056_4(thisDialogue);
  NODE_056_4_1(thisDialogue);
  NODE_056_4_2(thisDialogue);
  NODE_058_5(thisDialogue);
  NODE_059_6(thisDialogue)

  NODE_057(thisDialogue);

  NODE_058(thisDialogue);
  NODE_059(thisDialogue);
  NODE_060(thisDialogue);
  NODE_060_1(thisDialogue);
  NODE_060_2(thisDialogue);

  NODE_061_0(thisDialogue);
  NODE_061_0_1(thisDialogue);
  NODE_061_0_2(thisDialogue);
  NODE_061_1(thisDialogue);
  NODE_061_1_1(thisDialogue);
  NODE_061_1_2(thisDialogue);
  NODE_062(thisDialogue);
  NODE_062_1(thisDialogue);
  NODE_062_2(thisDialogue);

  NODE_063(thisDialogue);
  NODE_065(thisDialogue);
  NODE_066(thisDialogue);

  NODE_067(thisDialogue);
  NODE_067_1(thisDialogue);

  NODE_068(thisDialogue);
  NODE_068_2(thisDialogue);
  NODE_069(thisDialogue);
  NODE_070(thisDialogue);
  NODE_000(thisDialogue);
  NODE_071(thisDialogue);

  thisDialogue.addQuestion(
    "Hello i`m d_023_071 {{vars.NO_OF_YEARS_LEFT}} {{vars.NODE_029}}",
    async (answer, convo, bot) => {
      let leftYears = safeParseFloat(convo.vars.NO_OF_YEARS_LEFT) - 1;
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
