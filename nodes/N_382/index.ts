import { BotkitConversation } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";
import { convertVarToCurrency, translate } from "../../helpers";
import { safeParseFloat } from "../../helpers/variables";
/**
 *
 * @param vars convo vars
 * @description get zoro3 zakat aamount based on user selection
 * @returns
 */
function zakatZoro3Calc(vars) {
  let rayZakatPercentage1;
  let rayZakatPercentage2;
  let rayZakatPercentage3;
  let rayZakatPercentage4;

  if (vars.NODE_377 && vars.NODE_377 === "NODE_377.choice0") {
    if (safeParseFloat(vars.NODE_374_1) + safeParseFloat(vars.NODE_374_2_1) > 1)
      rayZakatPercentage1 = 5;
  } else rayZakatPercentage1 = 10;
  if (vars.NODE_377_1 && vars.NODE_377_1 === "NODE_377_1.choice0") {
    if (
      safeParseFloat(vars.NODE_374_1_1) + safeParseFloat(vars.NODE_374_2_2) >
      1
    )
      rayZakatPercentage2 = 5;
  } else rayZakatPercentage2 = 10;

  if (vars.NODE_377 && vars.NODE_377_2 === "NODE_377_2.choice0") {
    if (
      safeParseFloat(vars.NODE_374_1_2) + safeParseFloat(vars.NODE_374_2_3) >
      1
    )
      rayZakatPercentage3 = 5;
  } else rayZakatPercentage3 = 10;
  if (vars.NODE_377 && vars.NODE_377_3 === "NODE_377_3.choice0") {
    if (
      safeParseFloat(vars.NODE_374_1_3) + safeParseFloat(vars.NODE_374_2_4) >
      1
    )
      rayZakatPercentage4 = 5;
  } else rayZakatPercentage4 = 10;

  let qam7 =
    (safeParseFloat(vars.NODE_374_1 || vars.NODE_374_2_1) *
      rayZakatPercentage1) /
    100;
  let sha3er =
    (safeParseFloat(vars.NODE_374_1_1 || vars.NODE_374_2_2) *
      rayZakatPercentage2) /
    100;
  let zabeb =
    (safeParseFloat(vars.NODE_374_1_2 || vars.NODE_374_2_3) *
      rayZakatPercentage3) /
    100;
  let tamr =
    (safeParseFloat(vars.NODE_374_1_3 || vars.NODE_374_2_4) *
      rayZakatPercentage4) /
    100;

  return { rayZakatPercnet: 0, qam7, sha3er, zabeb, tamr };
}

const NODE_ID = "NODE_382";
export function NODE_382(convo: BotkitConversation): string {
  bkQRAsk(
    convo,
    NODE_ID + ".title",
    [
      {
        title: NODE_ID + ".opt1",
        payload: NODE_ID + ".choice0",
        onChoose: async (answer, convo, bot, msg) => {
          convo.gotoThread("t_NODE_363_1");
        },
      },
      {
        title: NODE_ID + ".opt2",
        payload: NODE_ID + ".choice1",
        onChoose: async (answer, convo, bot, msg) => {
          convo.stop();
        },
      },
      {
        title: NODE_ID + ".opt3",
        payload: NODE_ID + ".choice2",
        onChoose: async (answer, convo, bot, msg) => {
          convo.setVar("zakatZoro3CalcQam7", zakatZoro3Calc(convo.vars).qam7);
          convo.setVar(
            "zakatZoro3CalcSha3er",
            zakatZoro3Calc(convo.vars).sha3er
          );
          convo.setVar("zakatZoro3CalcZabeb", zakatZoro3Calc(convo.vars).zabeb);
          convo.setVar("zakatZoro3CalcTamr", zakatZoro3Calc(convo.vars).tamr);
          convo.gotoThread("t_NODE_382_1");
        },
      },
    ],
    NODE_ID,
    {}
  );

  return `t_${NODE_ID}`;
}
