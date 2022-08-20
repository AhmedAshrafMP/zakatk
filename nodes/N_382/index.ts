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
  let rayZakatPercnet = 10;
  if (vars.NODE_377 && vars.NODE_377 === "NODE_377.choice0") {
    rayZakatPercnet = 5;
  }
  let rayZakatAmount = 0;
  let zakatCurrency = 2;
  if (safeParseFloat(vars.NODE_374_2)) {
    rayZakatAmount = safeParseFloat(vars.NODE_374_2);
    zakatCurrency = 2;
  }
  if (safeParseFloat(vars.NODE_374)) {
    rayZakatAmount = safeParseFloat(vars.NODE_374);
    zakatCurrency = 2;
  }

  if (safeParseFloat(vars.NODE_381) > 0) {
    rayZakatAmount = safeParseFloat(vars.NODE_381);
    zakatCurrency = 1;
  }

  rayZakatAmount = safeParseFloat((rayZakatAmount * rayZakatPercnet) / 100);
  return { zakatCurrency, rayZakatAmount, rayZakatPercnet: 0 };
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
          convo.stop();
        },
      },
    ],
    NODE_ID,
    {},
    (_tmp, vars) => {
      const { rayZakatAmount, zakatCurrency } = zakatZoro3Calc(vars);

      return translate(NODE_ID + ".title", {
        amount: rayZakatAmount,
        currency:
          zakatCurrency == 2
            ? translate(NODE_ID + ".kg")
            : convertVarToCurrency(vars.NODE_004),
      });
    }
  );

  return `t_${NODE_ID}`;
}
