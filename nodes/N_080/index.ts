import { BotkitConversation } from "botkit";
import bkSay from "../../bot_nodes/say";


const NODE_ID = "NODE_080"
export function NODE_080(convo: BotkitConversation): string {
  bkSay(convo, `${NODE_ID}.hello` , NODE_ID);

  return `t_${NODE_ID}`
}
