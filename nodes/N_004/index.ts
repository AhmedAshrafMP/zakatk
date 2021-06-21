import { BotkitConversation } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";

const NODE_ID = "NODE_004";
export default function NODE_004(convo: BotkitConversation): string {
  const CurrencyList = [
    "USD",
    "EURO",
    "EGP",
    "SAR",
    "AED",
    "KWD",
    "OMR",
    "BD",
    "LL",
    "JOD",
    "TND",
    "LYD",
    "MAD",
    "DT",
    "DA",
  ];

  bkQRAsk(
    convo,
    NODE_ID + ".title",
    CurrencyList.map((crs) => ({
      title: NODE_ID + ".currency." + crs,
      payload: NODE_ID + "." + crs,
      onChoose: async (answer, convo, bot, msg) => {
        convo.gotoThread("t_NODE_006");
      },
    })),
    NODE_ID
  );

  return `t_${NODE_ID}`;
}
