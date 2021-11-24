import { BotkitConversation } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";
import { translate } from "../../helpers";

const NODE_ID = "NODE_000";
export default function NODE_000(convo: BotkitConversation): string {
  bkQRAsk(convo, NODE_ID + ".title", () => [], NODE_ID, {
    hello: "world",
  });

  return `t_${NODE_ID}`;
}
